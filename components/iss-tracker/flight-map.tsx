"use client";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { UiDiv } from "./ui/ui-kit/ui-div";
import clsx from "clsx";
import { UiLoadingBig } from "./ui/ui-kit/ui-loading-big";

const containerStyle = {
  width: "100%",
  height: "100%",
};

export function FlightMap({ className }: { className: string }) {
  const [markerPosition, setMarkerPosition] = useState<{
    lat: number;
    lng: number;
  }>({ lat: 0, lng: 0 });

  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });
  useEffect(() => {
    if (!isLoaded) return;

    const fetchLocation = async () => {
      try {
        const response = await fetch("http://api.open-notify.org/iss-now.json");
        const data = await response.json();

        if (data) {
          setMarkerPosition({
            lat: parseFloat(data.iss_position.latitude),
            lng: parseFloat(data.iss_position.longitude),
          });
        } else {
          console.error("Invalid data structure:", data);
        }
      } catch (error) {
        console.error("Error fetching:", error);
      }
    };

    fetchLocation();

    const intervalId = setInterval(() => {
      fetchLocation();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [isLoaded]);

  if (loadError) {
    return <div>Error loading map</div>;
  }

  return (
    <UiDiv size={"big"} className={clsx("sm:h-full w-full  h-44 ", className)}>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={markerPosition}
          zoom={3}
        >
          <Marker position={markerPosition} />
        </GoogleMap>
      ) : (
        <UiLoadingBig></UiLoadingBig>
      )}
    </UiDiv>
  );
}
