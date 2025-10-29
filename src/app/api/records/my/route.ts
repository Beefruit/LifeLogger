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

  const { data: images, error: imageError } = await supabase
    .from("record_images")
    .select("*")
    .order("created_at", { ascending: false });

  if (imageError) {
    return NextResponse.json(
      { error: "이미지를 가져오는 데 실패했습니다." },
      { status: 400 }
    );
  }

  const recordsWithImages = records.map((record) => {
    const recordImages = images
      .filter((image) => image.record_id === record.id)
      .map((image) => image.image_url);
    return { ...record, images: recordImages };
  });

  return NextResponse.json(recordsWithImages, { status: 200 });
};
