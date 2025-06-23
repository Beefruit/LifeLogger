import { type FC } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import "./globals.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Home() {
  return (
    <div>
      <div className={cx("header")}>
        <div className={cx("logo")}>
          <Image src={"/img/logo.png"} alt="logo" width={32} height={32} />
          <h2 className="header-title">라이프로거</h2>
        </div>
        <div className={cx("nav")}>
          <ul className={cx("nav-list")}>
            <li className={cx("nav-item")}>
              <Link href="/search">검색</Link>
            </li>
            <li className={cx("nav-item")}>
              <Link href="/profile">프로필</Link>
            </li>
            <li className={cx("nav-item")}>
              <Link href="/login">로그인</Link>
            </li>
            <li className={cx("nav-item")}>
              <Link href="/signup">회원가입</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={cx("main")}>
        <h1 className={cx("title")}>
          당신의 <span>특별한 여정</span>에 다시 오신 것을 환영합니다.
        </h1>
        <p className={cx("description")}>
          영화, 음악, 그리고 맛있는 식사의 경험을 기록하고 소중히 간직하세요.
          모든 순간은 기억될 가치가 있습니다.
        </p>
        <ul className={cx("link-list")}>
          <li className={cx("link-item")}>
            <Link href="/movie" className={cx("link-button")}>
              <div className={cx("button")}>
                <p className={cx("link-title")}>기록한 영화</p>
                <h2 className={cx("number")}>47</h2>
                <Image
                  src="/img/movie-btn.png"
                  alt="movie-btn"
                  width={48}
                  height={48}
                />
              </div>
            </Link>
          </li>
          <li className={cx("link-item")}>
            <Link href="/music" className={cx("link-button")}>
              <div className={cx("button")}>
                <p className={cx("link-title")}>들은 앨범</p>
                <h2 className={cx("number")}>23</h2>
                <Image
                  src="/img/music-btn.png"
                  alt="music-btn"
                  width={48}
                  height={48}
                />
              </div>
            </Link>
          </li>
          <li className={cx("link-item")}>
            <Link href="/restaurant" className={cx("link-button")}>
              <div className={cx("button")}>
                <p className={cx("link-title")}>방문한 식당</p>
                <h2 className={cx("number")}>31</h2>
                <Image
                  src="/img/restaurant-btn.png"
                  alt="restaurant-btn"
                  width={48}
                  height={48}
                />
              </div>
            </Link>
          </li>
        </ul>
        <ul className={cx("additional-list")}>
          <li className={cx("additional-item")}>
            <Link href="/add-movie">
              <Image src="/img/movie.png" alt="movie" width={48} height={48} />
              <h2 className={cx("additional-title")}>영화 기록하기</h2>
              <p className={cx("additional-description")}>
                최근 본 영화 경험을 공유해보세요.
              </p>
            </Link>
          </li>
          <li className={cx("additional-item")}>
            <Link href="/add-music">
              <Image src="/img/music.png" alt="music" width={48} height={48} />
              <h2 className={cx("additional-title")}>음악 기록하기</h2>
              <p className={cx("additional-description")}>
                새로운 음악 발견을 기록해보세요.
              </p>
            </Link>
          </li>
          <li className={cx("additional-item")}>
            <Link href="/add-restaurant">
              <Image
                src="/img/restaurant.png"
                alt="movie"
                width={48}
                height={48}
              />
              <h2 className={cx("additional-title")}>식당 기록하기</h2>
              <p className={cx("additional-description")}>
                맛있는 식사 경험을 기억해보세요.
              </p>
            </Link>
          </li>
        </ul>
        <div className={cx("record")}>
          <div className={cx("record-header")}>
            <h2 className={cx("record-title")}>최근 기록</h2>
            <button type="button" className={cx("record-button")}>
              <Link href="/record" className={cx("record-link")}>
                전체 보기
              </Link>
            </button>
          </div>
          <ul className={cx("record-list")}>
            <li className={cx("record-item")}>
              <div></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
