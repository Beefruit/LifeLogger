"use client";

import { useLogin } from "./hook/useLogin";
import { type FC } from "react";
import styles from "./Login.module.css";
import classNames from "classnames/bind";
import { Mail, Lock, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const cx = classNames.bind(styles);

const LoginContainer: FC = () => {
  const { email, password, onChangeEmail, onChangePassword, onSubmit } =
    useLogin();

  return (
    <form className={cx("login-form")} onSubmit={onSubmit}>
      <div className={cx("form-header")}>
        <h2 className={cx("form-title")}>로그인</h2>
        <p className={cx("form-description")}>
          이메일과 비밀번호를 입력하세요.
        </p>
      </div>
      <div className={cx("form-group")}>
        <label className={cx("form-label")}>이메일</label>
        <div className={cx("form-container")}>
          <div className={cx("form-icon")}>
            <Mail size={16} />
          </div>
          <input
            type="text"
            className={cx("form-input")}
            placeholder="이메일을 입력해주세요"
            value={email}
            onChange={onChangeEmail}
            required
          />
        </div>
      </div>
      <div className={cx("form-group")}>
        <label className={cx("form-label")}>비밀번호</label>
        <div className={cx("form-container")}>
          <div className={cx("form-icon")}>
            <Lock size={16} />
          </div>
          <input
            type="password"
            className={cx("form-input")}
            placeholder="비밀번호를 입력해주세요."
            value={password}
            onChange={onChangePassword}
            required
          />
          <div className={cx("eye-icon")}>
            <Eye size={16} />
          </div>
        </div>
      </div>
      <button type="submit" className={cx("form-button")}>
        로그인
      </button>
      <div className={cx("form-line")}>
        <span className={cx("form-line__text")}>또는</span>
      </div>
      <button type="button" className={cx("link-button")}>
        <Link href="/Oauth/google" className={cx("login-link")}>
          <Image src={"/img/google.svg"} alt="google" width={16} height={16} />
          <p className={cx("link-description")}>Google로 계속하기</p>
        </Link>
      </button>
      <button type="button" className={cx("link-button")}>
        <Link href="/Oauth/apple" className={cx("login-link")}>
          <Image src={"/img/apple.svg"} alt="apple" width={16} height={16} />
          <p className={cx("link-description")}>apple로 계속하기</p>
        </Link>
      </button>
      <div className={cx("form-footer")}>
        <p className={cx("footer-text")}>
          계정이 없으신가요?&nbsp;
          <Link href="/signup" className={cx("signup-link")}>
            회원가입
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginContainer;
