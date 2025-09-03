import { type FC } from "react";
import styles from "./ProfileRecordStats.module.css";
import classNames from "classnames/bind";
import { Film, Music, UtensilsCrossed, BookOpen } from "lucide-react";
import { type TCategory } from "@/types";
import { countRecordsByCategory } from "@/domain";

const cx = classNames.bind(styles);

interface IProfileRecordStatsContainerProps {
  records: {
    category: TCategory;
  }[];
}

const ProfileRecordStatsContainer: FC<IProfileRecordStatsContainerProps> = ({
  records,
}) => {
  const recordCounts = countRecordsByCategory(records);

  return (
    <div className={cx("log-container")}>
      <div className={cx("log-content")}>
        <h3 className={cx("log-count")}>{recordCounts.total}</h3>
        <p className={cx("log-title")}>전체 기록</p>
      </div>
      <div className={cx("log-content__film")}>
        <h3 className={cx("log-count__film")}>{recordCounts.movie}</h3>
        <div className={cx("log-icon__film")}>
          <Film size={12} />
          <p className={cx("log-title__film")}>영화</p>
        </div>
      </div>
      <div className={cx("log-content__music")}>
        <h3 className={cx("log-count__music")}>{recordCounts.music}</h3>
        <div className={cx("log-icon__music")}>
          <Music size={12} />
          <p className={cx("log-title__music")}>음악</p>
        </div>
      </div>
      <div className={cx("log-content__restaurant")}>
        <h3 className={cx("log-count__restaurant")}>
          {recordCounts.restaurant}
        </h3>
        <div className={cx("log-icon__restaurant")}>
          <UtensilsCrossed size={12} />
          <p className={cx("log-title__restaurant")}>식당</p>
        </div>
      </div>
      <div className={cx("log-content__book")}>
        <h3 className={cx("log-count__book")}>{recordCounts.book}</h3>
        <div className={cx("log-icon__book")}>
          <BookOpen size={12} />
          <p className={cx("log-title__book")}>책</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileRecordStatsContainer;
