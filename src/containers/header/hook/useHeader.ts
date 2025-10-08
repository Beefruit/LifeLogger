"use client";

import { useEffect, useState } from "react";
import { getUserProfile } from "@/api/user/client";

interface IUseHeaderReturn {
  isLogin: boolean;
  isMobileSize: boolean;
  isMobileMenuOpen: boolean;
  onClickMobileMenu: () => void;
  userProfile: {
    avatar_url: string | null;
    name: string | null;
  } | null;
}

export const useHeader = (): IUseHeaderReturn => {
  const [isMobileSize, setIsMobileSize] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [userProfile, setUserProfile] = useState<{
    avatar_url: string | null;
    name: string | null;
  } | null>(null);

  const onClickMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    (async () => {
      const userProfileData = await getUserProfile();

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobileSize(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isLogin,
    userProfile,
    isMobileSize,
    isMobileMenuOpen,
    onClickMobileMenu,
  };
};
