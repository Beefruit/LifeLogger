"use client";

export const postProfileSetting = async (data: {
  profileImage: File | null;
  introduction: string;
}) => {
  const { profileImage, introduction } = data;

  const response = await fetch("/api/profile-setting", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      profileImage: profileImage ? URL.createObjectURL(profileImage) : null,
      introduction,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to update profile settings");
  }

  return response.json();
};
