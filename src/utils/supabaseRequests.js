import { supabaseClient } from "./supabaseClient";

export const getSocials = async ({ userId, token }) => {
  const supabase = await supabaseClient(token);
  const { data: social } = await supabase
    .from("social")
    .select("*")
    .eq("user_id", userId);
  return social;
};
