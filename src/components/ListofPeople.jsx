import React, { Component } from "react";
import "./list.css";
import userIcon1 from "./img/icons/user-icons/nurseit.png";
import userIcon2 from "./img/icons/user-icons/khach.png";
import userIcon3 from "./img/icons/user-icons/yusuf.jpg";

class ListofPeople extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="header">
          <div className="header-name">Chat</div>
        </div>

        <div className="conversation-list">
          <div className="conversation" onClick={this.props.goToMsg}>
            <img className="icon-img" src={userIcon1} alt="user icon" />
            <div className="title-text">Nurseit Kalbaev</div>
            <div className="created-date">5d ago</div>
            <div className="conversation-message">
              Paid for the order video yesterday when we where talking
            </div>
          </div>
        </div>
        <div className="conversation-list">
          <div className="conversation" onClick={this.props.goToMsg}>
            <img className="icon-img" src={userIcon2} alt="user icon" />
            <div className="title-text">Khachatur Arutyunyan </div>
            <div className="created-date">5d ago</div>
            <div className="conversation-message">Paid for the order video</div>
          </div>
        </div>
        <div className="conversation-list">
          <div className="conversation" onClick={this.props.goToMsg}>
            <img className="icon-img" src={userIcon3} alt="user icon" />
            <div className="title-text">Yusuf Ates </div>
            <div className="created-date">5d ago</div>
            <div className="conversation-message">Paid for the order video</div>
          </div>
        </div>
      </div> // closing end
    );
  }
}

export default ListofPeople;
