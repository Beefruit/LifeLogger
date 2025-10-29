import { type FC } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import classNames from "classnames/bind";
import LoginContainer from "@/containers/login/Login.container";

const cx = classNames.bind(styles);

const LoginPage: FC = () => {
  return (
    <div className={cx("main")}>
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
      <LoginContainer />
    </div>
  );
};

export default LoginPage;
