"use client";

import React, { ReactElement, useState } from "react";
import { Film, Music, UtensilsCrossed, BookOpen } from "lucide-react";
import { createElement } from "react";
import { TCategory } from "@/types";
import useAdditionalImg from "./useAdditionalImg";
import { postAdditional } from "../api/additional.api";

interface CategoryConfig {
  title: string;
  placeholder: string;
  icon: (className?: string, size?: number) => ReactElement;
  description: string;
  label: string;
  color: string;
}

interface IUseAdditionalProps {
  type: TCategory;
}

interface IUseAdditionalReturn {
  selectedCategory: TCategory;
  setSelectedCategory: React.Dispatch<React.SetStateAction<TCategory>>;
  categoryConfig: Record<TCategory, CategoryConfig>;
  rating: number;
  title: string;
  experience: string;
  description: string;
  previewImages: string[] | null;
  isDragOver: boolean;
  onChangeAdditionalImg: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickDeleteImg: (index: number) => void;
  onDropImg: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragEnter: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragLeave: (e: React.DragEvent<HTMLDivElement>) => void;
  onClickRatingChange: (star: number) => void;
  onSubmitAdditional: (e: React.FormEvent<HTMLFormElement>) => void;
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeExperience: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeDescription: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const useAdditional = ({
  type,
}: IUseAdditionalProps): IUseAdditionalReturn => {
  const categoryConfig: Record<TCategory, CategoryConfig> = {
    movie: {
      title: "새로운 영화 추가",
      placeholder: "영화 제목을 입력하세요",
      description: "영화 경험에 대한 세부사항을 입력해주세요.",
      label: "영화 제목",
      icon: (className, size = 16) => createElement(Film, { size, className }),
      color: "#F43F5E",
    },
    music: {
      title: "새로운 음악 추가",
      placeholder: "음악 제목을 입력하세요",
      description: "음악 경험에 대한 세부사항을 입력해주세요.",
      label: "음악 제목",
      icon: (className, size = 16) => createElement(Music, { size, className }),
      color: "#8B5CF6",
    },
    restaurant: {
      title: "새로운 식당 추가",
      placeholder: "식당 이름을 입력하세요",
      description: "식당 경험에 대한 세부사항을 입력해주세요.",
      label: "식당 이름",
      icon: (className, size = 16) =>
        createElement(UtensilsCrossed, { size, className }),
      color: "#10B981",
    },
    book: {
      title: "새로운 책 추가",
      placeholder: "책 제목을 입력하세요",
      description: "독서 경험에 대한 세부사항을 입력해주세요.",
      label: "책 제목",
      icon: (className, size = 16) =>
        createElement(BookOpen, { size, className }),
      color: "#1190F2",
    },
  };
  const [selectedCategory, setSelectedCategory] = useState<TCategory>(type);
  const [rating, setRating] = useState(3);
  const [title, setTitle] = useState("");
  const [experience, setExperience] = useState("");
  const [description, setDescription] = useState("");

  const {
    additionalImgs,
    previewImages,
    isDragOver,
    onChangeAdditionalImg,
    onClickDeleteImg,
    onDropImg,
    onDragOver,
    onDragEnter,
    onDragLeave,
  } = useAdditionalImg();

  const onClickRatingChange = (star: number) => {
    setRating(star);
  };

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeExperience = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExperience(e.target.value);
  };

  const onChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const onSubmitAdditional = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      category: selectedCategory,
      rating,
      title,
      experience,
      description,
      images: additionalImgs,
    };

    await postAdditional(formData);
  };

  return {
    selectedCategory,
    setSelectedCategory,
    categoryConfig,
    rating,
    title,
    experience,
    description,
    onClickRatingChange,
    onSubmitAdditional,
    onChangeTitle,
    onChangeExperience,
    onChangeDescription,
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
