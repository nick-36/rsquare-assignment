import React from "react";
import "./CardProject.scss";
import userImage from "../../assets/Ellipse 14.jpg";
import CalenderIcon from "../../assets/Calender.svg";
import ProgressBar from "../../assets/ProgressBar.svg";

function CardProject(props) {
  return (
    <div className="card__project">
      <h1 className="card__project-heading">Contruction Project</h1>
      <p className="card__project-text">Property Name</p>
      <div className="price__box">
        <span className="price__span">$ 100 - 200</span>
        <div className="date__box">
          <img src={CalenderIcon} alt="icon" className="card__icon" />
          <p className="date__box-text"> Deadline 25-May</p>
        </div>
      </div>
      <div className="progress__bar">
        <img src={ProgressBar} alt="icon" className="progressbar__icon" />

        <p className="progress__bar-label">Progress Bar</p>
      </div>
      <div className="card__project-bottom">
        <div className="vender__info">
          <img src={userImage} alt="user__image" className="user__image" />
          <p>Vender's name</p>
        </div>

        <button className="btn-view">View </button>
      </div>
    </div>
  );
}

export default CardProject;
