import { useState, useEffect } from "react";
import { Job } from "../types/Job";
import data from "../../public/mocks/data.json";

const useSelectedTech = () => {
  const [techSelected, setTechSelected] = useState<string[]>([]);
  const [filterArray, setFilterArray] = useState<Job[]>([]);

  const selectTech = (selectedTech: string) => {
    setTechSelected((prevTechSelected: any) => {
      if (prevTechSelected.includes(selectedTech)) {
        return prevTechSelected.filter((tech: any) => tech !== selectedTech);
      } else {
        return [...prevTechSelected, selectedTech];
      }
    });
  };

  useEffect(() => {
    const filteredDataArray = data.filter((obj) => {
      return techSelected.every((value) => {
        if (Array.isArray(obj.languages) && obj.languages.includes(value)) {
          return true;
        }

        if (Array.isArray(obj.tools) && obj.tools.includes(value)) {
          return true;
        }

        return obj.level === value || obj.role === value;
      });
    });
    setFilterArray(filteredDataArray);
  }, [techSelected]);

  return { techSelected, selectTech, setTechSelected, filterArray };
};

export default useSelectedTech;
