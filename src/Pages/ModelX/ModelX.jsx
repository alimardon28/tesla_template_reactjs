import React from "react";
import "../ModelX/_ModelX.scss";

const ModelX = () => {
  return (
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
  );
};

export default ModelX;
