import { type FC } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import classNames from "classnames/bind";
import { Mail } from "lucide-react";
import { Lock } from "lucide-react";
import { Eye } from "lucide-react";

const cx = classNames.bind(styles);

const LoginPage: FC = () => {
  return (
    <div>
      <div className={cx("login-header")}>
        <Image src={"/img/logo.png"} alt="logo" width={40} height={40} />
        <h2 className={cx("header-title")}>라이프로거</h2>
      </div>
      <div className={cx("login-main")}>
        <h2 className={cx("login-title")}>다시 오신 것을 환영합니다.</h2>
        <p className={cx("login-description")}>
          계정에 로그인하여 여정을 계속하세요.
        </p>
      </div>
      <form className={cx("login-form")}>
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
              placeholder="your@email.com"
            ></input>
          </div>
        </div>
        <div className={cx("form-group")}>
          <label className={cx("form-label")}>비밀번호</label>
          <div className={cx("form-container")}>
            <div className={cx("form-icon")}>
              <Lock size={16} />
            </div>
            <input
              type="text"
              className={cx("form-input")}
              placeholder="비밀번호를 입력하세요."
            ></input>
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
            <Image
              src={"/img/google.svg"}
              alt="google"
              width={16}
              height={16}
            />
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
            계정이 없으신가요?
            <Link href="/signup" className={cx("signup-link")}>
              회원가입
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
