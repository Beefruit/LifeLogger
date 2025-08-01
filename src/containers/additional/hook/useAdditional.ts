"use client";

import { ReactElement, useState } from "react";
import { Film, Music, UtensilsCrossed, BookOpen } from "lucide-react";
import { createElement } from "react";
import classNames from "classnames/bind";

export type CategoryType = "movie" | "music" | "restaurant" | "book";

interface CategoryConfig {
  title: string;
  placeholder: string;
  icon: (className?: string, size?: number) => ReactElement;
  description: string;
  label: string;
  color: string;
}

export const useAdditional = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryType>("movie");

  const categoryConfig: Record<CategoryType, CategoryConfig> = {
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
      color: "#F40C1EF",
    },
  };

  return { selectedCategory, setSelectedCategory, categoryConfig };
};
