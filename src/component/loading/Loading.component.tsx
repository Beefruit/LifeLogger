import { type FC } from "react";
import styles from "./Loading.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const LoadingSpinner: FC = () => {
  return <span className={cx("loader")}></span>;
};

export default LoadingSpinner;
