"use client";

import { type FC } from "react";
import styles from "./ProfileSetting.module.css";
import classNames from "classnames/bind";
import Image from "next/image";

const cx = classNames.bind(styles);

const ProfileSettingContainer: FC = () => {
  return (
    <form className={cx("signup-form")}>
      <div className={cx("form-header")}>
        <h2 className={cx("form-title")}>프로필 설정</h2>
        <p className={cx("form-description")}>
          몇 가지 정보만 입력하면 시작할 수 있습니다.
        </p>
      </div>
      <div className={cx("form-group")}>
        <label className={cx("form-label")}>프로필 사진</label>
        <div className={cx("form-container")}>
          <div className={cx("form-icon")}>
            <Image
              width={40}
              height={40}
              src="/img/profile-placeholder.jpg"
              alt="프로필 사진"
              className={cx("profile-image")}
            />
          </div>
          <input
            type="file"
            accept="image/*"
            className={cx("form-input")}
            placeholder="프로필 사진을 업로드하세요"
          />
        </div>
      </div>
      <div className={cx("form-group")}>
        <label className={cx("form-label")}>자기 소개</label>
        <div className={cx("form-container")}>
          <input
            type="text"
            className={cx("form-input")}
            placeholder="자기 소개를 입력하세요"
            required
          />
        </div>
      </div>
      <button type="submit" className={cx("form-button")}>
        프로필 설정
      </button>
    </form>
  );
};

export default ProfileSettingContainer;
