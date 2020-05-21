import React, { Component } from "react";
import "./MessagesView.css";
import messageImg from "./img/message.png";
import dogImg from "./img/no-message.png";

class MessagesView extends Component {
  render() {
    this.props.sendMsg("msg");
    return (
      <div className="chat-empty">
        <div className="rectangle-copy ">
          <img src={dogImg} class="no-Message" />

          <div className="start-messaging-agen">
            Start messaging agents, sellers, or even your friends
          </div>
          <div className="rectangle">
            <input
              placeholder="Write a message"
              type="text"
              className="write-a-message"
            />

            <img src={messageImg} className="message" />
          </div>
        </div>
      </div>
    );
  }
}

export default MessagesView;
