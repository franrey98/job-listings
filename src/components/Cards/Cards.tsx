import { Job } from "../../types/Job";

interface PropsCard {
  item: Job;
  selectTech: (selectedTech: string) => void;
  techSelected: string[];
}

const Cards = ({ item, selectTech, techSelected }: PropsCard) => {
  console.log(techSelected);

  return (
    <div className={`container-card ${item.featured ? "featured-card" : ""}`}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "1rem",
          marginLeft: "15px",
        }}
      >
        <img src={item.logo} alt={item.company} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "4.7rem",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <p
              style={{
                color: "cyan",
                fontSize: "18px",
                fontWeight: "bold",
                marginRight: "10px",
              }}
            >
              {item.company}
            </p>
            {item.new && (
              <div
                style={{
                  backgroundColor: "cyan",
                  padding: "3px 1px 3px 1px",
                  margin: "0px 5px 0px 5px",
                  borderRadius: "10px",
                }}
              >
                <p
                  style={{
                    margin: "0px 10px 0px 10px",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                >
                  NEW!
                </p>
              </div>
            )}
            {item.featured && (
              <div
                style={{
                  backgroundColor: "black",
                  padding: "3px 8px 3px 8px",
                  margin: "0px 5px 0px 5px",
                  borderRadius: "10px",
                }}
              >
                <p
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                >
                  FEATURED
                </p>
              </div>
            )}
          </div>
          <p style={{ fontWeight: "bold", fontSize: "20px" }}>
            {item.position}
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              color: "gray",
            }}
          >
            <p>{item.postedAt}</p>.<p>{item.contract}</p>.<p>{item.location}</p>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginRight: "15px",
          color: "cyan",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        <p className="text-tech" onClick={() => selectTech(item.role)}>
          {item.role}
        </p>
        <p className="text-tech" onClick={() => selectTech(item.level)}>
          {item.level}
        </p>
        {item.languages.map((language) => (
          <p
            key={language}
            onClick={() => selectTech(language)}
            className="text-tech"
          >
            {language}
          </p>
        ))}
        {item.tools.map((tools) => (
          <p
            key={tools}
            onClick={() => selectTech(tools)}
            style={{ cursor: "pointer" }}
          >
            {tools}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Cards;
