export const countProfileMonthly = (
  records: { id: string; created_at: string }[]
) => {
  return records.reduce((acc, record) => {
    const month = new Date(record.created_at).toLocaleString("default", {
      month: "long",
    });

    acc[month] = (acc[month] || 0) + 1;
    return acc;
  }, {} as { [key: string]: number });
};
