"use client";

import useSearchStore from "@/store/search.store";
import { useEffect, useState } from "react";
import { getSearchLogs } from "../api/searchLog.api";

interface ISearchLog {
  id: string;
  title: string;
  category: string;
  rating: number;
  visit_or_experience_date: string;
  images?: string[];
}

interface IUseSearchLogReturn {
  searchLogs: ISearchLog[];
}

const useSearchLog = (): IUseSearchLogReturn => {
  const [searchLogs, setSearchLogs] = useState<ISearchLog[]>([]);
  const { searchState } = useSearchStore();

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const logs = await getSearchLogs();

        setSearchLogs(logs);
        console.log("Fetched logs:", logs);
      } catch (error) {
        console.error("Error fetching logs:", error);
      }
    };

    fetchLogs();
  }, []);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const all = await getSearchLogs(); // 전체 로드

        const { searchInput, category, rating, createdAt } = searchState;

        console.log(createdAt);

        // 날짜 헬퍼 (useEffect 내부에만 둠)
        const toDate = (s: string | null | undefined) => {
          if (!s) return null;
          if (/^\d{4}-\d{2}-\d{2}$/.test(s)) return new Date(`${s}T00:00:00`);
          const d = new Date(s);
          return isNaN(d.getTime()) ? null : d;
        };
        const inLastWeek = (dateStr: string) => {
          const d = toDate(dateStr);
          if (!d) return false;
          const today = new Date();
          const start = new Date();
          start.setDate(today.getDate() - 6); // 최근 7일(오늘 포함)
          const D = new Date(d.getFullYear(), d.getMonth(), d.getDate());
          const S = new Date(
            start.getFullYear(),
            start.getMonth(),
            start.getDate()
          );
          const T = new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate()
          );
          return D >= S && D <= T;
        };
        const inLastMonth = (dateStr: string) => {
          const d = toDate(dateStr);
          if (!d) return false;
          const now = new Date();
          const firstPrev = new Date(now.getFullYear(), now.getMonth() - 1, 1);
          const lastPrev = new Date(now.getFullYear(), now.getMonth(), 0);
          const D = new Date(d.getFullYear(), d.getMonth(), d.getDate());
          return D >= firstPrev && D <= lastPrev;
        };

        const filtered = (all ?? []).filter((log: ISearchLog) => {
          // 1) 검색어(제목)
          if (searchInput?.trim()) {
            const kw = searchInput.trim().toLowerCase();
            if (!(log.title ?? "").toLowerCase().includes(kw)) return false;
          }
          // 2) 카테고리
          if (category !== "all" && category) {
            if (log.category !== category) return false;
          }
          // 3) 최소 평점 (rating: "all" | "1" | "2" ...)
          if (rating !== "all" && rating !== "" && rating != null) {
            const min = Number(rating);
            if (!Number.isNaN(min) && log.rating < min) return false;
          }
          // 4) 기간
          if (
            createdAt === "date1" &&
            !inLastWeek(log.visit_or_experience_date)
          )
            return false;
          if (
            createdAt === "date2" &&
            !inLastMonth(log.visit_or_experience_date)
          )
            return false;

          return true;
        });

        if (!cancelled) {
          setSearchLogs(filtered);
          // console.log("Filtered logs:", filtered);
        }
      } catch (err) {
        if (!cancelled) console.error("Error fetching logs:", err);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [searchState]);

  return { searchLogs };
};

export default useSearchLog;
