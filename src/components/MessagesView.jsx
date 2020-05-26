import React, { Component } from "react";
import "./MessagesView.css";
import messageImg from "./img/message.png";
import dogImg from "./img/no-message.png";

class MessagesView extends Component {
  constructor() {
    super();
    this.state = {
<<<<<<< Updated upstream
      hasMsgs: true,
=======
      hasMsgs: 1,
>>>>>>> Stashed changes
    };
  }

  render() {
    const myId = 17;
    const messages = this.props.msgsList.results;
    this.props.sendMsg("msg");
    return (
      // <!--       <div className="chat-empty">
      //         <div className="rectangle-copy ">
      //           <img src={dogImg} class="no-Message" />

      //           <div className="start-messaging-agen">
      //             Start messaging agents, sellers, or even your friends -->

      <React.Fragment>
        <React.Fragment>
          {!this.state.hasMsgs && (
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
          )}
        </React.Fragment>
        <React.Fragment>
          {this.state.hasMsgs && (
            <div className="chat-full">
              <div className="rectangle-copy ">
                <div className="start-messaging-agen">
                  {messages.map((msg) => {
                    return (
                      <div className={msg.id === myId ? "my-msg" : "their-msg"}>
                        {msg.content}
                      </div>
                    );
                  })}
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
          )}
        </React.Fragment>
      </React.Fragment>
    );
  }
}

export default MessagesView;
