"use client";

import { type FC } from "react";
import classNames from "classnames/bind";
import styles from "./Additional.module.css";
import { Star, X, Share } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useAdditional } from "@/containers/additional/hook/useAdditional";
import { TCategory } from "@/types";

const Select = dynamic(() => import("@/component/select/Select.component"), {
  ssr: false,
});

const cx = classNames.bind(styles);

interface IAdditionalContainerProps {
  type: TCategory;
}

const AdditionalContainer: FC<IAdditionalContainerProps> = ({ type }) => {
  const {
    selectedCategory,
    setSelectedCategory,
    categoryConfig,
    rating,
    title,
    experience,
    description,
    onClickRatingChange,
    onChangeTitle,
    onChangeExperience,
    onChangeDescription,
    onSubmitAdditional,
    previewImages,
    isDragOver,
    onChangeAdditionalImg,
    onClickDeleteImg,
    onDropImg,
    onDragOver,
    onDragEnter,
    onDragLeave,
  } = useAdditional({ type });

  return (
    <div className={cx("additional")}>
      <div className={cx("additional-header")}>
        <div
          className={cx("additional-icon-container")}
          style={{ backgroundColor: categoryConfig[selectedCategory].color }}
        >
          {categoryConfig[selectedCategory].icon(cx("additional-icon"), 32)}
        </div>
        <h2 className={cx("additional-title")}>
          {categoryConfig[selectedCategory].title}
        </h2>
        <p className={cx("additional-description")}>
          당신의 경험을 기록하고 기억에 남게 만들어보세요.
        </p>
      </div>
      <div className={cx("additional-main")}>
        <form className={cx("additional-form")} onSubmit={onSubmitAdditional}>
          <div className={cx("form-header")}>
            <h3 className={cx("form-title")}>기록 세부사항</h3>
            <p className={cx("form-description")}>
              {categoryConfig[selectedCategory].description}
            </p>
          </div>
          <div className={cx("form-group")}>
            <label className={cx("form-label")}>카테고리</label>
            <div className={cx("select-container")}>
              <Select
                options={[
                  { value: "movie", label: "영화" },
                  { value: "music", label: "음악" },
                  { value: "restaurant", label: "식당" },
                  { value: "book", label: "독서" },
                ]}
                value={selectedCategory}
                onChange={(option) =>
                  setSelectedCategory(option?.value as TCategory)
                }
                icon={categoryConfig[selectedCategory].icon(cx("form-icon"))}
                optionBackgroundColor={categoryConfig[selectedCategory].color}
              />
            </div>
          </div>
          <div className={cx("form-group")}>
            <label className={cx("form-label")}>
              {categoryConfig[selectedCategory].label}
            </label>
            <input
              type="text"
              className={cx("form-input")}
              placeholder={categoryConfig[selectedCategory].placeholder}
              value={title}
              onChange={onChangeTitle}
              required
            />
          </div>
          <div className={cx("form-group")}>
            <label className={cx("form-label")}>경험한 날짜</label>
            <input
              type="date"
              className={cx("form-input")}
              value={experience}
              onChange={onChangeExperience}
            />
          </div>
          <div className={cx("form-group")}>
            <label className={cx("form-label")}>평점</label>
            <div className={cx("form-rating")}>
              <div className={cx("rating-container")}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={24}
                    fill={star <= rating ? "gold" : "none"}
                    stroke={star <= rating ? "gold" : "#ccc"}
                    onClick={() => onClickRatingChange(star)}
                    style={{ cursor: "pointer" }}
                    className={cx("rating-star")}
                  />
                ))}
                <p className={cx("rating-text")}>{rating}/5</p>
              </div>
            </div>
          </div>
          <div className={cx("form-group")}>
            <label className={cx("form-label")}>설명</label>
            <textarea
              className={cx("form-textarea")}
              placeholder="당신의 생각과 경험을 공유해주세요."
              value={description}
              onChange={onChangeDescription}
              rows={4}
            ></textarea>
          </div>
          <div className={cx("form-group")}>
            <label className={cx("form-label")}>이미지</label>
            {previewImages && (
              <div className={cx("preview-container")}>
                <ul className={cx("preview-list")}>
                  {previewImages.map((imgSrc, idx) => (
                    <li className={cx("preview-item")} key={idx}>
                      <button
                        type="button"
                        className={cx("delete-button")}
                        onClick={() => onClickDeleteImg(idx)}
                      >
                        <X size={14} />
                      </button>
                      <Image
                        src={imgSrc}
                        alt={`Preview ${idx + 1}`}
                        fill={true}
                      />
                    </li>
                  ))}
                </ul>
                <p className={cx("preview-count")}>{previewImages.length}/6</p>
              </div>
            )}
            <div className={cx("divider")}></div>
            <div
              className={cx("form-container", {
                "form-container--active": isDragOver,
              })}
              onDragStart={onDragEnter}
              onDragEnter={onDragEnter}
              onDragLeave={onDragLeave}
              onDragEnd={onDragLeave}
              onDragOver={onDragOver}
              onDrop={onDropImg}
            >
              <Share size={48} className={cx("upload-icon")} />
              <h3 className={cx("form-description")}>
                이미지를 드래그하여 놓거나 클릭하여 선택하세요.
              </h3>
              <label htmlFor="fileUpload" className={cx("file-upload")}>
                파일 선택
              </label>
              <input
                type="file"
                id="fileUpload"
                accept="image/*"
                className={cx("form-file")}
                onChange={onChangeAdditionalImg}
              />
            </div>
          </div>
          <button
            type="submit"
            className={cx("form-button")}
            style={{ backgroundColor: categoryConfig[selectedCategory].color }}
          >
            기록 추가
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdditionalContainer;
