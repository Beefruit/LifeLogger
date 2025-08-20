import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export const GET = async () => {
  const supabase = await createClient();

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

  // 2. 프로필 정보 가져오기
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (profileError) {
    return NextResponse.json(
      { error: "프로필 정보를 가져올 수 없습니다." },
      { status: 500 }
    );
  }

  return NextResponse.json(profile);
};
