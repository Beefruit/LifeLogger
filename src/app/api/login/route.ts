import { NextResponse, NextRequest } from "next/server";
import { createClient } from "@/utils/supabase/server";

export const POST = async (request: NextRequest) => {
  const supabase = await createClient();
  const { email, password } = await request.json();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }

  return NextResponse.json(
    {
      message: "로그인이 완료되었습니다.",
      user: data.user,
    },
    { status: 200 }
  );
};
