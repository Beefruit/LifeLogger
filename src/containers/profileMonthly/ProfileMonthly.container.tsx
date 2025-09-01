import { type FC } from "react";
import styles from "./ProfileMonthly.module.css";
import classNames from "classnames/bind";
import { countProfileMonthly } from "./domain";

interface IProfileMonthlyContainerProps {
  records: {
    id: string;
    created_at: string;
  }[];
}

const cx = classNames.bind(styles);

const ProfileMonthlyContainer: FC<IProfileMonthlyContainerProps> = ({
  records,
}) => {
  const monthlyRecordCounts = countProfileMonthly(records);

  return (
    <div className={cx("profile-month")}>
      <div className={cx("month-header")}>
        <h2 className={cx("month-title")}>월별 활동</h2>
        <p className={cx("month-description")}>지난 몇 달간의 기록 활동</p>
      </div>
      {Object.entries(monthlyRecordCounts).map(([month, count]) => (
        <div key={month} className={cx("month-chart")}>
          <p className={cx("chart-title")}>{month}</p>
          <div className={cx("chart-bar-wrapper")}>
            <div className={cx("chart-bar")}>
              <div
                className={cx("chart-bar__fill")}
                style={{ width: `${(count / records.length) * 100}%` }}
              ></div>
            </div>
            <span className={cx("chart-bar__label")}>{count}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileMonthlyContainer;
