import { TCategory } from "@/types";

export const filterRecentRecords = ({
  records,
  showNumber,
}: {
  records: {
    created_at: string;
    id: string;
    title: string;
    category: TCategory;
    rating: number;
  }[];
  showNumber: number;
}) => {
  const sortedRecords = records.sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
  return sortedRecords.slice(0, showNumber);
};
