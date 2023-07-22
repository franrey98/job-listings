import { Dispatch, SetStateAction } from "react";

interface PropsBarTech {
  techSelected: string[];
  setTechSelected: Dispatch<SetStateAction<never[]>>;
}

const BarTech = ({ techSelected, setTechSelected }: PropsBarTech) => {
  console.log(techSelected);

  return (
    <div style={{ margin: "0px 100px -50px 100px" }}>
      <div
        style={{
          position: "relative",
          top: "-30px",
          height: "50px",
          width: "100%",
          borderRadius: "5px",
          backgroundColor: "rgb(255, 255, 255)",
          boxShadow: " 0 4px 8px hsl(180, 29%, 50%)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: "5px", marginLeft: "20px" }}>
          {techSelected.map((tech) => (
            <p key={tech}>{tech}</p>
          ))}
        </div>
        <div style={{ marginRight: "20px" }}>
          <p onClick={() => setTechSelected([])}>Clear</p>
        </div>
      </div>
    </div>
  );
};

export default BarTech;
