"use client";

export const postLogin = async (data: { email: string; password: string }) => {
  const response = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "로그인에 실패했습니다.");
  }

  return response.json();
};
