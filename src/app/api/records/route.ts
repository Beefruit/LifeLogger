import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export const GET = async () => {
  const supabase = await createClient();

  const { data: records, error } = await supabase
    .from("records")
    .select("*")
    .order("created_at", { ascending: false })
    .single();

  if (error) {
    return NextResponse.json(
      { error: "기록을 가져오는 데 실패했습니다." },
      { status: 400 }
    );
  }

  return NextResponse.json(records, { status: 200 });
};
