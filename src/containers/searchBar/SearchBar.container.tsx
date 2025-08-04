"use client";

import { type FC } from "react";
import classNames from "classnames/bind";
import styles from "./SearchBar.module.css";
import dynamic from "next/dynamic";
import { Search, Funnel, Star, Calendar } from "lucide-react";

const cx = classNames.bind(styles);

const Select = dynamic(() => import("@/component/select/Select.component"), {
  ssr: false,
});

const SearchBarContainer: FC = () => {
  return (
    <div className={cx("log-search")}>
      <form className={cx("search-form")}>
        <fieldset className={cx("search-field")}>
          <Search size={16} className={cx("search-icon")} />
          <input
            type="text"
            className={cx("search-input")}
            placeholder="제목, 설명 또는 키워드로 검색하세요."
          />
        </fieldset>
        <div className={cx("filter-container")}>
          <div className={cx("filter")}>
            <label className={cx("filter-label")}>카테고리</label>
            <div className={cx("filter-select-container")}>
              <Select
                options={[
                  { value: "all", label: "모든 카테고리" },
                  { value: "movie", label: "영화" },
                  { value: "music", label: "음악" },
                  { value: "restaurant", label: "식당" },
                  { value: "book", label: "독서" },
                ]}
                value="all"
                icon={<Funnel size={16} />}
                width="37.8rem"
                styles={{
                  control: (provided) => ({
                    ...provided,
                    borderColor: "#E2E8F0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
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
            </div>
          </div>
          <div className={cx("filter")}>
            <label className={cx("filter-label")}>최소 평점</label>
            <div className={cx("filter-select-container")}>
              <Select
                options={[
                  { value: "all", label: "모든 평점" },
                  { value: "5", label: "5점" },
                  { value: "4", label: "4점 이상" },
                  { value: "3", label: "3점 이상" },
                  { value: "2", label: "2점 이상" },
                  { value: "1", label: "1점 이상" },
                ]}
                value="all"
                icon={<Star size={16} />}
                width="37.8rem"
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
            </div>
          </div>
          <div className={cx("filter")}>
            <label className={cx("filter-label")}>기간</label>
            <div className={cx("filter-select-container")}>
              <Calendar size={16} className={cx("filter-icon")} />
              <Select
                options={[
                  { value: "all", label: "전체 기간" },
                  { value: "date1", label: "지난 주" },
                  { value: "date2", label: "지난 달" },
                ]}
                value="all"
                icon={<Calendar size={16} />}
                width="37.8rem"
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
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBarContainer;
