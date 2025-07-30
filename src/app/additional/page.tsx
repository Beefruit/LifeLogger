import { type FC } from "react";
import styles from "./page.module.css";
import classNames from "classnames/bind";
import HeaderContainer from "@/containers/header/Header.container";
import AdditionalContainer from "@/containers/additional/Additional.container";

const cx = classNames.bind(styles);

const AdditionalPage: FC = () => {
  return (
    <>
      <HeaderContainer />
      <AdditionalContainer />
    </>
  );
};

export default AdditionalPage;
