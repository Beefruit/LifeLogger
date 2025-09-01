import { User } from "lucide-react";
import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export const GET = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json(
      { error: "사용자를 찾을 수 없습니다." },
      { status: 401 }
    );
  }

  const { data: records } = await supabase
    .from("records")
    .select("*")
    .eq("user_id", user.id);

  if (!records) {
    return NextResponse.json(
      { error: "기록을 찾을 수 없습니다." },
      { status: 404 }
    );
  }

  return NextResponse.json(records, { status: 200 });
};
