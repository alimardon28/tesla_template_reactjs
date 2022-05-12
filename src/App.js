import "./App.css";
import {
  Routes,
  Route,
} from "react-router-dom";

import Header from "./Components/Header/Header";
import Accessories from "./Pages/Accessories/Accessories";
import Model3 from "./Pages/Model3/Model3";
import ModelS from "./Pages/ModelS/ModelS";
import ModelX from "./Pages/ModelX/ModelX";
import ModelY from "./Pages/ModelY/ModelY";
import SolarPanels from "./Pages/SolarPanels/SolarPanels";
import SolarRoof from "./Pages/SolarRoof/SolarRoof";
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
       <Route path="/" element={ <Home/>}/>
         <Route path="/model3" element={ <Model3 />}/>
         <Route path="/modely" element={ <ModelY />}/>
         <Route path="/models" element={ <ModelS />}/>
         <Route path="/modelx" element={ <ModelX/>}/>
         <Route path="/solarpanels" element={ <SolarPanels/>}/>
         <Route path="/solaroof" element={ <SolarRoof/>}/>
         <Route path="/accessories" element={ <Accessories/>}/>
      </Routes>



    </div>
  );
}

export default App;
