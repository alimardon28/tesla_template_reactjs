import React from "react";
import "../SolarPanels/_SolarPanels.scss";

const SolarPanels = () => {
  return (
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
  );
};

export default SolarPanels;
