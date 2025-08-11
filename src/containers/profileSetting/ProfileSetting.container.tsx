"use client";

import { type FC } from "react";
import styles from "./ProfileSetting.module.css";
import classNames from "classnames/bind";
import Image from "next/image";
import { useProfileSetting } from "./hook/useProfileSetting";

const cx = classNames.bind(styles);

const ProfileSettingContainer: FC = () => {
  const {
    LIMIT_INTRODUCTION_LENGTH,
    profileImage,
    introduction,
    previewImage,
    onChangeText,
    onChangeProfileImage,
    onSubmitProfileSetting,
  } = useProfileSetting();

  return (
    <form className={cx("signup-form")} onSubmit={onSubmitProfileSetting}>
      <div className={cx("form-header")}>
        <h2 className={cx("form-title")}>프로필 설정</h2>
        <p className={cx("form-description")}>
          몇 가지 정보만 입력하면 시작할 수 있습니다.
        </p>
      </div>
      <div className={cx("form-group")}>
        <div className={cx("form-container", "profile-image-container")}>
          <div className={cx("form-icon")}>
            <label
              htmlFor="profile-image"
              className={cx("form-label", "form-profile")}
            >
              {previewImage ? (
                <Image
                  src={previewImage}
                  alt="프로필 사진 미리보기"
                  width={100}
                  height={100}
                  className={cx("profile-image")}
                />
              ) : (
                <Image
                  src="/img/profile-placeholder.jpg"
                  alt="프로필 사진"
                  width={100}
                  height={100}
                  className={cx("profile-image")}
                />
              )}
              <span className={cx("form-text")}>프로필 사진 </span>
            </label>
          </div>
          <input
            type="file"
            accept="image/*"
            id="profile-image"
            className={cx("form-input")}
            placeholder="프로필 사진을 업로드하세요"
            onChange={onChangeProfileImage}
          />
        </div>
      </div>
      <div className={cx("form-group")}>
        <label className={cx("form-label")}>자기 소개</label>
        <div className={cx("form-container")}>
          <textarea
            rows={5}
            className={cx("form-textarea")}
            placeholder="자기 소개를 입력하세요"
            required
            value={introduction}
            onChange={onChangeText}
          />
          <p className={cx("form-text-limit")}>
            {introduction.length} / {LIMIT_INTRODUCTION_LENGTH}자
          </p>
        </div>
      </div>
      <button type="submit" className={cx("form-button")}>
        프로필 설정
      </button>
    </form>
  );
};

export default ProfileSettingContainer;
