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

const SearchPage: FC = () => {
  return (
    <>
      <HeaderContainer />
      <div className={cx("main")}>
        <div className={cx("search-header")}>
          <h2 className={cx("header-title")}>기록 검색</h2>
          <p className={cx("header-description")}>
            원하는 것을 정확히 찾아보세요.
          </p>
        </div>
        <div className={cx("log-search")}>
          <form className={cx("search-form")}>
            <fieldset className={cx("search-field")}>
              <Search size={16} className={cx("search-icon")} />
              <input
                type="text"
                className={cx("search-input")}
                placeholder="제목, 설명 또는 키워드로 검색하세요."
              />
            </fieldset>
            <div className={cx("filter-container")}>
              <div className={cx("filter")}>
                <label className={cx("filter-label")}>카테고리</label>
                <div className={cx("filter-select-container")}>
                  <Funnel size={16} className={cx("filter-icon")} />
                  <select className={cx("filter-select")}>
                    <option value="all">모든 카테고리</option>
                    <option value="type1">영화</option>
                    <option value="type2">음악</option>
                    <option value="type3">식당</option>
                  </select>
                </div>
              </div>
              <div className={cx("filter")}>
                <label className={cx("filter-label")}>최소 평점</label>
                <div className={cx("filter-select-container")}>
                  <Star size={16} className={cx("filter-icon")} />
                  <select className={cx("filter-select")}>
                    <option value="all">모든 평점</option>
                    <option value="date1">5점</option>
                    <option value="date2">4점 이상</option>
                    <option value="date3">3점 이상</option>
                    <option value="date4">2점 이상</option>
                    <option value="date5">1점 이상</option>
                  </select>
                </div>
              </div>
              <div className={cx("filter")}>
                <label className={cx("filter-label")}>기간</label>
                <div className={cx("filter-select-container")}>
                  <Calendar size={16} className={cx("filter-icon")} />
                  <select className={cx("filter-select")}>
                    <option value="all">전체 기간</option>
                    <option value="date1">지난 주</option>
                    <option value="date2">지난 달</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className={cx("search-description")}>
          <p>6개의 기록을 표시하고 있습니다.</p>
        </div>
        <div className={cx("search-main")}>
          <ul className={cx("log-list")}>
            <li className={cx("log-item")}>
              <div className={cx("log-container")}>
                <div className={cx("log-img")}>
                  <Image
                    src={"/img/placeholder.png"}
                    alt="placeholder"
                    width={700}
                    height={219}
                    className={cx("log-image")}
                  />
                  <div className={cx("log-film-icon")}>
                    <Film size={12} />
                    <span>영화</span>
                  </div>
                </div>
                <div className={cx("log-content")}>
                  <h3 className={cx("log-title")}>오펜하이머</h3>
                  <div className={cx("log-description")}>
                    <div className={cx("log-icon")}>
                      <Star size={16} className={cx("log-star")} />
                      <span className={cx("log-rating")}>5/5</span>
                    </div>
                    <div className={cx("log-info")}>
                      <Calendar size={16} className={cx("log-calendar")} />
                      <span className={cx("log-date")}>2024.01.15</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className={cx("log-item")}>
              <div className={cx("log-container")}>
                <div className={cx("log-img")}>
                  <Image
                    src={"/img/placeholder.png"}
                    alt="placeholder"
                    width={700}
                    height={219}
                    className={cx("log-image")}
                  />
                  <div className={cx("log-music-icon")}>
                    <Music size={12} />
                    <span>음악</span>
                  </div>
                </div>
                <div className={cx("log-content")}>
                  <h3 className={cx("log-title")}>Midnights-테일러 스위프트</h3>
                  <div className={cx("log-description")}>
                    <div className={cx("log-icon")}>
                      <Star size={16} className={cx("log-star")} />
                      <span className={cx("log-rating")}>4/5</span>
                    </div>
                    <div className={cx("log-info")}>
                      <Calendar size={16} className={cx("log-calendar")} />
                      <span className={cx("log-date")}>2024.01.14</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className={cx("log-item")}>
              <div className={cx("log-container")}>
                <div className={cx("log-img")}>
                  <Image
                    src={"/img/placeholder.png"}
                    alt="placeholder"
                    width={700}
                    height={219}
                    className={cx("log-image")}
                  />
                  <div className={cx("log-restaurant-icon")}>
                    <UtensilsCrossed size={12} />
                    <span>식당</span>
                  </div>
                </div>
                <div className={cx("log-content")}>
                  <h3 className={cx("log-title")}>사쿠라 스시</h3>
                  <div className={cx("log-description")}>
                    <div className={cx("log-icon")}>
                      <Star size={16} className={cx("log-star")} />
                      <span className={cx("log-rating")}>5/5</span>
                    </div>
                    <div className={cx("log-info")}>
                      <Calendar size={16} className={cx("log-calendar")} />
                      <span className={cx("log-date")}>2024.01.13</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className={cx("log-item")}>
              <div className={cx("log-container")}>
                <div className={cx("log-img")}>
                  <Image
                    src={"/img/placeholder.png"}
                    alt="placeholder"
                    width={700}
                    height={219}
                    className={cx("log-image")}
                  />
                  <div className={cx("log-film-icon")}>
                    <Film size={12} />
                    <span>영화</span>
                  </div>
                </div>
                <div className={cx("log-content")}>
                  <h3 className={cx("log-title")}>오펜하이머</h3>
                  <div className={cx("log-description")}>
                    <div className={cx("log-icon")}>
                      <Star size={16} className={cx("log-star")} />
                      <span className={cx("log-rating")}>5/5</span>
                    </div>
                    <div className={cx("log-info")}>
                      <Calendar size={16} className={cx("log-calendar")} />
                      <span className={cx("log-date")}>2024.01.15</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className={cx("log-item")}>
              <div className={cx("log-container")}>
                <div className={cx("log-img")}>
                  <Image
                    src={"/img/placeholder.png"}
                    alt="placeholder"
                    width={700}
                    height={219}
                    className={cx("log-image")}
                  />
                  <div className={cx("log-music-icon")}>
                    <Music size={12} />
                    <span>음악</span>
                  </div>
                </div>
                <div className={cx("log-content")}>
                  <h3 className={cx("log-title")}>Midnights-테일러 스위프트</h3>
                  <div className={cx("log-description")}>
                    <div className={cx("log-icon")}>
                      <Star size={16} className={cx("log-star")} />
                      <span className={cx("log-rating")}>4/5</span>
                    </div>
                    <div className={cx("log-info")}>
                      <Calendar size={16} className={cx("log-calendar")} />
                      <span className={cx("log-date")}>2024.01.14</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className={cx("log-item")}>
              <div className={cx("log-container")}>
                <div className={cx("log-img")}>
                  <Image
                    src={"/img/placeholder.png"}
                    alt="placeholder"
                    width={700}
                    height={219}
                    className={cx("log-image")}
                  />
                  <div className={cx("log-restaurant-icon")}>
                    <UtensilsCrossed size={12} />
                    <span>식당</span>
                  </div>
                </div>
                <div className={cx("log-content")}>
                  <h3 className={cx("log-title")}>사쿠라 스시</h3>
                  <div className={cx("log-description")}>
                    <div className={cx("log-icon")}>
                      <Star size={16} className={cx("log-star")} />
                      <span className={cx("log-rating")}>5/5</span>
                    </div>
                    <div className={cx("log-info")}>
                      <Calendar size={16} className={cx("log-calendar")} />
                      <span className={cx("log-date")}>2024.01.13</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
