import React, { Component } from "react";
import "./list.css";

class ListofPeople extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="header">
          <div className="header-name">Chat</div>
        </div>

        <div className="conversation-list">
          <div className="conversation">
            <img
              className="icon-img"
              src="https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/20617174_1445345532200406_2550975261066097040_o.jpg?_nc_cat=102&_nc_sid=85a577&_nc_ohc=Ad2KrZ0ZKg4AX8xUV45&_nc_ht=scontent-sea1-1.xx&oh=29a6b29d21093ff7c90ad2d5e9d5a3c7&oe=5EE2F66F"
              alt="user icon"
            />
            <div className="title-text">
              Nurseit Kalbaev Mamanazir Orozbaevich
            </div>
            <div className="created-date">5d ago</div>
            <div className="conversation-message">
              Paid for the order video yesterday when we where
            </div>
          </div>
        </div>
        <div className="conversation-list">
          <div className="conversation">
            <img
              className="icon-img"
              src="https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/20617174_1445345532200406_2550975261066097040_o.jpg?_nc_cat=102&_nc_sid=85a577&_nc_ohc=Ad2KrZ0ZKg4AX8xUV45&_nc_ht=scontent-sea1-1.xx&oh=29a6b29d21093ff7c90ad2d5e9d5a3c7&oe=5EE2F66F"
              alt="user icon"
            />
            <div className="title-text">Nurseit Kalbaev </div>
            <div className="created-date">5d ago</div>
            <div className="conversation-message">Paid for the order video</div>
          </div>
        </div>
        <div className="conversation-list">
          <div className="conversation">
            <img
              className="icon-img"
              src="https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/20617174_1445345532200406_2550975261066097040_o.jpg?_nc_cat=102&_nc_sid=85a577&_nc_ohc=Ad2KrZ0ZKg4AX8xUV45&_nc_ht=scontent-sea1-1.xx&oh=29a6b29d21093ff7c90ad2d5e9d5a3c7&oe=5EE2F66F"
              alt="user icon"
            />
            <div className="title-text">Nurseit </div>
            <div className="created-date">5d ago</div>
            <div className="conversation-message">Paid for the order video</div>
          </div>
        </div>
      </div> // closing end
    );
  }
}

export default ListofPeople;
