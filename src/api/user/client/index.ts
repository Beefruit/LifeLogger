"use client";

export const getUserProfile = async () => {
  const response = await fetch(`/api/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    return null;
  }

  return response.json();
};
