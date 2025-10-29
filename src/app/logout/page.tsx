import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

const LogoutPage = async (req: Request) => {
  const supabase = await createClient();
  await supabase.auth.signOut();

  redirect("/login");
};

export default LogoutPage;
