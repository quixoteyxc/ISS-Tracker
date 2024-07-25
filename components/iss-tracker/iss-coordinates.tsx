"use client";
import { useIssLocation } from "../../hooks/use-iss-location";
import { UiDiv } from "./ui/ui-kit/ui-div";
import clsx from "clsx";
import { UiLoading } from "./ui/ui-kit/ui-loading";

export function IssCoordinates({className}:{className?:string}) {
  const location = useIssLocation();
  return (
    <UiDiv size={"big"} className={clsx("p-3 w-full lg:w-2/3 ",className)}>
      <div>
        {location ? (
          <div>
            <b>ISS is now located at:</b>
            <div className="flex flex-col sm:flex-row ml-2">
              <i>longitude: {location.lng}</i>
              <span className="hidden sm:block"> , </span>
              <i>latitude: {location.lat}</i>
            </div>
          </div>
        ) : (
          <UiLoading></UiLoading>
        )}
      </div>
    </UiDiv>
  );
}
