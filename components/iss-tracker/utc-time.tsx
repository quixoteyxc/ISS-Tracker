"use client";
import { useUTCTime } from "@/hooks/use-utc-time";
import { UiDiv } from "./ui/ui-kit/ui-div";
import clsx from "clsx";
import { UiLoading } from "./ui/ui-kit/ui-loading";

export function Time({ className }: { className?: string }) {
  const { currentTime, currentDate } = useUTCTime();
  return (
    <UiDiv
      className={clsx("  border  w-full lg:w-1/3 border-black p-3", className)}
      size={"small"}
    >
      {currentDate ? (
        <div>
          <b>
            Current UTC Time : <span>{currentTime}</span>
          </b>
          <div className="flex ml-2">
            <i>{currentDate}</i>
          </div>
        </div>
      ) : (
        <UiLoading></UiLoading>
      )}
    </UiDiv>
  );
}
