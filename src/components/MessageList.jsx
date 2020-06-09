import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./MessagesView.css";

class MessageList extends Component {
  componentWillUpdate() {
    console.log("will");
    const node = ReactDOM.findDOMNode(this);
    this.shouldScrollToBottom =
      node.scrollTop + node.clientHeight + 100 >= NodeList.scrollHeight;
  }
  componentDidUpdate() {
    console.log("did");
    if (this.shouldScrollToBottom) {
      const node = ReactDOM.findDOMNode(this);
      node.scrollTop = node.scrollHeight;
    }
  }
  render() {
    console.log("render");
    const { myId, avatar, messages } = this.props;
    return (
      <div className="start-messaging-agen">
        {messages.map((msg) => {
          return (
            <React.Fragment>
              <div class="avatar">{msg.id !== myId ? avatar : null}</div>

              <div className={msg.id === myId ? "my-msg" : "their-msg"}>
                {msg.content}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

export default MessageList;
