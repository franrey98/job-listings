import { Icons } from "./components/Svg";
import data from "../public/mocks/data.json";
import Cards from "./components/Cards/Cards";
import useSelectedTech from "./hooks/useSelectedTech";
import BarTech from "./components/BarTech/BarTech";

function App() {
  const { BgHeaderDesktop } = Icons;
  const { techSelected, selectTech, setTechSelected } = useSelectedTech();

  return (
    <>
      <BgHeaderDesktop />
      {techSelected.length > 0 && (
        <BarTech
          techSelected={techSelected}
          setTechSelected={setTechSelected}
        />
      )}
      <div className="direction-card">
        {data.map((item) => (
          <Cards
            techSelected={techSelected}
            selectTech={selectTech}
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </>
  );
}

export default App;
