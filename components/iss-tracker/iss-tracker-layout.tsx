"use client";

import { Astronauts } from "./astronauts-list";
import { FlightMap } from "./flight-map";
import { InfoHolder } from "./info-holder";
import { IssCoordinates } from "./iss-coordinates";
import { Time } from "./utc-time";

export function IssTrackerLayout() {
  return (
    <main className="flex flex-col gap-3 p-3 h-screen  ">
      <InfoHolder className="flex  justify-center  flex-col-reverse lg:flex-row  ">
        <IssCoordinates className=" flex  flex-col justify-center" />
        <Time  className=" flex flex-col justify-center"/>
      </InfoHolder>
      <InfoHolder className=" flex flex-col  sm:h-full sm:flex-row">
        <FlightMap className=" w-full h-44 sm:w-2/3"></FlightMap>
        <Astronauts className=" w-full h-max max-h-full sm:h-full sm:w-1/3"></Astronauts>
      </InfoHolder>
    </main>
  );
}
