import { type FC } from "react";
import styles from "./ProfileRecent.module.css";
import classNames from "classnames/bind";
import { Film, Music, Star, UtensilsCrossed } from "lucide-react";
import { type TCategory } from "@/types";
import { filterRecentRecords } from "./domain";
import { format } from "date-fns";

interface IProfileRecentContainerProps {
  records: {
    id: string;
    title: string;
    category: TCategory;
    rating: number;
    created_at: string;
  }[];
  showNumber: number;
}

const cx = classNames.bind(styles);

const ProfileRecentContainer: FC<IProfileRecentContainerProps> = ({
  records,
  showNumber,
}) => {
  const filteredRecords = filterRecentRecords({ records, showNumber });

  return (
    <div className={cx("profile-recent")}>
      <div className={cx("recently-header")}>
        <h2 className={cx("recently-header__title")}>최근 활동</h2>
        <p className={cx("recently-description")}>최근 기록과 경험들</p>
      </div>
      <div className={cx("recently-container")}>
        {filteredRecords.map((record) => (
          <div key={record.id} className={cx("recently-content")}>
            <div className={cx("recently-item")}>
              {record.category === "movie" ? (
                <div className={cx("recently-film")}>
                  <Film size={16} />
                </div>
              ) : record.category === "music" ? (
                <div className={cx("recently-music")}>
                  <Music size={16} />
                </div>
              ) : record.category === "restaurant" ? (
                <div className={cx("recently-restaurant")}>
                  <UtensilsCrossed size={16} />
                </div>
              ) : null}
              <div className={cx("recently-info")}>
                <h3 className={cx("recently-title")}>{record.title}</h3>
                <p className={cx("recently-date")}>
                  {format(new Date(record.created_at), "yyyy.MM.dd")}
                </p>
              </div>
            </div>
            <div className={cx("recently-rating")}>
              <Star size={12} className={cx("recently-star")} />
              <span className={cx("rating-label")}>{record.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileRecentContainer;
