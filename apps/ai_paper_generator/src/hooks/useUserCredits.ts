import { useState, useEffect } from "react";
import { getClient, getCurrentUserId } from "../services/supabase";

export function useUserCredits() {
  const [credits, setCredits] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCredits() {
      try {
        const userId = await getCurrentUserId();
        const client = getClient();
        const { data, error } = await client
          .from("users")
          .select("credits")
          .eq("id", userId)
          .single();

        if (error) {
          console.error("Error fetching credits:", error);
        } else {
          setCredits(data?.credits ?? 0);
        }
      } catch (err) {
        console.error("Error in fetchCredits:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchCredits();
  }, []);

  return { credits, loading };
}
