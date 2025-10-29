"use client";

import { useEffect, useState } from "react";
import { getLogs } from "../api/log.api";

interface ILog {
  id: string;
  title: string;
  category: string;
  rating: number;
  visit_or_experience_date: string;
  images?: string[];
}

interface IUseLogReturn {
  logs: ILog[];
}

const useLog = (): IUseLogReturn => {
  const [logs, setLogs] = useState<ILog[]>([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const logs = await getLogs();

        setLogs(logs);
        console.log("Fetched logs:", logs);
      } catch (error) {
        console.error("Error fetching logs:", error);
      }
    };

    fetchLogs();
  }, []);
  return { logs };
};

export default useLog;
