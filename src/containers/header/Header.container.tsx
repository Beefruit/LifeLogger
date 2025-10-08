"use client";

import { type FC } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./Header.module.css";
import classNames from "classnames/bind";
import { useHeader } from "./hook/useHeader";

const cx = classNames.bind(styles);

const HeaderContainer: FC = () => {
  const {
    isLogin,
    userProfile,
    isMobileSize,
    isMobileMenuOpen,
    onClickMobileMenu,
  } = useHeader();

  return (
    <div className={cx("header")}>
      <Link href="/" className={cx("home-link")}>
        <div className={cx("logo")}>
          <Image src={"/img/logo.png"} alt="logo" width={32} height={32} />
          <h2 className="header-title">라이프로거</h2>
        </div>
      </Link>
      {isMobileSize && (
        <button
          type="button"
          className={cx("mobile-menu-button", { open: isMobileMenuOpen })}
          onClick={onClickMobileMenu}
        >
          <span className={cx("menu-icon")} />
          <span className={cx("menu-icon")} />
          <span className={cx("menu-icon")} />
          <span className={cx("menu-icon")} />
        </button>
      )}
      {(!isMobileSize || (isMobileMenuOpen && isMobileSize)) && (
        <div className={cx("nav", { open: isMobileMenuOpen && isMobileSize })}>
          <ul className={cx("nav-list")}>
            <li className={cx("nav-item")}>
              <Link href="/search">검색</Link>
            </li>
            {!isLogin ? (
              <>
                <li className={cx("nav-item")}>
                  <Link href="/login">로그인</Link>
                </li>
                <li className={cx("nav-item")}>
                  <Link href="/signup">회원가입</Link>
                </li>
              </>
            ) : (
              <>
                <li className={cx("nav-item")}>
                  <Link href="/profile">프로필</Link>
                </li>
                <li className={cx("nav-item")}>
                  <Link href="/logout">로그아웃</Link>
                </li>
                <li className={cx("nav-item", "nav-profile")}>
                  <p className={cx("nav-item-value")}>
                    {userProfile?.name || "게스트"}
                  </p>
                  <Image
                    src={
                      userProfile?.avatar_url || "/img/profile-placeholder.jpg"
                    }
                    alt="프로필 이미지"
                    width={32}
                    height={32}
                  />
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HeaderContainer;
