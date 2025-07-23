import { NextRequest, NextResponse } from "next/server";

import { createClient } from "@/utils/supabase/server";

const checkIfNewUser = async (userId: string): Promise<boolean> => {
  const supabase = await createClient();
  const { data } = await supabase
    .from("profiles")
    .select("id")
    .eq("id", userId)
    .maybeSingle();

  return !data;
};

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/";
  const supabase = await createClient();

  if (code) {
    const {
      error,
      data: { user },
    } = await supabase.auth.exchangeCodeForSession(code);

    if (!error && user) {
      const isFirstLogin = await checkIfNewUser(user.id);

      if (isFirstLogin) {
        return NextResponse.redirect(
          `${process.env.NEXT_PUBLIC_BASE_URL}/profile-setting?next=${next}`
        );
      }

      return NextResponse.redirect(
        `${process.env.NEXT_PUBLIC_BASE_URL}${next}`
      );
    }
  } else {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      const isFirstLogin = await checkIfNewUser(user.id);

      if (isFirstLogin) {
        return NextResponse.redirect(
          `${process.env.NEXT_PUBLIC_BASE_URL}/profile-setting?next=${next}`
        );
      }

      return NextResponse.redirect(
        `${process.env.NEXT_PUBLIC_BASE_URL}${next}`
      );
    }
  }

  return NextResponse.redirect(
    `${process.env.NEXT_PUBLIC_BASE_URL}/auth/auth-code-error`
  );
};
