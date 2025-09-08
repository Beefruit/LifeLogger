"use client";

import { type FC, useState } from "react";
import styles from "./AdditionalImg.module.css";
import classNames from "classnames/bind";
import { Share, X } from "lucide-react";
import Image from "next/image";
import useAdditionalImg from "./hook/useAdditionalImg";

const cx = classNames.bind(styles);

const AdditionalImgContainer: FC = () => {
  const { previewImages, onChangeAdditionalImg, onClickDeleteImg, onDropImg } =
    useAdditionalImg();

  return (
    <div className={cx("form-group")}>
      <label className={cx("form-label")}>이미지</label>
      <div className={cx("preview-container")}>
        <ul className={cx("preview-list")}>
          {previewImages &&
            previewImages.map((imgSrc, idx) => (
              <li className={cx("preview-item")} key={idx}>
                <button
                  type="button"
                  className={cx("delete-button")}
                  onClick={() => onClickDeleteImg(idx)}
                >
                  <X size={14} />
                </button>
                <Image src={imgSrc} alt={`Preview ${idx + 1}`} fill={true} />
              </li>
            ))}
        </ul>
      </div>
      <div className={cx("form-container")} onDrop={onDropImg}>
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
  );
};

export default AdditionalImgContainer;
