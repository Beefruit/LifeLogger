import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/utils/supabase/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const id = (await params).id;
  const supabase = await createClient();

  const { data: record, error } = await supabase
    .from("records")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return NextResponse.json(
      { error: "기록을 가져오는 데 실패했습니다." },
      { status: 400 }
    );
  }

  const { data: images, error: imageError } = await supabase
    .from("record_images")
    .select("*")
    .eq("record_id", id)
    .order("created_at", { ascending: false });

  if (imageError) {
    return NextResponse.json(
      { error: "이미지를 가져오는 데 실패했습니다." },
      { status: 400 }
    );
  }

  const recordWithImages = {
    ...record,
    images: images.map((img) => img.image_url),
  };

  return NextResponse.json({ record: recordWithImages }, { status: 200 });
};
