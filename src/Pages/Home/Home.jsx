import React from "react";
import "../Home/_Home.scss";
import '../Model3/_Model3.scss';
import "../ModelX/_ModelX.scss";
import '../Home/_modely.scss';
import '../Home/_model3.scss';
import '../Home/_models.scss';
import '../Home/_modelx.scss';
import '../Home/_solarpanels.scss';
import '../Home/_solarroof.scss';
import '../Home/_accessories.scss';


const Home = () => {
  return (
    <div className="home">
      <div className="model3">
        <div className="container model3__container">
          <h1 className="model3__heading">Model 3</h1>
          <p className="model3__desc">
            {" "}
            Order Online for{" "}
            <a href="#" className="model3__link">
              Touchless Delivery
            </a>
          </p>
          <div className="model3__buttons">
            <button className="model3__buttons_btn">CUSTOM ORDER</button>
            <button className="model3__buttons_btn">EXISTING INVENTORY</button>
          </div>
        </div>
      </div>
      <div className="modely">
      <div className="container models__container">
        <h1 className="modely__heading">Model Y</h1>
        <p className="modely__desc">
          {" "}
          Order Online for{" "}
          <a href="#" className="modely__link">
            Touchless Delivery
          </a>
        </p>
        <div className="modely__buttons">
          <button className="modely__buttons_btn">CUSTOM ORDER</button>
          <button className="modely__buttons_btn">EXISTING INVENTORY</button>
        </div>
      </div>
    </div>
    <div className="models">
      <div className="container models__container">
        <h1 className="models__heading">Model S</h1>
        <p className="models__desc">
          {" "}
          Order Online for{" "}
          <a href="#" className="models__link">
            Touchless Delivery
          </a>
        </p>
        <div className="models__buttons">
          <button className="models__buttons_btn">CUSTOM ORDER</button>
          <button className="models__buttons_btn">EXISTING INVENTORY</button>
        </div>
      </div>
    </div>
    <div className="modelx">
      <div className="container modelx__container">
        <h1 className="modelx__heading">Model X</h1>
        <p className="modelx__desc">
          {" "}
          Order Online for{" "}
          <a href="#" className="modelx__link">
            Touchless Delivery
          </a>
        </p>
        <div className="modelx__buttons">
          <button className="modelx__buttons_btn">CUSTOM ORDER</button>
          <button className="modelx__buttons_btn">EXISTING INVENTORY</button>
        </div>
      </div>
    </div>
    <div className="solarPanels">
      <div className="container solarPanels__container">
        <h1 className="solarPanels__heading">Solar Panels</h1>
        <p className="solarPanels__desc">
          {" "}
          Lowest Cost Solar Panels in America{" "}
        </p>
        <div className="solarPanels__buttons">
          <button className="solarPanels__buttons_btn">ORDER NOW</button>
          <button className="solarPanels__buttons_btn">LEARN MORE</button>
        </div>
      </div>
    </div>
    <div className="solarRoof">
      <div className="container solarRoof__container">
        <h1 className="solarRoof__heading">Solar Roof</h1>
        <p className="solarRoof__desc"> Produce Clean Energy From Your Roof </p>
        <div className="solarRoof__buttons">
          <button className="solarRoof__buttons_btn">ORDER NOW</button>
          <button className="solarRoof__buttons_btn">LEARN MORE</button>
        </div>
      </div>
    </div>
    <div className="accessories">
      <div className="container accessories__container">
        <h1 className="accessories__heading">Accessories</h1>
        <div className="accessories__buttons">
          <button className="accessories__buttons_btn">SHOP NOW</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
