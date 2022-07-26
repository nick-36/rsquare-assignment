import React from "react";
import "./CardInvoice.scss";
import userImage from "../../assets/Ellipse 14.jpg";
function CardInvoice({ data }) {
  return (
    <div className="card__invoice">
      <h1 className="card__invoice-amount">$137.00</h1>
      <div className="box">
        <p className="box__text">Amount</p>
        <div
          className="box__status"
          style={{ backgroundColor: `${data.bgColor}` }}
        >
          {data.status}
        </div>
      </div>
      <div className="user">
        <img src={userImage} alt="user__image" className="user__image" />
        <div className="info">
          <p className="user__name">Erin Gonzales</p>
          <div className="span__box">
            <span className="user__id">#5331</span>
            <span className="invoice__date">Date: 25 May</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardInvoice;
