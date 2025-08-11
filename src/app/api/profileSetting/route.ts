import { NextResponse, NextRequest } from "next/server";
import { createClient } from "@/utils/supabase/server";

export const POST = async (request: NextRequest) => {
  const supabase = await createClient();
  const { profileImage, introduction } = await request.json();

  // 1. 사용자 정보 가져오기
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    console.error("사용자 정보 가져오기 오류:", userError);
    return;
  }

  let profileImageUrl: string | null = null;

  // 2. 프로필 이미지 업로드
  if (profileImage) {
    const profileExt = profileImage.split(".").pop();
    const filePath = `${user.id}.${profileExt}`;

    const { error: uploadError } = await supabase.storage
      .from("profile-images")
      .upload(filePath, profileImage);
    if (uploadError) {
      console.error("프로필 이미지 업로드 실패:", uploadError);
      return;
    }

    const { data } = supabase.storage
      .from("profile-images")
      .getPublicUrl(filePath);

    profileImageUrl = data.publicUrl;
  }

  // 3. user_profiles 테이블에 upsert
  const { error: dbError } = await supabase.from("profiles").upsert({
    id: user.id,
    email: user.email,
    introduction,
    profile_image: profileImageUrl,
  });

  if (dbError) {
    console.error("DB 저장 실패:", dbError);
    return;
  }

  // // 4. 성공 후 이동
  window.location.href = "/";
};
