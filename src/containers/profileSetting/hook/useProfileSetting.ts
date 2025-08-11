"use client";

import { useState } from "react";
import { postProfileSetting } from "../api/profileSetting.api";

interface IUseProfileSettingReturn {
  LIMIT_INTRODUCTION_LENGTH: number;
  profileImage: File | null;
  introduction: string;
  previewImage: string | null;
  onChangeProfileImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeText: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmitProfileSetting: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const useProfileSetting = (): IUseProfileSettingReturn => {
  const LIMIT_INTRODUCTION_LENGTH = 500;

  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [introduction, setIntroduction] = useState("");

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

  const onSubmitProfileSetting = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      await postProfileSetting({
        profileImage,
        introduction,
      });

      alert("프로필 설정이 완료되었습니다.");
    } catch (error) {
      alert("프로필 설정에 실패했습니다. 다시 시도해주세요.");
      console.error("프로필 설정 오류:", error);
    }
  };

  return {
    LIMIT_INTRODUCTION_LENGTH,
    profileImage,
    introduction,
    previewImage,
    onChangeText,
    onChangeProfileImage,
    onSubmitProfileSetting,
  };
};
