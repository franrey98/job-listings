import { Dispatch, SetStateAction } from "react";

interface PropsBarTech {
  techSelected: string[];
  setTechSelected: Dispatch<SetStateAction<string[]>>;
}

const BarTech = ({ techSelected, setTechSelected }: PropsBarTech) => {
  const handleDelete = (tech: string) => {
    setTechSelected(techSelected.filter((techInBar) => techInBar !== tech));
  };

  return (
    <div className="container-bar">
      <div className={"position-bar"}>
        <div className="container-tech">
          {techSelected.map((tech) => (
            <div key={tech} className="display-tech">
              <p className="text-tech-bar">{tech}</p>
              <p className="delete-tech" onClick={() => handleDelete(tech)}>
                x
              </p>
            </div>
          ))}
        </div>
        <div className="clear-button">
          <p onClick={() => setTechSelected([])}>Clear</p>
        </div>
      </div>
    </div>
  );
};

export default BarTech;
