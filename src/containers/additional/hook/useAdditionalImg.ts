"use client";

import { useState } from "react";

interface IUseAdditionalImgReturn {
  additionalImgs: File[] | null;
  previewImages: string[] | null;
  isDragOver: boolean;
  onChangeAdditionalImg: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickDeleteImg: (index: number) => void;
  onDropImg: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragEnter: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragLeave: (e: React.DragEvent<HTMLDivElement>) => void;
}

const useAdditionalImg = (): IUseAdditionalImgReturn => {
  const [additionalImgs, setAdditionalImgs] = useState<File[] | null>(null);
  const [previewImages, setPreviewImages] = useState<string[] | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const onChangeAdditionalImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      setAdditionalImgs(null);
      setPreviewImages(null);
      return;
    }

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setPreviewImages((prev) => [...(prev || []), reader.result as string]);
    };

    setAdditionalImgs((prev) => (prev ? [...prev, file] : [file]));
  };

  const onClickDeleteImg = (index: number) => {
    if (!previewImages) return;

    if (previewImages.length === 1) {
      setPreviewImages(null);
      return;
    }

    setPreviewImages((prev) => prev?.filter((_, i) => i !== index) || null);
    setAdditionalImgs((prev) => prev?.filter((_, i) => i !== index) || null);
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const onDropImg = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    setIsDragOver(false);

    if (previewImages && previewImages.length >= 6) {
      return;
    }

    const file = e.dataTransfer.files?.[0];

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setPreviewImages((prev) => [...(prev || []), reader.result as string]);
    };

    setAdditionalImgs((prev) => (prev ? [...prev, file] : [file]));
  };

  const onDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    setIsDragOver(true);
  };

  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setIsDragOver(false);
    }
  };

  return {
    additionalImgs,
    previewImages,
    isDragOver,
    onChangeAdditionalImg,
    onClickDeleteImg,
    onDropImg,
    onDragOver,
    onDragEnter,
    onDragLeave,
  };
};

export default useAdditionalImg;
