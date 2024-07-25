import { useState, useEffect } from "react";
type PersonInSpace = {
  name: string;
  craft: string;
};
export function useAstronauts() {
  const [people, setPeople] = useState<PersonInSpace[]>([]);
  const [numberOfPeople, setNumberOfPeople] = useState<string | null>(null);

  useEffect(() => {
    const fetchPeopleInSpace = async () => {
      try {
        const response = await fetch("http://api.open-notify.org/astros.json");
        const data = await response.json();
        if (data.message === "success") {
          const issPeople = data.people.filter(
            (person: PersonInSpace) => person.craft === "ISS"
          );
          setNumberOfPeople(` ${issPeople.length}`);
          setPeople(issPeople);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPeopleInSpace();
  }, []);

  return { numberOfPeople, people };
}
