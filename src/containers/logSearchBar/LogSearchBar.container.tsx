"use client";

import { type FC } from "react";
import classNames from "classnames/bind";
import styles from "./LogSearchBar.module.css";
// import dynamic from "next/dynamic";
import { Search } from "lucide-react";

const cx = classNames.bind(styles);

// const Select = dynamic(() => import("@/component/select/Select.component"), {
//   ssr: false,
// });

const LogSearchBarContainer: FC = () => {
  return (
    <div className={cx("log-search")}>
      <form className={cx("search-form")}>
        <fieldset className={cx("search-field")}>
          <Search size={16} className={cx("search-icon")} />
          <input
            type="text"
            className={cx("search-input")}
            placeholder="기록을 검색하세요."
          />
        </fieldset>
        {/* <div className={cx("filter-select-container")}>
          <Select
            options={[
              { value: "all", label: "모든 유형" },
              { value: "movie", label: "영화" },
              { value: "music", label: "음악" },
              { value: "restaurant", label: "식당" },
              { value: "book", label: "독서" },
            ]}
            value="all"
            icon={<Funnel size={16} />}
            width="16rem"
            styles={{
              control: (provided) => ({
                ...provided,
                borderColor: "#E2E8F0",
              }),
              option: (provided, state) => ({
                ...provided,
                fontSize: "1.4rem",
                color: state.isSelected ? "#222" : provided.color,
                backgroundColor: state.isSelected
                  ? "#E2E8F0"
                  : state.isFocused
                  ? "#E2E8F0"
                  : provided.backgroundColor,
              }),
              onChange: () => {},
            }}
          />
        </div>
        <div className={cx("search-sorting")}>
          <Select
            options={[
              { value: "date", label: "최신순" },
              { value: "rating", label: "평점순" },
            ]}
            value="date"
            width="16rem"
            styles={{
              control: (provided) => ({
                ...provided,
                borderColor: "#E2E8F0",
              }),
              option: (provided, state) => ({
                ...provided,
                fontSize: "1.4rem",
                color: state.isSelected ? "#222" : provided.color,
                backgroundColor: state.isSelected
                  ? "#E2E8F0"
                  : state.isFocused
                  ? "#E2E8F0"
                  : provided.backgroundColor,
              }),
            }}
          />
        </div> */}
      </form>
    </div>
  );
};

export default LogSearchBarContainer;
