import { type FC } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./Header.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const HeaderContainer: FC = () => {
  return (
    <div className={cx("header")}>
      <div className={cx("logo")}>
        <Image src={"/img/logo.png"} alt="logo" width={32} height={32} />
        <h2 className="header-title">라이프로거</h2>
      </div>
      <div className={cx("nav")}>
        <ul className={cx("nav-list")}>
          <li className={cx("nav-item")}>
            <Link href="/search">검색</Link>
          </li>
          <li className={cx("nav-item")}>
            <Link href="/profile">프로필</Link>
          </li>
          <li className={cx("nav-item")}>
            <Link href="/login">로그인</Link>
          </li>
          <li className={cx("nav-item")}>
            <Link href="/signup">회원가입</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderContainer;
