"use client";

import { useState } from "react";
import { postProfileSetting } from "../api/profileSetting.api";
import { useRouter, useSearchParams } from "next/navigation";
import { isWhitespace } from "@/utils/validation";

interface IUseProfileSettingReturn {
  LIMIT_INTRODUCTION_LENGTH: number;
  LIMIT_NICKNAME_LENGTH: number;
  profileImage: File | null;
  introduction: string;
  previewImage: string | null;
  nickname: string;
  onChangeProfileImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeText: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmitProfileSetting: (e: React.FormEvent<HTMLFormElement>) => void;
  onChangeNickname: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useProfileSetting = (): IUseProfileSettingReturn => {
  const LIMIT_INTRODUCTION_LENGTH = 500;
  const LIMIT_NICKNAME_LENGTH = 15;

  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [introduction, setIntroduction] = useState("");
  const [nickname, setNickname] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const onChangeProfileImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      setProfileImage(null);
      setPreviewImage(null);
      return;
    }

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setPreviewImage(reader.result as string);
    };

    setProfileImage(file);
  };

  const onChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length > LIMIT_INTRODUCTION_LENGTH) {
      return;
    }

    setIntroduction(e.target.value.slice(0, LIMIT_INTRODUCTION_LENGTH));
  };

  const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > LIMIT_NICKNAME_LENGTH) {
      return;
    }

    setNickname(e.target.value.slice(0, LIMIT_NICKNAME_LENGTH));
  };

  const onSubmitProfileSetting = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (isWhitespace(nickname)) {
      alert("띄어쓰기를 제거해주세요.");
      return;
    }

    try {
      await postProfileSetting({
        profileImage,
        nickname,
        introduction,
      });

      const nextUrl = searchParams.get("next") || "/";

      router.replace(nextUrl);
    } catch (error) {
      alert("프로필 설정에 실패했습니다. 다시 시도해주세요.");
      console.error("프로필 설정 오류:", error);
    }
  };

  return {
    LIMIT_INTRODUCTION_LENGTH,
    LIMIT_NICKNAME_LENGTH,
    profileImage,
    introduction,
    previewImage,
    nickname,
    onChangeNickname,
    onChangeText,
    onChangeProfileImage,
    onSubmitProfileSetting,
  };
};
