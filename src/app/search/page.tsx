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
      <div className={cx("search-header")}>
        <h2 className={cx("header-title")}>기록 검색</h2>
        <p className={cx("header-description")}>
          원하는 것을 정확히 찾아보세요.
        </p>
      </div>
      <div className={cx("record-search")}>
        <form className={cx("search-form")}>
          <Search size={16} className={cx("search-icon")} />
          <input
            type="text"
            className={cx("search-input")}
            placeholder="제목, 설명 또는 키워드로 검색하세요."
          />
          <div className={cx("filter-container")}>
            <label className={cx("filter-label")}>카테고리</label>
            <Funnel size={16} className={cx("filter-icon")} />
            <select className={cx("search-category")}>
              <option value="all">모든 카테고리</option>
              <option value="type1">영화</option>
              <option value="type2">음악</option>
              <option value="type3">식당</option>
            </select>
          </div>
          <div className={cx("filter-container")}>
            <label className={cx("filter-label")}>최소 평점</label>
            <Star size={16} className={cx("sorting-icon")} />
            <select className={cx("search-sorting")}>
              <option value="all">모든 평점</option>
              <option value="date1">5점</option>
              <option value="date2">4점 이상</option>
              <option value="date3">3점 이상</option>
              <option value="date4">2점 이상</option>
              <option value="date5">1점 이상</option>
            </select>
          </div>
          <div className={cx("filter-container")}>
            <label className={cx("filter-label")}>기간</label>
            <Calendar size={16} className={cx("date-icon")} />
            <select className={cx("search-date")}>
              <option value="all">전체 기간</option>
              <option value="date1">지난 주</option>
              <option value="date2">지난 딜</option>
            </select>
          </div>
        </form>
      </div>
      <div className={cx("search-description")}>
        <p>6개의 기록을 표시하고 있습니다.</p>
      </div>
      <div className={cx("search-main")}>
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
