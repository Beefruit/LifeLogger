"use client";

import { type FC } from "react";
import classNames from "classnames/bind";
import styles from "searchLog.module.css";
import Image from "next/image";
import { Film, Music, UtensilsCrossed, Star, Calendar } from "lucide-react";

const cx = classNames.bind(styles);

const SearchLogContainer: FC = () => {
  return (
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
  );
};

export default SearchLogContainer;
