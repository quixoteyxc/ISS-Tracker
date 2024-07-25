import React from "react";
import { useAstronauts } from "@/hooks/use-astronauts";
import { UiDiv } from "./ui/ui-kit/ui-div";
import { UiNameHolder } from "./ui/ui-kit/ui-name-holder";
import clsx from "clsx";
import { UiLoadingAstronauts } from "./ui/ui-kit/ui-loading-astronauts";
import { UiLoading } from "./ui/ui-kit/ui-loading";
import { UiLoadingSmall } from "./ui/ui-kit/ui-loadin-small";

export function Astronauts({ className }: { className: string }) {
  const { numberOfPeople, people } = useAstronauts();

  return (
    <UiDiv
      size={"small"}
      className={clsx("relative  flex flex-col", className)}
    >
      <div className="flex flex-grow flex-col overflow-y-scroll p-2  w-full">
        {numberOfPeople !== null ? (
          <ul className="flex gap-2 flex-col bg-white w-full list-none">
            {people.map((person, index) => (
              <li key={index} className="w-full">
                <UiNameHolder fullname={person.name} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="">
            <UiLoadingAstronauts></UiLoadingAstronauts>
          </div>
        )}
      </div>

      {numberOfPeople !== null ? (
        <div className="p-2 border-t border-black bg-white w-full">
          Total amount:{numberOfPeople} people on ISS
        </div>
      ) : (
        <UiLoadingSmall></UiLoadingSmall>
      )}
    </UiDiv>
  );
}
