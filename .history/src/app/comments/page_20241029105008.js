import { useEffect, useState } from "react";

const [socials, setSocials] = useState([]);
const [loadingSocials, setLoadingSocials] = useState(false);

("use server");
export default async function Comments() {
  useEffect(() => {
    const loadComments = async () => {
      const token = await getToken({ template: "supabase" });
      const socials = await getSocials({ userId, token });
      setSocials(socials);
    };
    loadingSocials(socials);
  }, []);
  return <></>;
}
