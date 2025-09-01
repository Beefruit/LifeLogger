import { type FC } from "react";
import styles from "./page.module.css";
import classNames from "classnames/bind";
import HeaderContainer from "@/containers/header/Header.container";
import ProfileContainer from "@/containers/profile/Profile.container";
import ProfileRecordStatsContainer from "@/containers/profileRecordStats/ProfileRecordStats.container";
import ProfileMonthlyContainer from "@/containers/profileMonthly/ProfileMonthly.container";
import { type TCategory } from "@/types";
import { createClient } from "@/utils/supabase/server";
import {
  Film,
  Music,
  UtensilsCrossed,
  Star,
  FileText,
  Download,
} from "lucide-react";

const cx = classNames.bind(styles);

const ProfilePage: FC = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("Unauthorized");

  const { data: records } = await supabase
    .from("records")
    .select("*")
    .eq("user_id", user.id);

  return (
    <>
      <HeaderContainer />
      <div className={cx("main")}>
        <ProfileContainer />
        <div className={cx("profile-container")}>
          <div className={cx("profile-main")}>
            <ProfileRecordStatsContainer records={records ?? []} />
            <ProfileMonthlyContainer records={records ?? []} />
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
          <div className={cx("side-bar")}>
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
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
