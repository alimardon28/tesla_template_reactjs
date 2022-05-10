import React from "react";
import "../Model3/_Model3.scss";

const Model3 = () => {
  return (
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
  );
};

export default Model3;
