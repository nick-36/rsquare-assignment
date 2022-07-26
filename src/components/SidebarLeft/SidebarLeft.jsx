import React from "react";
import "./SidebarLeft.scss";
import DashboardIcon from "../../assets/dashboard.svg";
import ProjectIcon from "../../assets/Project.svg";
import CalenderIcon from "../../assets/Calender.svg";
import MessageIcon from "../../assets/Message.svg";
import NotificationIcon from "../../assets/Notification.svg";
import CallbackIcon from "../../assets/Callback.svg";
import PromotionIcon from "../../assets/Promotion.svg";

function Sidebar(props) {
  return (
    <div className="sidebar__container">
      <div className="sidebar">
        <div className="sidebar__box sidebar__box--1">
          <ul className="list__items">
            <li className="list__item active">
              <img
                src={DashboardIcon}
                alt="dashboard_icon"
                className="sidebar__icon"
              />
              <span className="list__item-text">Dashboard</span>
            </li>
            <li className="list__item">
              <img
                src={ProjectIcon}
                alt="project__icon"
                className="sidebar__icon"
              />

              <span className="list__item-text">Project</span>
            </li>
            <li className="list__item">
              <img
                src={CalenderIcon}
                alt="calender__icon"
                className="sidebar__icon"
              />
              <span className="list__item-text">Calender</span>
            </li>
            <li className="list__item">
              <img
                src={MessageIcon}
                alt="message__icon"
                className="sidebar__icon"
              />
              <span className="list__item-text">Messages</span>
            </li>
            <li className="list__item">
              <img
                src={NotificationIcon}
                alt="notification__icon"
                className="sidebar__icon"
              />
              <span className="list__item-text">Notifications</span>
            </li>
            <li className="list__item">
              <img
                src={CallbackIcon}
                alt="callback__icon"
                className="sidebar__icon"
              />

              <span className="list__item-text">Contacts</span>
            </li>
          </ul>
        </div>
        <div className="sidebar__box sidebar__box--2">
          <h1 className="title list__item">Promotions</h1>

          <ul className="list__items">
            <li className="list__item">
              <img
                src={PromotionIcon}
                alt="promotion__icon"
                className="sidebar__icon"
              />

              <span className="list__item-text">Promotions</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
