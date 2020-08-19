import React, { Component } from "react";

class Messages extends Component {
  showMessages = ()=> this.props.messages.map(({name,message},i)=><p key={i}> <b> {name} </b>: {message} </p>)
  render() {
    return (
      <div className="messages" style={{maxHeight: this.props.maxHeight}}>
        {this.showMessages()}
      </div>
    );
  }
}

export default Messages;
