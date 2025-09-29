import { type FC } from "react";
import styles from "./page.module.css";
import classNames from "classnames/bind";
import HeaderContainer from "@/containers/header/Header.container";
import RecordImgSlideContainer from "@/containers/recordImgSlide/RecordImgSlide.container";
import {
  Film,
  Music,
  UtensilsCrossed,
  BookOpen,
  Star,
  Calendar,
  SquarePen,
  Trash2,
} from "lucide-react";
import { match } from "ts-pattern";
import { type TCategory } from "@/types";
import { formatCategoryToKorean } from "@/utils/formatStr";
import { format } from "date-fns";

interface IRecordPageProps {
  params: {
    id: string;
  };
}

interface IRecord {
  id: string;
  title: string;
  category: TCategory;
  rating: number;
  created_at: string;
  description: string;
  images?: string[];
}

const cx = classNames.bind(styles);

const RecordPage: FC<IRecordPageProps> = async ({ params }) => {
  const id = (await params).id;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/record/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch record");
  }

  const { record }: { record: IRecord } = await res.json();

  return (
    <>
      <HeaderContainer />
      <div className={cx("main")}>
        <div className={cx("record-header-icon")}>
          <div
            className={cx("record-header-category", {
              movie: record.category === "movie",
              music: record.category === "music",
              restaurant: record.category === "restaurant",
              book: record.category === "book",
            })}
          >
            {match(record.category)
              .with("movie", () => (
                <Film size={12} className={cx("record-icon")} />
              ))
              .with("music", () => (
                <Music size={12} className={cx("record-icon")} />
              ))
              .with("restaurant", () => (
                <UtensilsCrossed size={12} className={cx("record-icon")} />
              ))
              .with("book", () => (
                <BookOpen size={12} className={cx("record-icon")} />
              ))
              .exhaustive()}
            <span className={cx("record-category")}>
              {formatCategoryToKorean(record.category)}
            </span>
          </div>
          <div className={cx("record-header-util")}>
            <div className={cx("record-header-edit")}>
              <SquarePen size={16} className={cx("record-edit-icon")} />
              <span className={cx("record-edit-text")}>편집</span>
            </div>
            <div className={cx("record-header-delete")}>
              <Trash2 size={16} className={cx("record-delete-icon")} />
              <span className={cx("record-delete-text")}>삭제</span>
            </div>
          </div>
        </div>
        <div className={cx("record-header-text")}>
          <h2 className={cx("header-title")}>{record.title}</h2>
          <div className={cx("header-description")}>
            <div className={cx("header-rating")}>
              <Star size={16} className={cx("header-star")} />
              <span className={cx("header-rating-value")}>
                {record.rating}/5
              </span>
            </div>
            <div className={cx("header-date")}>
              <Calendar size={16} className={cx("header-calendar")} />
              <span className={cx("header-date-value")}>
                {format(new Date(record.created_at), "yyyy.MM.dd")}
              </span>
            </div>
          </div>
        </div>
        <RecordImgSlideContainer images={record.images} />
        <div className={cx("record-content")}>
          <p className={cx("record-title")}>나의 경험</p>
          <p className={cx("record-description")}>{record.description}</p>
        </div>
      </div>
    </>
  );
};

export default RecordPage;
