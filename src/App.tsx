import { Icons } from "./components/Svg";
import data from "../public/mocks/data.json";
import Cards from "./components/Cards/Cards";
import useSelectedTech from "./hooks/useSelectedTech";
import BarTech from "./components/BarTech/BarTech";
import Footer from "./components/Footer/Footer";

function App() {
  const { BgHeaderDesktop } = Icons;
  const { techSelected, selectTech, setTechSelected, filterArray } =
    useSelectedTech();

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
        {techSelected.length === 0
          ? data.map((item) => (
              <Cards
                techSelected={techSelected}
                selectTech={selectTech}
                key={item.id}
                item={item}
              />
            ))
          : filterArray.map((item) => (
              <Cards
                techSelected={techSelected}
                selectTech={selectTech}
                key={item.id}
                item={item}
              />
            ))}
      </div>
      <Footer />
    </>
  );
}

export default App;
