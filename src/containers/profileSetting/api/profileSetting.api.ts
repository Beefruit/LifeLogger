"use client";

export const postProfileSetting = async (data: {
  profileImage: File | null;
  nickname: string;
  introduction: string;
}) => {
  const formData = new FormData();

  if (data.profileImage) {
    formData.append("profileImage", data.profileImage);
  }
  formData.append("nickname", data.nickname);
  formData.append("introduction", data.introduction);

  const response = await fetch("/api/profile-setting", {
    method: "POST",
    body: formData, // Content-Type 자동 설정됨
  });

  if (!response.ok) {
    throw new Error("Failed to update profile settings");
  }

  return response.json();
};
