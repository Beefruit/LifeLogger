import { type FC } from "react";
import styles from "./page.module.css";
import classNames from "classnames/bind";
import Image from "next/image";
import HeaderContainer from "@/containers/header/Header.container";
import {
  Film,
  Music,
  UtensilsCrossed,
  Calendar,
  TrendingUp,
  Star,
  FileText,
  Download,
} from "lucide-react";

const cx = classNames.bind(styles);
const ProfilePage: FC = () => {
  return (
    <div className={cx("profile")}>
      <HeaderContainer />
      <div className={cx("profile-header")}>
        <div className={cx("header-icon")}>
          <Image
            src={"/img/placeholder.png"}
            alt="placeholder"
            width={96}
            height={96}
          />
        </div>
        <div className={cx("header-container")}>
          <h2 className={cx("header-name")}>김철수</h2>
          <p className={cx("header-introduction")}>
            영화, 음악, 그리고 훌륭한 음식 경험에 열정적인 사람
          </p>
          <div className={cx("header-content")}>
            <div className={cx("header-content__item")}>
              <Calendar size={16} />
              <span>2023년 6월 가입</span>
            </div>
            <div className={cx("header-content__item")}>
              <TrendingUp size={16} />
              <span>12일 연속 기록</span>
            </div>
            <div className={cx("header-content__item")}>
              <Star size={16} />
              <span>평균 4.5</span>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("profile-container")}>
        <div className={cx("record-container")}>
          <div className={cx("record-content")}>
            <h3 className={cx("record-count")}>101</h3>
            <p className={cx("record-title")}>전체 기록</p>
          </div>
          <div className={cx("record-content__film")}>
            <h3 className={cx("record-count__film")}>47</h3>
            <div className={cx("record-icon__film")}>
              <Film size={12} />
              <p className={cx("record-title__film")}>영화</p>
            </div>
          </div>
          <div className={cx("record-content__music")}>
            <h3 className={cx("record-count__music")}>23</h3>
            <div className={cx("record-icon__music")}>
              <Music size={12} />
              <p className={cx("record-title__music")}>음악</p>
            </div>
          </div>
          <div className={cx("record-content__restaurant")}>
            <h3 className={cx("record-count__restaurant")}>31</h3>
            <div className={cx("record-icon__restaurant")}>
              <UtensilsCrossed size={12} />
              <p className={cx("record-title__restaurant")}>식당</p>
            </div>
          </div>
        </div>
        <div className={cx("profile-export")}>
          <div className={cx("export-header")}>
            <h2 className={cx("export-title")}>데이터 내보내기</h2>
            <p className={cx("export-description")}>
              백업이나 공유를 위해 기록을 다운로드 하세요.
            </p>
          </div>
          <div className={cx("export-button-container")}>
            <div className={cx("export-button")}>
              <button type="button" className={cx("pdf-button")}>
                <FileText size={16} />
                <span>PDF로 내보내기</span>
              </button>
            </div>
            <div className={cx("export-button")}>
              <button type="button" className={cx("csv-button")}>
                <Download size={16} />
                <span>CSV로 내보내기</span>
              </button>
            </div>
          </div>
        </div>
        <div className={cx("profile-month")}>
          <div className={cx("month-header")}>
            <h2 className={cx("month-title")}>월별 활동</h2>
            <p className={cx("month-description")}>지난 몇 달간의 기록 활동</p>
          </div>
          <div className={cx("month-chart")}>
            <p className={cx("chart-title")}>1월</p>
            <div className={cx("chart-bar")}>
              <div className={cx("chart-bar__fill")}></div>
            </div>
            <span className={cx("chart-bar__label")}>8</span>
          </div>
          <div className={cx("month-chart")}>
            <p className={cx("chart-title")}>12월</p>
            <div className={cx("chart-bar")}>
              <div className={cx("chart-bar__fill")}></div>
            </div>
            <span className={cx("chart-bar__label")}>12</span>
          </div>
          <div className={cx("month-chart")}>
            <p className={cx("chart-title")}>11월</p>
            <div className={cx("chart-bar")}>
              <div className={cx("chart-bar__fill")}></div>
            </div>
            <span className={cx("chart-bar__label")}>15</span>
          </div>
          <div className={cx("month-chart")}>
            <p className={cx("chart-title")}>10월</p>
            <div className={cx("chart-bar")}>
              <div className={cx("chart-bar__fill")}></div>
            </div>
            <span className={cx("chart-bar__label")}>10</span>
          </div>
        </div>
        <div className={cx("profile-achievement")}>
          <div className={cx("achievement-header")}>
            <h2 className={cx("achievement-header__title")}>업적</h2>
            <p className={cx("achievement-description")}>기록 달성 현황</p>
          </div>
          <div className={cx("achievement-list")}>
            <div className={cx("achievement-item__film")}>
              <div className={cx("achievement-film")}>
                <Film size={20} />
              </div>
              <div className={cx("achievement-info")}>
                <h3 className={cx("achievement-title")}>영화 애호가</h3>
                <p className={cx("achievement-detail")}>50편 이상 기록</p>
              </div>
            </div>
            <div className={cx("achievement-item__music")}>
              <div className={cx("achievement-music")}>
                <Music size={20} />
              </div>
              <div className={cx("achievement-info")}>
                <h3 className={cx("achievement-title")}>음악 애호가</h3>
                <p className={cx("achievement-detail")}>25장 이상 기록</p>
              </div>
            </div>
            <div className={cx("achievement-item__restaurant")}>
              <div className={cx("achievement-restaurant")}>
                <UtensilsCrossed size={20} />
              </div>
              <div className={cx("achievement-info")}>
                <h3 className={cx("achievement-title")}>미식가</h3>
                <p className={cx("achievement-detail")}>30곳 이상 기록</p>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("profile-recent")}>
          <div className={cx("recently-header")}>
            <h2 className={cx("recently-header__title")}>최근 활동</h2>
            <p className={cx("recently-description")}>최근 기록과 경험들</p>
          </div>
          <div className={cx("recently-container")}>
            <div className={cx("recently-content")}>
              <div className={cx("recently-item")}>
                <div className={cx("recently-film")}>
                  <Film size={16} />
                </div>
                <div className={cx("recently-info")}>
                  <h3 className={cx("recently-title")}>오펜하이머</h3>
                  <p className={cx("recently-date")}>2024.01.15</p>
                </div>
              </div>
              <div className={cx("recently-rating")}>
                <Star size={12} className={cx("recently-star")} />
                <span className={cx("rating-label")}>5</span>
              </div>
            </div>
            <div className={cx("recently-content")}>
              <div className={cx("recently-item")}>
                <div className={cx("recently-music")}>
                  <Music size={16} />
                </div>
                <div className={cx("recently-info")}>
                  <h3 className={cx("recently-title")}>Midnights</h3>
                  <p className={cx("recently-date")}>2024.01.14</p>
                </div>
              </div>
              <div className={cx("recently-rating")}>
                <Star size={12} className={cx("recently-star")} />
                <span className={cx("rating-label")}>4</span>
              </div>
            </div>
            <div className={cx("recently-content")}>
              <div className={cx("recently-item")}>
                <div className={cx("recently-restaurant")}>
                  <UtensilsCrossed size={16} />
                </div>
                <div className={cx("recently-info")}>
                  <h3 className={cx("recently-title")}>사쿠라 스시</h3>
                  <p className={cx("recently-date")}>2024.01.13</p>
                </div>
              </div>
              <div className={cx("recently-rating")}>
                <Star size={12} className={cx("recently-star")} />
                <span className={cx("rating-label")}>5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("profile-additional")}>
        <div className={cx("additional-header")}>
          <h2 className={cx("additional-title")}>빠른 작업</h2>
        </div>
        <div className={cx("additional-buttons")}>
          <button type="button" className={cx("additional-button")}>
            <Film size={16} />
            <span>영화 기록하기</span>
          </button>
          <button type="button" className={cx("additional-button")}>
            <Music size={16} />
            <span>음악 기록하기</span>
          </button>
          <button type="button" className={cx("additional-button")}>
            <UtensilsCrossed size={16} />
            <span>식당 기록하기</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
