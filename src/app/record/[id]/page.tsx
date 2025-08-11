import { type FC } from "react";
import styles from "./page.module.css";
import classNames from "classnames/bind";
import HeaderContainer from "@/containers/header/Header.container";
import {
  Film,
  Music,
  UtensilsCrossed,
  Star,
  Calendar,
  SquarePen,
  Trash2,
} from "lucide-react";
import RecordImgSlideContainer from "@/containers/recordImgSlide/RecordImgSlide.container";

const cx = classNames.bind(styles);

const RecordPage: FC = () => {
  return (
    <>
      <HeaderContainer />
      <div className={cx("main")}>
        <div className={cx("record-header-icon")}>
          <div className={cx("record-header-category")}>
            <Film size={12} className={cx("record-icon")} />
            <span className={cx("record-category")}>영화</span>
          </div>
          <div className={cx("record-header-util")}>
            <div className={cx("record-header-edit")}>
              <SquarePen size={16} className={cx("record-edit-icon")} />
              <span className={cx("record-edit-text")}>편집</span>
            </div>
            <div className={cx("record-header-delete")}>
              <Trash2 size={16} className={cx("record-delete-icon")} />
              <span className={cx("record-delete-text")}>삭제</span>
            </div>
          </div>
        </div>
        <div className={cx("record-header-text")}>
          <h2 className={cx("header-title")}>오펜하이머</h2>
          <div className={cx("header-description")}>
            <div className={cx("header-rating")}>
              <Star size={16} className={cx("header-star")} />
              <span className={cx("header-rating-value")}>5/5</span>
            </div>
            <div className={cx("header-date")}>
              <Calendar size={16} className={cx("header-calendar")} />
              <span className={cx("header-date-value")}>2024.01.15</span>
            </div>
          </div>
        </div>
        <RecordImgSlideContainer />
        <div className={cx("record-content")}>
          <p className={cx("record-title")}>나의 경험</p>
          <p className={cx("record-description")}>
            크리스토퍼 놀란의 J. 로버트 오펜하이머에 관한 전기 스릴러는 과학적
            발견의 복잡한 도덕적 함의를 탐구하는 영화 제작의 걸작입니다. 이
            영화는 맨해튼 프로젝트를 이끌고 나중에 원자폭탄 제조의 결 과와
            씨름한 남자의 이야기를 말하기 위해 여러 타임라인을 능숙하게
            엮어냅니다. 킬리언 머피는 오 펜하이머로서 그의 재능과 고뇌를 모두
            포착하며 경력을 정의하는 연기를 선보입니다. 촬영은 숨막히 고 사운드
            디자인은 당신을 역사의 한복판에 놓는 몰입감 있는 경험을
            만들어냅니다. 이것은 최고의 영화 제작입니다 - 20세기의 가장 중요한
            인물 중 한 명에 대한 생각을 자극하고 시각적으로 놀라우며 감정적으로
            강력한 탐구입니다.
          </p>
        </div>
      </div>
    </>
  );
};

export default RecordPage;
