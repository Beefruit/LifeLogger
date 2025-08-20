import { NextResponse, NextRequest } from "next/server";
import { createClient } from "@/utils/supabase/server";

export const POST = async (request: NextRequest) => {
  const supabase = await createClient();
  const formData = await request.formData();

  const file = formData.get("profileImage") as File | null;
  const introduction = formData.get("introduction") as string;

  // 1. 사용자 정보 가져오기
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return NextResponse.json(
      { error: "사용자 정보를 가져올 수 없습니다." },
      { status: 401 }
    );
  }

  let profileImageUrl: string | null = null;

  // 2. 프로필 이미지 업로드
  if (file) {
    const profileExt = file.name.split(".").pop();
    const filePath = `${user.id}.${profileExt}`;

    const { error: uploadError } = await supabase.storage
      .from("profile-images")
      .upload(filePath, file, { upsert: true }); // 기존 파일 덮어쓰기 가능

    if (uploadError) {
      return NextResponse.json(
        { error: "이미지 업로드 실패" },
        { status: 500 }
      );
    }

    const { data } = supabase.storage
      .from("profile-images")
      .getPublicUrl(filePath);

    profileImageUrl = data.publicUrl;
  }

  // 3. DB 저장
  const { error: dbError } = await supabase.from("profiles").upsert({
    id: user.id,
    bio: introduction,
    avatar_url: profileImageUrl,
  });

  if (dbError) {
    return NextResponse.json({ error: "DB 저장 실패" }, { status: 500 });
  }

  return NextResponse.json({ message: "프로필 설정이 완료되었습니다." });
};
