import { format } from "date-fns";

export const formatDateToYearMonth = (dateString: string): string => {
  const date = new Date(dateString);
  return format(date, "yyyy년 M월");
};
