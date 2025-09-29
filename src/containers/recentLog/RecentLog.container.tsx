import { type FC } from "react";
import styles from "./RecentLog.module.css";
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import {
  Film,
  Music,
  UtensilsCrossed,
  Star,
  Calendar,
  BookOpen,
} from "lucide-react";
import { type TCategory } from "@/types";
import { formatCategoryToKorean } from "@/utils/formatStr";
import { match } from "ts-pattern";

const cx = classNames.bind(styles);

interface IRecentLogContainerProps {
  records: Array<{
    id: string;
    title: string;
    category: TCategory;
    rating: number;
    created_at: string;
    images?: string[];
  }>;
}

const RecentLogContainer: FC<IRecentLogContainerProps> = ({ records }) => {
  return (
    <div className={cx("log")}>
      <div className={cx("log-header")}>
        <h2 className={cx("log-header__title")}>최근 기록</h2>
        <button type="button" className={cx("log-button")}>
          <Link href="/log" className={cx("log-link")}>
            전체 보기
          </Link>
        </button>
      </div>
      <ul className={cx("log-list")}>
        {records.map((record) => (
          <li key={record.id} className={cx("log-item")}>
            <div className={cx("log-container")}>
              <Link href={`/record/${record.id}`} className={cx("log-link")}>
                <div className={cx("log-img")}>
                  <Image
                    src={record.images?.[0] || "/img/placeholder.png"}
                    alt="placeholder"
                    width={389.3}
                    height={219}
                    className={cx("log-image")}
                  />
                  <div
                    className={cx({
                      "log-film-icon": record.category === "movie",
                      "log-music-icon": record.category === "music",
                      "log-restaurant-icon": record.category === "restaurant",
                      "log-book-icon": record.category === "book",
                    })}
                  >
                    {match(record.category)
                      .with("movie", () => <Film size={12} />)
                      .with("music", () => <Music size={12} />)
                      .with("restaurant", () => <UtensilsCrossed size={12} />)
                      .with("book", () => <BookOpen size={12} />)
                      .exhaustive()}
                    <span>{formatCategoryToKorean(record.category)}</span>
                  </div>
                </div>
                <div className={cx("log-content")}>
                  <h3 className={cx("log-title")}>{record.title}</h3>
                  <div className={cx("log-description")}>
                    <div className={cx("log-icon")}>
                      <Star size={16} className={cx("log-star")} />
                      <span className={cx("log-rating")}>
                        {record.rating}/5
                      </span>
                    </div>
                    <div className={cx("log-info")}>
                      <Calendar size={16} className={cx("log-calendar")} />
                      <span className={cx("log-date")}>
                        {new Date(record.created_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentLogContainer;
