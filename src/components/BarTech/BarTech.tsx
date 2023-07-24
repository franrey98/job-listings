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
            <div
              key={tech}
              style={{
                display: "flex",
                gap: "5px",
                marginRight: "10px",
                alignItems: "center",
              }}
            >
              <p>{tech}</p>
              <p
                style={{ cursor: "pointer" }}
                onClick={() => handleDelete(tech)}
              >
                x
              </p>
            </div>
          ))}
        </div>
        <div
          style={{
            marginRight: "20px",
            cursor: "pointer",
            textDecorationLine: "underline",
          }}
        >
          <p onClick={() => setTechSelected([])}>Clear</p>
        </div>
      </div>
    </div>
  );
};

export default BarTech;
