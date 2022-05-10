import React from "react";
import "../ModelS/_ModelS.scss";

const ModelS = () => {
  return (
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
  );
};

export default ModelS;
