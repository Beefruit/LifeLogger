"use client";

import { type FC } from "react";
import classNames from "classnames/bind";
import styles from "./SearchLog.module.css";
import Image from "next/image";
import {
  Film,
  Music,
  UtensilsCrossed,
  BookOpen,
  Star,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import useSearchLog from "./hook/useSearchLog";
import { match } from "ts-pattern";
import { type TCategory } from "@/types";
import { formatCategoryToKorean } from "@/utils/formatStr";

const cx = classNames.bind(styles);

const SearchLogContainer: FC = () => {
  const { searchLogs } = useSearchLog();

  return (
    <div className={cx("search-main")}>
      <ul className={cx("log-list")}>
        {searchLogs.map((log) => (
          <li className={cx("log-item")} key={log.id}>
            <Link href={`/record/${log.id}`} className={cx("log-link")}>
              <div className={cx("log-container")}>
                <div className={cx("log-img")}>
                  <Image
                    src={log.images?.[0] || "/img/placeholder.png"}
                    alt="placeholder"
                    width={700}
                    height={219}
                    className={cx("log-image")}
                  />
                  <div
                    className={cx({
                      "log-film-icon": log.category === "movie",
                      "log-music-icon": log.category === "music",
                      "log-restaurant-icon": log.category === "restaurant",
                      "log-book-icon": log.category === "book",
                    })}
                  >
                    {match(log.category)
                      .with("movie", () => <Film size={12} />)
                      .with("music", () => <Music size={12} />)
                      .with("restaurant", () => <UtensilsCrossed size={12} />)
                      .with("book", () => <BookOpen size={12} />)
                      .otherwise(() => null)}
                    <span>
                      {formatCategoryToKorean(log.category as TCategory)}
                    </span>
                  </div>
                </div>
                <div className={cx("log-content")}>
                  <h3 className={cx("log-title")}>{log.title}</h3>
                  <div className={cx("log-description")}>
                    <div className={cx("log-icon")}>
                      <Star size={16} className={cx("log-star")} />
                      <span className={cx("log-rating")}>{log.rating}/5</span>
                    </div>
                    <div className={cx("log-info")}>
                      <Calendar size={16} className={cx("log-calendar")} />
                      <span className={cx("log-date")}>
                        {log.visit_or_experience_date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchLogContainer;
