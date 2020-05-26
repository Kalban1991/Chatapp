import React, { Component } from "react";
import ListofPeople from "./components/ListofPeople";
import MessagesView from "./components/MessagesView";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showMsgs: false,
      rooms: [
        {
          id: 1,
          participant: {
            first_name: "",
            last_name: "",
            username: "",
            type: "client",
            is_verified: false,
          },
        },
        {
          id: 1,
          participant: {
            first_name: "",
            last_name: "",
            username: "",
            type: "client",
            is_verified: false,
          },
        },
      ],

      chats: {
        count: 22,
        next: "http://127.0.0.1:8000/api/v1/chats/1/messages/?page=2",
        previous: null,
        results: [
          {
            id: 18,
            author: {
              first_name: "",
              last_name: "",
              email: "aibek.raiymbekov01@gmail.com",
              phone: null,
              username: "",
              type: "client",
              is_verified: false,
              objects: [],
            },
            content: "message",
            timestamp: "2020-03-09T08:08:21.380493-04:00",
          },
          {
            id: 12,
            author: {
              first_name: "",
              last_name: "",
              email: "aibek.raiymbekov01@gmail.com",
              phone: null,
              username: "",
              type: "client",
              is_verified: false,
              objects: [],
            },
            content: "m2",
            timestamp: "2020-03-09T08:08:21.380493-04:00",
          },
          {
            id: 17,
            author: {
              first_name: "",
              last_name: "",
              email: "aibek.raiymbekov01@gmail.com",
              phone: null,
              username: "",
              type: "client",
              is_verified: false,
              objects: [],
            },
            content: "message",
            timestamp: "2020-03-09T08:08:21.164620-04:00",
          },
        ],
      },
    };
  }

  sendMessage(message) {
    console.log(message + " sent");
  }

  goBack() {
    console.log("back");
  }

  goToMsg = () => {
    console.log("show msgs true");
    this.setState({ showMsgs: true });
  };

  getApiData = () => {
    fetch(
      "https://www.yurtah.com/api/v1/chats/1/messages/?page=1&token=QUvLofAGq0bwtiKDPUaGWWHfnF4"
    )
      .then((json) => json.json())
      .then((people) => this.setState({ people }));
  };

  getApiDataR = () => {
    fetch(
      "https://www.yurtah.com/api/v1/chats/1/messages/?page=1&token=QUvLofAGq0bwtiKDPUaGWWHfnF4"
    )
      .then((json) => json.json())
      .then((people) => this.setState({ people }));
    console.log(this.state.people);
  };

  componentDidMount() {
    this.getApiData();
  }

  render() {
    return (
      <div class="main-window">
        <div className="comp">
          <ListofPeople pplList={this.state.rooms} goToMsg={this.goToMsg} />
        </div>
        <div className="comp">
          {this.state.showMsgs && (
            <MessagesView
              msgsList={this.state.chats}
              sendMsg={this.sendMessage}
              goBack={this.goBack}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
