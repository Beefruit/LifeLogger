import { type TCategory } from "@/types";

export const countRecordsByCategory = (records: { category: TCategory }[]) => {
  return records.reduce(
    (acc, record) => {
      acc[record.category] = (acc[record.category] || 0) + 1;
      return acc;
    },
    {
      movie: 0,
      music: 0,
      restaurant: 0,
      book: 0,
      total: records.length,
    }
  );
};
