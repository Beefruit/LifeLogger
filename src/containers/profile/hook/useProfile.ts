"use client";

import { useEffect, useState } from "react";
import { getUserProfile } from "@/api/user/client";
import { formatDateToYearMonth } from "../domain";

interface IUseProfileReturn {
  userProfile: {
    avatar_url: string | null;
    bio: string | null;
    name: string | null;
    created_at: string | null;
  } | null;
}

export const useProfile = (): IUseProfileReturn => {
  const [userProfile, setUserProfile] = useState<{
    avatar_url: string | null;
    bio: string | null;
    name: string | null;
    created_at: string | null;
  } | null>(null);

  useEffect(() => {
    (async () => {
      const userProfileData = await getUserProfile();
      setUserProfile({
        ...userProfileData,
        created_at: formatDateToYearMonth(userProfileData.created_at),
      });
    })();
  }, []);

  return {
    userProfile,
  };
};
