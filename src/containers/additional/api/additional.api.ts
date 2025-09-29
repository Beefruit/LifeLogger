import { TCategory } from "@/types";
import { createClient } from "@/utils/supabase/client";
import { getUserProfile } from "@/api/user/client";

interface IFormData {
  category: TCategory;
  rating: number;
  title: string;
  experience: string;
  description: string;
  images: File[] | null;
}

const BUCKET = "record-images";

export const postAdditional = async (data: IFormData) => {
  const supabase = createClient();

  // 0) 로그인/세션 확인
  const [{ data: authUser }, profile] = await Promise.all([
    supabase.auth.getUser(),
    getUserProfile(),
  ]);

  const uid = authUser.user?.id;
  if (!uid) throw new Error("로그인이 필요합니다.");
  if (!profile?.id || profile.id !== uid) {
    throw new Error("세션 사용자와 프로필 정보가 일치하지 않습니다.");
  }

  // 1) 기록 저장
  const { data: record, error: recordErr } = await supabase
    .from("records")
    .insert({
      user_id: uid,
      category: data.category,
      title: data.title,
      visit_or_experience_date: data.experience || null,
      description: data.description,
      rating: data.rating,
    })
    .select("*")
    .single();

  if (recordErr) {
    console.error(recordErr);
    throw new Error("기록 저장에 실패했습니다.");
  }

  // 2) 파일 업로드
  const files: File[] = Array.isArray(data.images) ? data.images : [];
  if (files.length === 0) {
    return { recordId: record.id, uploaded: [] as string[] };
  }

  const uploadedUrls: string[] = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    // 확장자/경로
    const originalName = file.name || `image-${Date.now()}-${i}.jpg`;
    const ext = (originalName.split(".").pop() || "jpg").toLowerCase();
    const objectPath = `users/${uid}/records/${
      record.id
    }/${Date.now()}-${i}.${ext}`;

    // 업로드 (Public 버킷 가정)
    const { error: uploadErr } = await supabase.storage
      .from(BUCKET)
      .upload(objectPath, file, {
        upsert: false,
        contentType: file.type || "image/jpeg",
      });

    if (uploadErr) {
      console.error(uploadErr);
      throw new Error("이미지 업로드에 실패했습니다.");
    }

    // Public URL 생성
    const { data: pub } = supabase.storage
      .from(BUCKET)
      .getPublicUrl(objectPath);
    const publicUrl = pub?.publicUrl;
    if (!publicUrl) {
      // Public 버킷이 아니라면 여기서부터는 표시가 불가하므로 에러 처리
      throw new Error(
        "버킷이 Public이 아닙니다. record_images.image_url만 저장하려면 버킷을 Public으로 설정하세요."
      );
    }

    uploadedUrls.push(publicUrl);
  }

  // 3) record_images 저장 (image_url만)
  const rows = uploadedUrls.map((url) => ({
    record_id: record.id,
    image_url: url,
  }));
  const { error: imgErr } = await supabase.from("record_images").insert(rows);
  if (imgErr) {
    console.error(imgErr);
    throw new Error("이미지 메타데이터 저장에 실패했습니다.");
  }

  alert("기록이 성공적으로 저장되었습니다.");

  return { recordId: record.id, uploaded: uploadedUrls };
};
