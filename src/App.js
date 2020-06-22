import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
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
            content: "message hey",
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
            content: "message we are testing",
            timestamp: "2020-03-09T08:08:21.164620-04:00",
          },
        ],
      },
    };
  }

  sendBtn = (newMsg) => {
    let { chats } = this.state;
    let msg = { ...this.state.chats.results[0] };
    msg.content = newMsg;
    msg.id = 17;
    chats.results.push(msg);

    this.setState({ chats });
  };

  goToMsg = () => {
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
      <Router>
            <Switch>
              <div className="container">
                <Route path="/" exact>
                  <div class="main-window">
                    <div className="comp">
                      <ListofPeople pplList={this.state.rooms} goToMsg={this.goToMsg} />
                    </div>
                  </div>
                </Route>
                <Route path="/rooms/:roomId">
                  <div class="main-window">
                    <div className="comp">
                      <ListofPeople pplList={this.state.rooms} goToMsg={this.goToMsg} />
                    </div>
                    <div className="comp">
                    {this.state.showMsgs && (
                      <MessagesView msgsList={this.state.chats} sendBtn={this.sendBtn} />
                        )}
                    </div>
                  </div>
                </Route>
              </div>
            </Switch>
            </Router>
    );
  }
}

export default App;
