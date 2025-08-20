"use client";

import { useEffect, useState } from "react";
import { getUserProfile } from "@/api/user/client";

interface IUseHeaderReturn {
  isLogin: boolean;
  userProfile: {
    avatar_url: string | null;
    name: string | null;
  } | null;
}

export const useHeader = (): IUseHeaderReturn => {
  const [isLogin, setIsLogin] = useState(false);
  const [userProfile, setUserProfile] = useState<{
    avatar_url: string | null;
    name: string | null;
  } | null>(null);

  useEffect(() => {
    (async () => {
      const userProfileData = await getUserProfile();

      console.log("User Profile Data:", userProfileData.avatar_url);

      if (userProfileData) {
        setUserProfile({
          avatar_url: userProfileData.avatar_url,
          name: userProfileData.name,
        });
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    })();
  }, []);

  return {
    isLogin,
    userProfile,
  };
};
