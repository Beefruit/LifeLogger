import { type FC } from "react";
import styles from "./page.module.css";
import classNames from "classnames/bind";
import Image from "next/image";
import HeaderContainer from "@/containers/header/Header.container";
import { Film, Music, UtensilsCrossed, Star, Calendar } from "lucide-react";
import LogSearchBarContainer from "@/containers/logSearchBar/LogSearchBar.container";

const cx = classNames.bind(styles);

const LogPage: FC = () => {
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
        <LogSearchBarContainer />
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

export default LogPage;
