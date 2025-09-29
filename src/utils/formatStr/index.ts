import { type TCategory } from "@/types";

export const formatCategoryToKorean = (category: TCategory): string => {
  switch (category) {
    case "movie":
      return "영화";
    case "music":
      return "음악";
    case "restaurant":
      return "식당";
    case "book":
      return "독서";
    default:
      return "";
  }
};
