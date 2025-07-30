import { type FC } from "react";
import styles from "./page.module.css";
import classNames from "classnames/bind";
import Image from "next/image";
import Select from "@/component/select/Select.component";
import HeaderContainer from "@/containers/header/Header.container";
import { useAdditional } from "@/containers/additional/hook/useAdditional";
import { CategoryType } from "@/containers/additional/hook/useAdditional";
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

const logPage: FC = () => {
  const { selectedCategory, setSelectedCategory } = useAdditional();

  return (
    <>
      <HeaderContainer />
      <div className={cx("main")}>
        <div className={cx("lifelog-header")}>
          <h2 className={cx("header-title")}>나의 라이프로그</h2>
          <p className={cx("header-description")}>
            모든 기억에 남는 경험들을 한 곳에서
          </p>
        </div>
        <div className={cx("log-search")}>
          <form className={cx("search-form")}>
            <fieldset className={cx("search-field")}>
              <Search size={16} className={cx("search-icon")} />
              <input
                type="text"
                className={cx("search-input")}
                placeholder="기록을 검색하세요."
              />
            </fieldset>
            <div className={cx("filter-select-container")}>
              <Funnel size={16} className={cx("filter-icon")} />
              <Select
                options={[
                  { value: "all", label: "모든 유형" },
                  { value: "movie", label: "영화" },
                  { value: "music", label: "음악" },
                  { value: "restaurant", label: "식당" },
                  { value: "book", label: "독서" },
                ]}
                value={selectedCategory}
                onChange={(option) =>
                  setSelectedCategory(option?.value as CategoryType)
                }
                className={cx("search-filter")}
              />
            </div>
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
          <ul className={cx("log-list")}>
            <li className={cx("log-item")}>
              <div className={cx("log-container")}>
                <div className={cx("log-img")}>
                  <Image
                    src={"/img/placeholder.png"}
                    alt="placeholder"
                    width={389.3}
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
                    width={389.3}
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
                    width={389.3}
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
                    width={389.3}
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
                    width={389.3}
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
                    width={389.3}
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

export default logPage;
