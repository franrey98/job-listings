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
      <div className="information-card">
        <img src={item.logo} alt={item.company} />
        <div className="direction-information-card">
          <div className="direction-information-company">
            <p className="text-information-company">{item.company}</p>
            {item.new && (
              <div className="container-button-new">
                <p className="button-new ">NEW!</p>
              </div>
            )}
            {item.featured && (
              <div className="container-button-featured">
                <p className="button-featured">FEATURED</p>
              </div>
            )}
          </div>
          <p className="text-position">{item.position}</p>
          <div className="container-info-job">
            <p>{item.postedAt}</p>.<p>{item.contract}</p>.<p>{item.location}</p>
          </div>
        </div>
      </div>
      <div className="direction-tech">
        <p
          className={
            techSelected.includes(item.role) ? "active-text-tech" : "text-tech"
          }
          onClick={() => selectTech(item.role)}
        >
          {item.role}
        </p>
        <p
          className={
            techSelected.includes(item.level) ? "active-text-tech" : "text-tech"
          }
          onClick={() => selectTech(item.level)}
        >
          {item.level}
        </p>
        {item.languages.map((language) => (
          <p
            key={language}
            onClick={() => selectTech(language)}
            className={
              techSelected.includes(language) ? "active-text-tech" : "text-tech"
            }
          >
            {language}
          </p>
        ))}
        {item.tools.map((tools) => (
          <p
            key={tools}
            onClick={() => selectTech(tools)}
            className={
              techSelected.includes(tools) ? "active-text-tech" : "text-tech"
            }
          >
            {tools}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Cards;
