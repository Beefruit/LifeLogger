import { type FC } from "react";
import styles from "./RecordStats.module.css";
import classNames from "classnames/bind";
import { Film, Music, UtensilsCrossed } from "lucide-react";
import { type TCategory } from "@/types";
import { countRecordsByCategory } from "@/domain";

const cx = classNames.bind(styles);

interface RecordStatsContainerProps {
  records: {
    category: TCategory;
  }[];
}

const RecordStatsContainer: FC<RecordStatsContainerProps> = ({ records }) => {
  const recordsCounts = countRecordsByCategory(records);

  return (
    <div className={cx("record-stats-container")}>
      <div className={cx("record-stats-content")}>
        <div className={cx("record-stats-button")}>
          <div className={cx("record-stats-description")}>
            <p className={cx("record-stats-title")}>기록한 영화</p>
            <h2 className={cx("number")}>{recordsCounts.movie}</h2>
          </div>
          <div className={cx("film-icon__btn")}>
            <Film size={24} />
          </div>
        </div>
      </div>
      <div className={cx("record-stats-content")}>
        <div className={cx("record-stats-button")}>
          <div className={cx("record-stats-description")}>
            <p className={cx("record-stats-title")}>들은 앨범</p>
            <h2 className={cx("number")}>{recordsCounts.music}</h2>
          </div>
          <div className={cx("music-icon__btn")}>
            <Music size={24} />
          </div>
        </div>
      </div>
      <div className={cx("record-stats-content")}>
        <div className={cx("record-stats-button")}>
          <div className={cx("record-stats-description")}>
            <p className={cx("record-stats-title")}>방문한 식당</p>
            <h2 className={cx("number")}>{recordsCounts.restaurant}</h2>
          </div>
          <div className={cx("restaurant-icon__btn")}>
            <UtensilsCrossed size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordStatsContainer;
