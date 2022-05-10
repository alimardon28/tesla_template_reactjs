import "./App.css";
import Header from "./Components/Header/Header";
import Accessories from "./Pages/Accessories/Accessories";
import Model3 from "./Pages/Model3/Model3";
import ModelS from "./Pages/ModelS/ModelS";
import ModelX from "./Pages/ModelX/ModelX";
import ModelY from "./Pages/ModelY/ModelY";
import SolarPanels from "./Pages/SolarPanels/SolarPanels";
import SolarRoof from "./Pages/SolarRoof/SolarRoof";

function App() {
  return (
    <div className="App">
      <Header />
      <Model3 />
      <ModelY />
      <ModelS />
      <ModelX/>
      <SolarPanels/>
      <SolarRoof/>
      <Accessories/>
    </div>
  );
}

export default App;
