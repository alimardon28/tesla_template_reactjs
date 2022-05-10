import React from "react";
import "../SolarRoof/_SolarRoof.scss";

const SolarRoof = () => {
  return (
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
  );
};

export default SolarRoof;
