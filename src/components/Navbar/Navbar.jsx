import React from "react";
import "./Navbar.scss";
import searchIcon2 from "../../assets/search-icon2.svg";
import userImage from "../../assets/Ellipse 14.jpg";
import ArrowRight from "../../assets/ArrowRight.svg";

function Navbar(props) {
  return (
    <div className="navbar ">
      <nav className="nav">
        <div className="nav__left">
          <div className="logo-box">
            <h1 className="logo-title">Logo</h1>
            {/* <img src="" alt="logo__image" className="nav__logo-image" /> */}
          </div>
        </div>
        <div className="nav__center">
          <div className="form__container">
            <div className="form">
              <img
                src={searchIcon2}
                alt="search-icon"
                className="form__search-icon"
              />

              <input
                type="text"
                className="form__input"
                placeholder="Search For Projects"
              />
            </div>
          </div>
        </div>
        <div className="nav__right">
          <div className="user">
            <img src={userImage} alt="user__image" className="user__image" />
            <div className="user__info">
              <p className="user__name">Oliver Smith</p>
              <p className="user__work">Vendor</p>
            </div>
          </div>
          <img src={ArrowRight} alt="icon" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
