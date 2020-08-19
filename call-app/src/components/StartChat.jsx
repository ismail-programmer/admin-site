import React, { Component } from "react";
import Messages from "./Messages";
import Popup from "./Popup";

class StartChat extends Component {
  state={
    popup: false,
    message: "",
  }
  togglePopup = (message)=>{
    this.setState({popup: !this.state.popup,message})
  }
  render() {
    const messages = [
      {name: "John Doe",message: "welcome to the site what are you looking for"}
    ]

    const { name, src, toggleChatbox, toggleState } = this.props;
    return (
      <div>
        <div className="welcome_popup" style={{marginTop: `30px`}}>
          <div className="minimize_wrapper">
            <div className="minimize" onClick={toggleChatbox}></div>
          </div>
          <p>{name} is waiting for you Video Call him</p>
          <div className="img_wrapper" >
            <img className="person_img" style={{width: `50%`}} src={src} alt="Random" />
          </div>
          <p style={{fontSize: `14px`}}>Deed agreed invented a new way to communicate online, making video, audio & text chat available on our website.Get the most out of your visit to Deed Agreed by chatting with rep</p>
          <div className="buttons" style={{justifyContent: `center` }}>
          <button
              style={{ backgroundColor: `#00800030`, ["--color"]: `#008000`,width: `40%` }}
              className="button_msgs"
              onClick={()=>this.togglePopup(<p>Sorry, all representative are busy on other calls.<br/> Try sending text message.</p>)}
            >
              Video Call
            </button>
            <button
              style={{ backgroundColor: `#f00f0030`, ["--color"]: `#f00`,width: `40%` }}
              className="button_msgs"
              onClick={()=>{
                this.togglePopup(<p>Please wait for the representative to answer call <br/> <span style={{display: `block`, textAlign: `center`}}>00:30</span></p>)
              }}
            >
              Audio call
            </button>
          </div>
          {this.state.popup ? <Popup togglePopup={this.togglePopup} message={this.state.message} /> : ""}
          <div className="chat_container" style={{marginTop: `10px`}} >
            <Messages messages={messages} />
            <form action="/" onSubmit={(e)=>{
              e.preventDefault();
              toggleState("chat")
            }}>
              <input style={{marginTop: `10px`}} type="text" className="send_input" name="name" placeholder="Enter Your Name" />
              <button className="send_btn">
                <svg version="1.1" id="Icons" fill="transparent" stroke="#00f" strokeWidth="2px" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20" height="20" x="0px" y="0px" viewBox="0 0 32 32" style={{enableBackground:"new 0 0 32 32"}} xmlSpace="preserve">
                  <path d="M29.3,2.6c-0.3-0.2-0.7-0.3-1-0.2L3,11.7c-0.4,0.1-0.7,0.5-0.7,0.9c0,0.4,0.3,0.8,0.7,0.9l10.2,3.8l10-10
                    c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-9.8,9.8l6.6,10.6c0.2,0.3,0.5,0.5,0.8,0.5c0.1,0,0.1,0,0.2,0c0.4-0.1,0.7-0.4,0.8-0.7l6.2-25.2
                    C29.7,3.3,29.6,2.9,29.3,2.6z"/>
                </svg>
                </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default StartChat;
