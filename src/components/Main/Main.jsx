import React from "react";
import CardLarge from "../CardLarge/CardLarge";
import CardInvoice from "../CardInvoice/CardInvoice";

import CardProject from "../CardProject/CardProject";
import "./Main.scss";
import CardSmall from "../CardSmall/CardSmall";
import ScrollIcon from "../../assets/ScrollIcon.svg";
import Vector from "../../assets/Vector.svg";
import FilterIcon from "../../assets/Filter.svg";

import { cardSmallData, cardInvoiceData } from "../../data/cardData";

function Main(props) {
  return (
    <section className="main__container">
      <div className="main__container__text-box">
        <h1 className="heading">Welcome back, Andrew!</h1>
        <p className="text">Have a look at quick progress bar</p>
      </div>
      <div className="widget__container">
        <CardLarge />
        {cardSmallData.map((data, i) => {
          return <CardSmall key={i} data={data} />;
        })}
      </div>
      <div className="main__container__text-box  main__center">
        <div className="main__center-text-box">
          <h1 className="heading">Current Projects</h1>
          <p className="text">Projects that are currently in progress</p>
        </div>
        <div className="main__center-filter-box">
          <button className="btn-filter">
            <img src={FilterIcon} alt="icon" className="icon-filter" />
            <span className="filter__text">Filter</span>
          </button>
          <div className="icon__box">
            <img src={Vector} alt="icon" className="icon-filter" />
          </div>
        </div>
      </div>
      <div className="project__container">
        <div className="btn-scroll">
          <img src={ScrollIcon} alt="icon" className="scroll__icon" />
        </div>
        <CardProject />
        <CardProject />
        <CardProject />
      </div>
      <div className="main__container__text-box">
        <h1 className="heading">Pending Invoice</h1>
        <p className="text">Invoices that are pending</p>
      </div>
      <div className="invoice__container">
        {cardInvoiceData.map((data, i) => {
          return <CardInvoice key={i} data={data} />;
        })}
      </div>
    </section>
  );
}

export default Main;
