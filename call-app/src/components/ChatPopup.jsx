import React, { Component } from "react";
import Welcome from "./Welcome";
import Chat from "./Chat";
import StartChat from "./StartChat";
import UserChat from "./UserChat";

class ChatPopup extends Component {
  state = {
    page: "welcome",
  };
  toggleState = (page) => this.setState({ page });
  render() {
    const { page } = this.state;
    return (
      <div className="chatpopup">
        {page === "welcome" ? (
          <Welcome {...this.props} toggleState={this.toggleState} />
        ) : page === "chat" ? (
          <UserChat toggleChatbox={this.props.toggleChatbox} toggleState={this.toggleState} />
        ) : page === "start" ? (
          <StartChat {...this.props} toggleState={this.toggleState} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default ChatPopup;
