import { type FC } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import "./globals.css";
import classNames from "classnames/bind";
import HeaderContainer from "./containers/header/Header.container";
import { Film } from "lucide-react";
import { Music } from "lucide-react";
import { UtensilsCrossed } from "lucide-react";
import { Star } from "lucide-react";
import { Calendar } from "lucide-react";

const cx = classNames.bind(styles);

export default function Home() {
  return (
    <div>
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
        <div className={cx("link-container")}>
          <div className={cx("link-content")}>
            <Link href="/movie">
              <div className={cx("link-button")}>
                <div className={cx("link-description")}>
                  <p className={cx("link-title")}>기록한 영화</p>
                  <h2 className={cx("number")}>47</h2>
                </div>
                <div className={cx("film-icon__btn")}>
                  <Film size={24} />
                </div>
              </div>
            </Link>
          </div>
          <div className={cx("link-content")}>
            <Link href="/music">
              <div className={cx("link-button")}>
                <div className={cx("link-description")}>
                  <p className={cx("link-title")}>들은 앨범</p>
                  <h2 className={cx("number")}>23</h2>
                </div>
                <div className={cx("music-icon__btn")}>
                  <Music size={24} />
                </div>
              </div>
            </Link>
          </div>
          <div className={cx("link-content")}>
            <Link href="/restaurant">
              <div className={cx("link-button")}>
                <div className={cx("link-description")}>
                  <p className={cx("link-title")}>방문한 식당</p>
                  <h2 className={cx("number")}>31</h2>
                </div>
                <div className={cx("restaurant-icon__btn")}>
                  <UtensilsCrossed size={24} />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className={cx("additional-container")}>
          <div className={cx("additional-content")}>
            <Link href="/add-movie">
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
            <Link href="/add-music">
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
            <Link href="/add-restaurant">
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
        </div>
        <div className={cx("record")}>
          <div className={cx("record-header")}>
            <h2 className={cx("record-header__title")}>최근 기록</h2>
            <button type="button" className={cx("record-button")}>
              <Link href="/record" className={cx("record-link")}>
                전체 보기
              </Link>
            </button>
          </div>
          <ul className={cx("record-list")}>
            <li className={cx("record-item")}>
              <div className={cx("record-container")}>
                <div className={cx("record-img")}>
                  <Image
                    src={"/img/placeholder.png"}
                    alt="placeholder"
                    width={389.3}
                    height={219}
                    className={cx("record-image")}
                  />
                  <div className={cx("record-film-icon")}>
                    <Film size={12} />
                    <span>영화</span>
                  </div>
                </div>
                <div className={cx("record-content")}>
                  <h3 className={cx("record-title")}>오펜하이머</h3>
                  <div className={cx("record-description")}>
                    <div className={cx("record-icon")}>
                      <Star size={16} className={cx("record-star")} />
                      <span className={cx("record-rating")}>5/5</span>
                    </div>
                    <div className={cx("record-info")}>
                      <Calendar size={16} className={cx("record-calendar")} />
                      <span className={cx("record-date")}>2024.01.15</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className={cx("record-item")}>
              <div className={cx("record-container")}>
                <div className={cx("record-img")}>
                  <Image
                    src={"/img/placeholder.png"}
                    alt="placeholder"
                    width={389.3}
                    height={219}
                    className={cx("record-image")}
                  />
                  <div className={cx("record-music-icon")}>
                    <Music size={12} />
                    <span>음악</span>
                  </div>
                </div>
                <div className={cx("record-content")}>
                  <h3 className={cx("record-title")}>
                    Midnights-테일러 스위프트
                  </h3>
                  <div className={cx("record-description")}>
                    <div className={cx("record-icon")}>
                      <Star size={16} className={cx("record-star")} />
                      <span className={cx("record-rating")}>4/5</span>
                    </div>
                    <div className={cx("record-info")}>
                      <Calendar size={16} className={cx("record-calendar")} />
                      <span className={cx("record-date")}>2024.01.14</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className={cx("record-item")}>
              <div className={cx("record-container")}>
                <div className={cx("record-img")}>
                  <Image
                    src={"/img/placeholder.png"}
                    alt="placeholder"
                    width={389.3}
                    height={219}
                    className={cx("record-image")}
                  />
                  <div className={cx("record-restaurant-icon")}>
                    <UtensilsCrossed size={12} />
                    <span>식당</span>
                  </div>
                </div>
                <div className={cx("record-content")}>
                  <h3 className={cx("record-title")}>사쿠라 스시</h3>
                  <div className={cx("record-description")}>
                    <div className={cx("record-icon")}>
                      <Star size={16} className={cx("record-star")} />
                      <span className={cx("record-rating")}>5/5</span>
                    </div>
                    <div className={cx("record-info")}>
                      <Calendar size={16} className={cx("record-calendar")} />
                      <span className={cx("record-date")}>2024.01.13</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
