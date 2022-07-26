import React from "react";
import "./CardLarge.scss";
import ProjectLive from "../../assets/ProjectLive.svg";
import cardLarge from "../../assets/cardLarge.svg";

function CardLarge(props) {
  return (
    <div className="card__large">
      <div className="top">
        <div className="left">
          <i className="card-icon fa-solid fa-calendar"></i>
          <img src={ProjectLive} alt="icon" className="card__icon" />
          <span className="card__span">Live Projects</span>
        </div>
        <button className="card__btn">View All</button>
      </div>
      <div className="bottom">
        <h1 className="bottom__heading">56</h1>
        <p className="bottom__text">Currently, the projects is in progress</p>
      </div>
    </div>
  );
}

export default CardLarge;
