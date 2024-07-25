import { useState, useEffect } from "react";

export function useIssLocation() {
  const [location, setLocation] = useState<{
    lat: number ;
    lng: number ;
  } | undefined>(undefined);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch("http://api.open-notify.org/iss-now.json");
        const data = await response.json();
        setLocation({
          lat: data.iss_position.latitude,
          lng: data.iss_position.longitude,
        });
      } catch (error) {
        console.error("Error fetching:", error);
      }
    };

    fetchLocation();
    const intervalId = setInterval(fetchLocation, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return location;
}
