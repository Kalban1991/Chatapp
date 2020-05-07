import React, { Component } from 'react';

class MessagesView extends Component {
    render(){
        this.props.sendMsg("msg");
    return (<div>Hi</div>)
    }
}

export default MessagesView