"use client";

import { useSignup } from "./hook/useSignup";
import { type FC } from "react";
import styles from "./Signup.module.css";
import classNames from "classnames/bind";
import { User, Mail, Lock, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const cx = classNames.bind(styles);

const SignupContainer: FC = () => {
  const {
    name,
    email,
    password,
    confirmPassword,
    onChangeName,
    onChangeEmail,
    onChangePassword,
    onChangeConfirmPassword,
    onSubmit,
  } = useSignup();

  return (
    <form className={cx("signup-form")} onSubmit={onSubmit}>
      <div className={cx("form-header")}>
        <h2 className={cx("form-title")}>회원가입</h2>
        <p className={cx("form-description")}>
          몇 가지 정보만 입력하면 시작할 수 있습니다.
        </p>
      </div>
      <div className={cx("form-group")}>
        <label className={cx("form-label")}>이름</label>
        <div className={cx("form-container")}>
          <div className={cx("form-icon")}>
            <User size={16} />
          </div>
          <input
            type="text"
            className={cx("form-input")}
            placeholder="홍길동"
            value={name}
            onChange={onChangeName}
            required
          />
        </div>
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
            placeholder="your@email.com"
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
            placeholder="최소 8자 이상"
            value={password}
            onChange={onChangePassword}
            required
          />
          <div className={cx("eye-icon")}>
            <Eye size={16} />
          </div>
        </div>
      </div>
      <div className={cx("form-group")}>
        <label className={cx("form-label")}>비밀번호 확인</label>
        <div className={cx("form-container")}>
          <div className={cx("form-icon")}>
            <Lock size={16} />
          </div>
          <input
            type="password"
            className={cx("form-input")}
            placeholder="비밀번호를 다시 입력하세요"
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
            required
          />
          <div className={cx("eye-icon")}>
            <Eye size={16} />
          </div>
        </div>
      </div>
      <button type="submit" className={cx("form-button")}>
        계정 만들기
      </button>
      <div className={cx("form-line")}>
        <span className={cx("form-line__text")}>또는</span>
      </div>
      <button type="button" className={cx("link-button")}>
        <Link href="/Oauth/google" className={cx("signup-link")}>
          <Image src={"/img/google.svg"} alt="google" width={16} height={16} />
          <p className={cx("link-description")}>Google로 계속하기</p>
        </Link>
      </button>
      <button type="button" className={cx("link-button")}>
        <Link href="/Oauth/apple" className={cx("signup-link")}>
          <Image src={"/img/apple.svg"} alt="apple" width={16} height={16} />
          <p className={cx("link-description")}>apple로 계속하기</p>
        </Link>
      </button>
      <div className={cx("form-footer")}>
        <p className={cx("footer-text")}>
          이미 계정이 있으신가요?
          <Link href="/login" className={cx("login-link")}>
            로그인
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignupContainer;
