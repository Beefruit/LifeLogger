import { type FC } from "react";
import styles from "./page.module.css";
import classNames from "classnames/bind";
import Image from "next/image";
import ProfileSettingContainer from "@/containers/profileSetting/ProfileSetting.container";

const cx = classNames.bind(styles);

const ProfileSettingPage: FC = () => {
  return (
    <div className={cx("signup-page")}>
      <div className={cx("signup-header")}>
        <Image src={"/img/logo.png"} alt="logo" width={40} height={40} />
        <h2 className={cx("header-title")}>라이프로거</h2>
      </div>
      <div className={cx("signup-main")}>
        <h2 className={cx("signup-title")}>여정을 시작하세요.</h2>
        <p className={cx("signup-description")}>
          계정을 만들어 특별한 순간들을 기록해보세요.
        </p>
      </div>
      <ProfileSettingContainer />
    </div>
  );
};

export default ProfileSettingPage;
