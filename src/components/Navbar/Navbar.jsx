import React, { useState, useEffect} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu  } from "react-icons/md";

import images from "../../constants/images";
import "./Navbar.css";
import LoginForm from "../Login/Login";
import RegistrationForm from "../Registration/Registration";
import BookingForm from "../Booking/Booking";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [loginModalVisible, setLoginModalVisible] = useState(false); // State for login modal visibility
  const [registrationModalVisible, setRegistrationModalVisible] = useState(false); // State for registration modal visibility
  const [bookingModalVisible, setBookingModalVisible] = useState(false); // State for booking modal visibility

  // Function to toggle login modal visibility
  const toggleLoginModal = () => {
    setLoginModalVisible(!loginModalVisible);
  };

    // Function to toggle registration modal visibility
    const toggleRegistrationModal = () => {
      setRegistrationModalVisible(!registrationModalVisible);
    };

   // Function to toggle booking modal visibility
   const toggleBookingModal = () => {
    setBookingModalVisible(!bookingModalVisible);
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        <li className="p__opensans"><a href="#awards">Awards</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
      </ul>
      <div className="app__navbar-login">
        <a className="p__opensans" onClick={toggleLoginModal}>Log In </a>
        <a className="p__opensans" onClick={toggleRegistrationModal}>Registration </a>
        <div />
        <a className="p__opensans" onClick={toggleBookingModal}>Book Table</a>
      </div>
      {loginModalVisible && (
        <LoginForm visible={loginModalVisible} onCancel={toggleLoginModal} />
      )}
      {registrationModalVisible && (
        <RegistrationForm visible={registrationModalVisible} onCancel={toggleRegistrationModal} />
      )}
      {bookingModalVisible && (
        <BookingForm visible={bookingModalVisible} onCancel={toggleBookingModal} />
      )}
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
              <li><a onClick={toggleLoginModal}>Login</a></li>
              <li><a onClick={toggleRegistrationModal}>Registration</a></li>
              <li><a onClick={toggleBookingModal}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
