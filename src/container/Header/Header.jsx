import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Experience unique flavours" />
      <h1 className="app__header-h1">Secret to Exceptional Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Welcome to our exquisite restaurant, where culinary artistry meets a
        cozy ambiance. Join us for a gastronomic journey that will delight your
        taste buds and leave you with unforgettable dining memories.
      </p>
      <a href="#menu" className="custom__button">
        Explore Menu
      </a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
