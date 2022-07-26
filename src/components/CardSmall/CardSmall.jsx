import React from "react";
import "./CardSmall.scss";
import ProjectPending from "../../assets/ProjectPending.svg";
import ProjectComplete from "../../assets/ProjectComplete.svg";
function CardSmall({ data }) {
  return (
    <div className={`card  ${data.isCompleted ? "bg__purple" : "bg__blue"}`}>
      <div className="box__top">
        <img
          src={data.isCompleted ? ProjectComplete : ProjectPending}
          alt="icon"
          className="box__top-icon"
        />
        <p className="status__box-text">{data.status}</p>
      </div>
      <div className="box__bottom">
        <h1 className="heading">{data.nProjects}</h1>
        <p className="text">{data.text}</p>
      </div>
    </div>
  );
}

export default CardSmall;
