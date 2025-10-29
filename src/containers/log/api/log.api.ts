"use client";

export const getLogs = async () => {
  const response = await fetch(`/api/records/my`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch search logs");
  }
  const records = await response.json();

  return records;
};
