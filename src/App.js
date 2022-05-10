import "./App.css";
import Header from "./Components/Header/Header";
import Model3 from "./Pages/Model3/Model3";
import ModelS from "./Pages/ModelS/ModelS";
import ModelY from "./Pages/ModelY/ModelY";

function App() {
  return (
    <div className="App">
      <Header />
      <Model3 />
      <ModelY />
      <ModelS />
    </div>
  );
}

export default App;
