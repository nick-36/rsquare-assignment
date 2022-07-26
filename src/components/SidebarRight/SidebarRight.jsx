import React from "react";
import "./SidebarRight.scss";
import vector from "../../assets/Vector.svg";
import userImage from "../../assets/Ellipse 14.jpg";
import activeIcon from "../../assets/Ellipse 10.svg";
import InviteIcon from "../../assets/Invite.svg";
import ArrowDownIcon from "../../assets/ArrowDown.svg";
import ArrowUpIcon from "../../assets/ArrowUp.svg";

function SidebarRight(props) {
  return (
    <div className="sidebar__right">
      <div className="sidebar__right-top">
        <div className="sidebar__right-heading">
          <h1 className="heading-top">Upcoming Meeting</h1>
          <img src={ArrowDownIcon} alt="icon" className="icon" />
        </div>
        <hr className="line" />
        <div className="sidebar__right-center">
          <div className="heading-box">
            <h1 className="heading-tertiary">Today's Meeting</h1>
            <img src={vector} alt="icon" className="icon" />
          </div>
          <div className="center__main">
            <div className="message__box">
              <p className="text">30 minute call with clients</p>
              <img src={vector} alt="icon" className="icon" />
            </div>

            <h2 className="heading__secondary">Project Dicovery Call</h2>
            <div className="span__box">
              <span className="due__text">Due soon</span>
              <span className="due__time">09:20 AM</span>
            </div>
            <div className="invite__box">
              <div className="people">
                <img
                  src={userImage}
                  alt="user__image"
                  className="user__image"
                />
                <img
                  src={userImage}
                  alt="user__image"
                  className="user__image"
                />
                <img
                  src={userImage}
                  alt="user__image"
                  className="user__image"
                />
                <img
                  src={userImage}
                  alt="user__image"
                  className="user__image"
                />
              </div>
              <button className="btn-invite">
                <a href="/">
                  <img src={InviteIcon} alt="icon" />
                </a>
              </button>
            </div>
          </div>
          <div className="center__main">
            <div className="message__box">
              <p className="text">30 minute call with clients</p>
              <img src={vector} alt="icon" className="icon" />
            </div>

            <h2 className="heading__secondary">Project Dicovery Call</h2>
            <div className="span__box">
              <span className="due__text">Due soon</span>
              <span className="due__time">09:20 AM</span>
            </div>
            <div className="invite__box">
              <div className="people">
                <img
                  src={userImage}
                  alt="user__image"
                  className="user__image"
                />
                <img
                  src={userImage}
                  alt="user__image"
                  className="user__image"
                />
                <img
                  src={userImage}
                  alt="user__image"
                  className="user__image"
                />
                <img
                  src={userImage}
                  alt="user__image"
                  className="user__image"
                />
              </div>
              <button className="btn-invite">
                <a href="/">
                  <img src={InviteIcon} alt="icon" />
                </a>
              </button>
            </div>
          </div>
          <div className="heading-box">
            <h1 className="heading-tertiary">Scheudle Meeting</h1>
            <img src={ArrowUpIcon} alt="icon" className="icon" />
          </div>
          <hr className="line" />
        </div>
      </div>
      <div className="sidebar__right-bottom">
        <div className="sidebar__right-heading">
          <h1 className="heading-top">Recent Meetings</h1>
          <img src={vector} alt="icon" className="icon" />
        </div>

        <div className="recent__activity">
          <div className="activity__box">
            <div className="icon__active">
              <img src={activeIcon} alt="icon__active" />
            </div>
            <p className="activity__box-heading">
              Thank you for booking a meeting with JJ.
            </p>
            <div className="info">
              <p className="activity__box-sub-heading">Kevin Dukkon</p>
              <p className="activity__box-text">Jun 14, 2021 at 5.31PM</p>
            </div>
          </div>
          <div className="image__box">
            <img src={userImage} alt="user__image" className="user__image" />
          </div>
        </div>
        <hr className="line" />

        <div className="recent__activity">
          <div className="activity__box">
            <div className="icon__active">
              <img src={activeIcon} alt="icon__active" />
            </div>
            <p className="activity__box-heading">
              Thank you for booking a meeting with JJ.
            </p>
            <div className="info">
              <p className="activity__box-sub-heading">Kevin Dukkon</p>
              <p className="activity__box-text">Jun 14, 2021 at 5.31PM</p>
            </div>
          </div>
          <div className="image__box">
            <img src={userImage} alt="user__image" className="user__image" />
          </div>
        </div>
        <hr className="line" />

        <div className="recent__activity">
          <div className="activity__box">
            <div className="icon__active">
              <img src={activeIcon} alt="icon__active" />
            </div>
            <p className="activity__box-heading">
              Thank you for booking a meeting with JJ.
            </p>
            <div className="info">
              <p className="activity__box-sub-heading">Kevin Dukkon</p>
              <p className="activity__box-text">Jun 14, 2021 at 5.31PM</p>
            </div>
          </div>
          <div className="image__box">
            <img src={userImage} alt="user__image" className="user__image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarRight;
