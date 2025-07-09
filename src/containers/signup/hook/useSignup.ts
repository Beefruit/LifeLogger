"use client";

import { useState } from "react";
import { postSignup } from "../api/signup.api";

export const useSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const onChangeConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await postSignup({
        name,
        email,
        password,
      });

      console.log("회원가입 성공:", response);
    } catch (error) {
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
    console.log("회원가입 정보:", { name, email, password, confirmPassword });
  };
  return {
    name,
    email,
    password,
    confirmPassword,
    onChangeName,
    onChangeEmail,
    onChangePassword,
    onChangeConfirmPassword,
    onSubmit,
  };
};
