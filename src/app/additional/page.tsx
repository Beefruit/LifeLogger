import { type FC } from "react";
import styles from "./page.module.css";
import classNames from "classnames/bind";
import { Film, Star, Share } from "lucide-react";

const cx = classNames.bind(styles);

const AdditionalPage: FC = () => {
  return (
    <div className={cx("additional")}>
      <div className={cx("additional-header")}>
        <div className={cx("additional-icon-container")}>
          <Film size={32} className={cx("additional-icon")} />
        </div>
        <h2 className={cx("additional-title")}>새로운 영화 추가</h2>
        <p className={cx("additional-description")}>
          당신의 경험을 기록하고 기억에 남게 만들어보세요.
        </p>
      </div>
      <div className={cx("additional-main")}>
        <form className={cx("additional-form")}>
          <div className={cx("form-header")}>
            <h3 className={cx("form-title")}>기록 세부사항</h3>
            <p className={cx("form-description")}>
              영화 경험에 대한 세부사항을 입력해주세요.
            </p>
          </div>
          <div className={cx("form-group")}>
            <label className={cx("form-label")}>카테고리</label>
            <div className={cx("select-container")}>
              <Film size={16} className={cx("form-icon")} />
              <select className={cx("form-select")}>
                <option value="영화">영화</option>
                <option value="음악">음악</option>
                <option value="식당">식당</option>
              </select>
            </div>
          </div>
          <div className={cx("form-group")}>
            <label className={cx("form-label")}>영화 제목</label>
            <input
              type="text"
              className={cx("form-input")}
              placeholder="영화 제목을 입력하세요"
              required
            />
          </div>
          <div className={cx("form-group")}>
            <label className={cx("form-label")}>경험한 날짜</label>
            <input type="date" className={cx("form-input")} />
          </div>
          <div className={cx("form-group")}>
            <label className={cx("form-label")}>평점</label>
            <div className={cx("form-rating")}>
              <Star size={24} className={cx("rating-icon")} />
              <Star size={24} className={cx("rating-icon")} />
              <Star size={24} className={cx("rating-icon")} />
              <Star size={24} className={cx("rating-icon")} />
              <Star size={24} className={cx("rating-icon")} />
              <p className={cx("rating-description")}>5/5</p>
            </div>
          </div>
          <div className={cx("form-group")}>
            <label className={cx("form-label")}>설명</label>
            <textarea
              className={cx("form-textarea")}
              placeholder="당신의 생각과 경험을 공유해주세요."
              rows={4}
            ></textarea>
          </div>
          <div className={cx("form-group")}>
            <label className={cx("form-label")}>이미지</label>
            <div className={cx("form-container")}>
              <Share size={48} className={cx("upload-icon")} />
              <h3 className={cx("form-description")}>
                이미지를 드래그하여 놓거나 클릭하여 선택하세요.
              </h3>
              <input type="file" accept="image/*" className={cx("form-file")} />
            </div>
          </div>
          <button type="submit" className={cx("form-button")}>
            기록 추가
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdditionalPage;
