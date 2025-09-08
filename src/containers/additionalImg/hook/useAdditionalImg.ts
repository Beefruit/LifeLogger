"use client";

import { useState } from "react";

interface IUseAdditionalImgReturn {
  additionalImg: File | null;
  previewImages: string[] | null;
  onChangeAdditionalImg: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickDeleteImg: (index: number) => void;
  onDropImg: (e: React.DragEvent<HTMLDivElement>) => void;
}

const useAdditionalImg = (): IUseAdditionalImgReturn => {
  const [additionalImg, setAdditionalImg] = useState<File | null>(null);
  const [previewImages, setPreviewImages] = useState<string[] | null>(null);

  const onChangeAdditionalImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      setAdditionalImg(null);
      setPreviewImages(null);
      return;
    }

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setPreviewImages((prev) => [...(prev || []), reader.result as string]);
    };

    setAdditionalImg(file);
  };

  const onClickDeleteImg = (index: number) => {
    if (!previewImages) return;

    setPreviewImages((prev) => prev?.filter((_, i) => i !== index) || null);
  };

  const onDropImg = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];

    console.log(file);
  };
  return {
    additionalImg,
    previewImages,
    onChangeAdditionalImg,
    onClickDeleteImg,
    onDropImg,
  };
};

export default useAdditionalImg;
