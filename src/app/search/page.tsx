import { type FC } from "react";
import styles from "./page.module.css";
import classNames from "classnames/bind";
import Image from "next/image";
import HeaderContainer from "@/containers/header/Header.container";
import SearchBarContainer from "@/containers/searchBar/SearchBar.container";
import SearchLogContainer from "@/containers/searchLog/SearchLog.container";

const cx = classNames.bind(styles);

const SearchPage: FC = () => {
  return (
    <>
      <HeaderContainer />
      <div className={cx("main")}>
        <div className={cx("search-header")}>
          <h2 className={cx("header-title")}>기록 검색</h2>
          <p className={cx("header-description")}>
            원하는 것을 정확히 찾아보세요.
          </p>
        </div>
        <SearchBarContainer />
        <SearchLogContainer />
      </div>
    </>
  );
};

export default SearchPage;
