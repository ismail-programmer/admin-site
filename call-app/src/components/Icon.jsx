import React, { Component } from "react";

class Icon extends Component {
  render() {
    return (
      <div className="icon_wrapper" onClick={this.props.toggleChatbox}>
        Turn on Chat
      </div>
    );
  }
}

export default Icon;
