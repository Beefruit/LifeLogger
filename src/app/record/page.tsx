import { type FC } from "react";
import styles from "./page.module.css";
import classNames from "classnames/bind";
import Image from "next/image";
import HeaderContainer from "@/containers/header/Header.container";
import {
  Film,
  Music,
  UtensilsCrossed,
  Star,
  Calendar,
  Search,
  Funnel,
} from "lucide-react";
const cx = classNames.bind(styles);

const RecordPage: FC = () => {
  return (
    <div>
      <HeaderContainer />
      <div className={cx("lifelog-header")}>
        <h2 className={cx("header-title")}>나의 라이프로그</h2>
        <p className={cx("header-description")}>
          모든 기억에 남는 경험들을 한 곳에서
        </p>
      </div>
      <div className={cx("record-search")}>
        <form className={cx("search-form")}>
          <Search size={16} className={cx("search-icon")} />
          <input
            type="text"
            className={cx("search-input")}
            placeholder="기록을 검색하세요."
          />

          <Funnel size={16} className={cx("filter-icon")} />
          <select className={cx("search-filter")}>
            <option value="all">모든 유형</option>
            <option value="type1">영화</option>
            <option value="type2">음악</option>
            <option value="type3">식당</option>
          </select>
          <select className={cx("search-sorting")}>
            <option value="all">최신순</option>
            <option value="date1">평점순</option>
          </select>
        </form>
      </div>
      <div className={cx("lifelog-description")}>
        <p>6개의 결과를 표시하고 있습니다.</p>
      </div>
      <div className={cx("lifelog-main")}>
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
  );
};

export default RecordPage;
