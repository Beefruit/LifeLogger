import { type FC } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import "./globals.css";
import classNames from "classnames/bind";
import HeaderContainer from "@/containers/header/Header.container";
import { Film, Music, UtensilsCrossed, BookOpen } from "lucide-react";
import RecordStatsContainer from "@/containers/recordStats/RecordStats.container";
import RecentLogContainer from "@/containers/recentLog/RecentLog.container";

const cx = classNames.bind(styles);

const HomePage: FC = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/records`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch records");
  }

  const records = await response.json();

  return (
    <>
      <HeaderContainer />
      <div className={cx("main")}>
        <div className={cx("header")}>
          <h1 className={cx("title")}>
            당신의 <span>특별한 여정</span>에 다시 오신 것을 환영합니다.
          </h1>
          <p className={cx("description")}>
            영화, 음악, 그리고 맛있는 식사의 경험을 기록하고 소중히 간직하세요.
            모든 순간은 기억될 가치가 있습니다.
          </p>
        </div>
        <RecordStatsContainer records={records} />
        <div className={cx("additional-container")}>
          <div className={cx("additional-content")}>
            <Link href="/additional?type=movie">
              <div className={cx("film-content")}>
                <div className={cx("film-icon")}>
                  <Film size={24} />
                </div>
                <h2 className={cx("additional-title")}>영화 기록하기</h2>
                <p className={cx("additional-description")}>
                  최근 본 영화 경험을 공유해보세요.
                </p>
              </div>
            </Link>
          </div>
          <div className={cx("additional-content")}>
            <Link href="/additional?type=music">
              <div className={cx("music-content")}>
                <div className={cx("music-icon")}>
                  <Music size={24} />
                </div>
                <h2 className={cx("additional-title")}>음악 기록하기</h2>
                <p className={cx("additional-description")}>
                  새로운 음악 발견을 기록해보세요.
                </p>
              </div>
            </Link>
          </div>
          <div className={cx("additional-content")}>
            <Link href="/additional?type=restaurant">
              <div className={cx("restaurant-content")}>
                <div className={cx("restaurant-icon")}>
                  <UtensilsCrossed size={24} />
                </div>
                <h2 className={cx("additional-title")}>식당 기록하기</h2>
                <p className={cx("additional-description")}>
                  맛있는 식사 경험을 기억해보세요.
                </p>
              </div>
            </Link>
          </div>
          <div className={cx("additional-content")}>
            <Link href="/additional?type=book">
              <div className={cx("book-content")}>
                <div className={cx("book-icon")}>
                  <BookOpen size={24} />
                </div>
                <h2 className={cx("additional-title")}>책 기록하기</h2>
                <p className={cx("additional-description")}>
                  감명 깊게 읽은 책을 기록해보세요.
                </p>
              </div>
            </Link>
          </div>
        </div>
        <RecentLogContainer records={records} />
      </div>
    </>
  );
};

export default HomePage;
