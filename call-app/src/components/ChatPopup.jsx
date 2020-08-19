import React, { Component } from "react";
import Welcome from "./Welcome";
import Chat from "./Chat";
import StartChat from "./StartChat";
import UserChat from "./UserChat";
import Video from "./Video";
import Inbox from "./Inbox";
import Group from "./Group";

class ChatPopup extends Component {
  state = {
    page: "inbox",
  };
  toggleState = (page) => this.setState({ page });
  render() {
    const { page } = this.state;
    return (
      <div className="chatpopup" style={{height: this.state.page === "video" ? "100%" : ""}}>
        {page === "welcome" ? (
          <Welcome {...this.props} toggleState={this.toggleState} />
        ) : page === "chat" ? (
          <UserChat toggleChatbox={this.props.toggleChatbox} toggleState={this.toggleState} />
        ) : page === "start" ? (
          <StartChat {...this.props} toggleState={this.toggleState} />
        ) : (
          page === "video" ? (
            <Video {...this.props} toggleState={this.toggleState} />
          ) : page === "inbox" ? (
            <Inbox {...this.props} toggleState={this.toggleState} />
          ) : page === "group" ? (
            <Group {...this.props} toggleState={this.toggleState} />
          ) : ""
        )
        }
      </div>
    );
  }
}

export default ChatPopup;
