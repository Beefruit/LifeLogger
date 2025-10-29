"use client";

import { useState } from "react";
import { postLogin } from "../api/login.api";
import { useRouter } from "next/navigation";

export const useLogin = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await postLogin({ email, password });

      router.push("/auth-callback");
      alert("로그인에 성공했습니다.");
    } catch {
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return {
    email,
    password,
    onChangeEmail,
    onChangePassword,
    onSubmit,
  };
};
