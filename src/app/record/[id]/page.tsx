import { type FC } from "react";
import styles from "./page.module.css";
import classNames from "classnames/bind";
import HeaderContainer from "@/containers/header/Header.container";
import { Film, Music, UtensilsCrossed, Star, Calendar } from "lucide-react";

const cx = classNames.bind(styles);

const RecordPage: FC = () => {
  return (
    <>
      <HeaderContainer />
      <div className={cx("main")}>
        <h2 className={cx("header-title")}>기록 상세</h2>
        <p className={cx("header-description")}>
          선택한 기록의 세부사항을 확인하세요.
        </p>
        {/* Additional content for the record page can be added here */}
      </div>
    </>
  );
};

export default RecordPage;
