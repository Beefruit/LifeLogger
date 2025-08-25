"use client";

import { type FC } from "react";
import styles from "./Profile.module.css";
import classNames from "classnames/bind";
import Image from "next/image";
import { Calendar, TrendingUp, Star } from "lucide-react";
import { useProfile } from "./hook/useProfile";

const cx = classNames.bind(styles);

const ProfileContainer: FC = () => {
  const { userProfile } = useProfile();

  return (
    <div className={cx("profile-header")}>
      <div className={cx("header-icon")}>
        <Image
          src={userProfile?.avatar_url || "/img/placeholder.png"}
          alt="profile-img"
          width={96}
          height={96}
        />
      </div>
      <div className={cx("header-container")}>
        <h2 className={cx("header-name")}>{userProfile?.name || "게스트"}</h2>
        <p className={cx("header-introduction")}>
          {userProfile?.bio ||
            "영화, 음악, 그리고 훌륭한 음식 경험에 열정적인 사람"}
        </p>
        <div className={cx("header-content")}>
          <div className={cx("header-content__item")}>
            <Calendar size={16} />
            <span>{userProfile?.created_at} 가입</span>
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
  );
};

export default ProfileContainer;
