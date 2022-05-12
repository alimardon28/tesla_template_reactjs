import React from "react";
import { Link } from 'react-router-dom';
import "../Header/_Header.scss";
import icon from "../../assets/svg/icon.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="container header__container">
        <Link to='/' className="header__link">
          <img src={icon} alt="tesla icon " />
        </Link>
        <nav className="header__navbar">
          <ul className="header__navbar_list header__navbar_Activelist">
            <li className="header__navbar_list_item">
              <Link to='/models' className="header__navbar_list_item_link">
                Model S
              </Link>
            </li>
            <li className="header__navbar_list_item">
              <Link to='/model3' className="header__navbar_list_item_link">
                Model 3
              </Link>
            </li>
            <li className="header__navbar_list_item">
              <Link to='/modelx' className="header__navbar_list_item_link">
                Model X
              </Link>
            </li>
            <li className="header__navbar_list_item">
              <Link to='/modely' className="header__navbar_list_item_link">
                Model Y
              </Link>
            </li>
            <li className="header__navbar_list_item">
              <Link to='/solaroof' className="header__navbar_list_item_link">
                Solar Roof
              </Link>
            </li>
            <li className="header__navbar_list_item">
              <Link to='/solarpanels' className="header__navbar_list_item_link">
                Solar Panels
              </Link>
            </li>
          </ul>
        </nav>
        <ul className="header__list header__ActiveList">
          <li className="header__list_item">
            <button className="header__list_item_button header__list_item_butNone">
              Shop
            </button>
          </li>
          <li className="header__list_item">
            <button className="header__list_item_button header__list_item_butNone">
              Account
            </button>
          </li>
          <li className="header__list_item">
            <button className="header__list_item_button">Menu</button>
          </li>
        </ul>
      </div>
      {/* <div className="header__menuBar">
             <ul className="header__menuBar_lists">
                  <li className="header__menuBar_lists_item"><a href="#" className="header__menuBar_lists_item_link">Existing Inventory</a></li>
                  <li className="header__menuBar_lists_item"><a href="#" className="header__menuBar_lists_item_link">Used Inventory</a></li>
                  <li className="header__menuBar_lists_item"><a href="#" className="header__menuBar_lists_item_link">Trade-In</a></li>
                  <li className="header__menuBar_lists_item"><a href="#" className="header__menuBar_lists_item_link">Test Drive</a></li>
                  <li className="header__menuBar_lists_item"><a href="#" className="header__menuBar_lists_item_link">Insuranse</a></li>
                  <li className="header__menuBar_lists_item"><a href="#" className="header__menuBar_lists_item_link">Cybertruck</a></li>
                  <li className="header__menuBar_lists_item"><a href="#" className="header__menuBar_lists_item_link">Roadster</a></li>
                  <li className="header__menuBar_lists_item"><a href="#" className="header__menuBar_lists_item_link">Semi</a></li>
                  <li className="header__menuBar_lists_item"><a href="#" className="header__menuBar_lists_item_link">Charging</a></li>
                  <li className="header__menuBar_lists_item"><a href="#" className="header__menuBar_lists_item_link">Powerwall</a></li>
                  <li className="header__menuBar_lists_item"><a href="#" className="header__menuBar_lists_item_link">Commercial Energy</a></li>
                  <li className="header__menuBar_lists_item"><a href="#" className="header__menuBar_lists_item_link">Utilities</a></li>
                  <li className="header__menuBar_lists_item"><a href="#" className="header__menuBar_lists_item_link">Find Us</a></li>
                  <li className="header__menuBar_lists_item"><a href="#" className="header__menuBar_lists_item_link">Support</a></li>
                  <li className="header__menuBar_lists_item"><a href="#" className="header__menuBar_lists_item_link">Investor Relations</a></li>
                  <li className="header__menuBar_lists_item"><a href="#" className="header__menuBar_lists_item_link">United States</a></li>
              </ul>
             </div> */}
    </div>
  );
};

export default Header;
