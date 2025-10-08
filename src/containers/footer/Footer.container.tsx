import { type FC } from "react";
import styes from "./Footer.module.css";
import classNames from "classnames/bind";
import Link from "next/link";
import { Github } from "lucide-react";

const cx = classNames.bind(styes);

const FooterContainer: FC = () => {
  return (
    <footer className={cx("footer")}>
      <div className={cx("footer-content")}>
        <p className={cx("footer-text")}>
          © 2025 Lifelogger. All rights reserved.
        </p>
        <Link
          href="https://github.com/Beefruit/LifeLogger"
          className={cx("footer-link")}
        >
          <Github size={16} />
          Github Link
        </Link>
      </div>
    </footer>
  );
};

export default FooterContainer;
