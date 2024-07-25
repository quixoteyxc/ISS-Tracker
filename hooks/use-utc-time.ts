import { DAYS_OF_WEEK, MONTHS } from "@/components/consts";
import { useEffect, useState } from "react";


export function useUTCTime() {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getUTCHours();
      const minutes = now.getUTCMinutes().toString().padStart(2, '0');
      const weekDay = now.getUTCDay();
      const month = now.getMonth();
      const day = now.getDate();
      const year = now.getFullYear();
      setCurrentTime(`${hours}:${minutes}`);
      setCurrentDate(
        `${DAYS_OF_WEEK[weekDay]}, ${day} ${MONTHS[month]} ${year} `
      );
    };
    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return { currentTime, currentDate };
}
