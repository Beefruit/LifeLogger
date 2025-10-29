import { type FC } from "react";
import styles from "./page.module.css";
import classNames from "classnames/bind";
import HeaderContainer from "@/containers/header/Header.container";
import LogSearchBarContainer from "@/containers/logSearchBar/LogSearchBar.container";
import LogContainer from "@/containers/log/Log.container";

const cx = classNames.bind(styles);

const LogPage: FC = () => {
  return (
    <>
      <HeaderContainer />
      <div className={cx("main")}>
        <div className={cx("lifelog-header")}>
          <h2 className={cx("header-title")}>나의 라이프로그</h2>
          <p className={cx("header-description")}>
            모든 기억에 남는 경험들을 한 곳에서
          </p>
        </div>
        <LogSearchBarContainer />
        <LogContainer />
      </div>
    </>
  );
};

export default LogPage;
