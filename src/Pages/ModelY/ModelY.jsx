import React from 'react';
import '../ModelY/_ModelY.scss';

const ModelY = () => {
    return (
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
    );
}

export default ModelY;
