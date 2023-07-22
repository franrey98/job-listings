import { useState } from "react";

const useSelectedTech = () => {
  const [techSelected, setTechSelected] = useState([]);
  const [isMarked, setIsMarked] = useState(false);

  const selectTech = (selectedTech: string) => {
    setTechSelected((prevTechSelected: any) => {
      if (prevTechSelected.includes(selectedTech)) {
        return prevTechSelected.filter((tech: any) => tech !== selectedTech);
      } else {
        return [...prevTechSelected, selectedTech];
      }
    });
  };

  return { techSelected, selectTech, setTechSelected };
};

export default useSelectedTech;
