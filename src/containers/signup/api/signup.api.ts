"use client";

export const postSignup = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  const response = await fetch("/api/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "회원가입에 실패했습니다.");
  }

  return response.json();
};
