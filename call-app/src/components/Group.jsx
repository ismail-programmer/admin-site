import React, { Component } from "react";
import Messages from "./Messages";

class Group extends Component {
  state = {
    messages: [
      {
        name: "John Doe",
        message: "welcome to the site what are you looking for",
      },
      {
        name: "John Doe",
        message: "welcome to the site what are you looking for",
      },
      {
        name: "John Doe",
        message: "welcome to the site what are you looking for",
      },
      {
        name: "John Doe",
        message: "welcome to the site what are you looking for",
      },
      {
        name: "John Doe",
        message: "welcome to the site what are you looking for",
      },
      {
        name: "John Doe",
        message: "welcome to the site what are you looking for",
      },
      {
        name: "John Doe",
        message: "welcome to the site what are you looking for",
      },
      {
        name: "John Doe",
        message: "welcome to the site what are you looking for",
      },
      {
        name: "John Doe",
        message: "welcome to the site what are you looking for",
      },
      {
        name: "John Doe",
        message: "welcome to the site what are you looking for",
      },
      {
        name: "John Doe",
        message: "welcome to the site what are you looking for",
      },
      {
        name: "John Doe",
        message: "welcome to the site what are you looking for",
      },
      {
        name: "John Doe",
        message: "welcome to the site what are you looking for",
      },
      {
        name: "John Doe",
        message: "welcome to the site what are you looking for",
      },
      {
        name: "John Doe",
        message: "welcome to the site what are you looking for",
      },
      {
        name: "John Doe",
        message: "welcome to the site what are you looking for",
      },
      {
        name: "John Doe",
        message: "welcome to the site what are you looking for",
      },
      {
        name: "John Doe",
        message: "welcome to the site what are you looking for",
      },
      {
        name: "John Doe",
        message: "welcome to the site what are you looking for",
      },
      {
        name: "John Doe",
        message: "welcome to the site what are you looking for",
      },
      {
        name: "John Doe",
        message: "welcome to the site what are you looking for",
      },
      {
        name: "John Doe",
        message: "welcome to the site what are you looking for",
      },
      {
        name: "John Doe",
        message: "welcome to the site what are you looking for",
      },
      {
        name: "John Doe",
        message: "welcome to the site what are you looking for",
      },
      {
        name: "John Doe",
        message: "welcome to the site what are you looking for",
      },
      {
        name: "John Doe",
        message: "welcome to the site what are you looking for",
      },
      {
        name: "John Doe",
        message: "welcome to the site what are you looking for",
      },
      {
        name: "John Doe",
        message: "welcome to the site what are you looking for",
      },
      {
        name: "John Doe",
        message: "welcome to the site what are you looking for",
      },
      {
        name: "John Doe",
        message: "welcome to the site what are you looking for",
      },
      {
        name: "John Doe",
        message: "welcome to the site what are you looking for",
      },
      {
        name: "John Doe",
        message: "welcome to the site what are you looking for",
      },
      {
        name: "John Doe",
        message: "welcome to the site what are you looking for",
      },
      {
        name: "John Doe",
        message: "welcome to the site what are you looking for",
      },
      {
        name: "John Doe",
        message: "welcome to the site what are you looking for",
      },
      {
        name: "John Doe",
        message: "welcome to the site what are you looking for",
      }
    ]
  };
  render() {
    const { messages } = this.state
    return (
      <div>
        <div className="minimize_wrapper">
          <div className="minimize" onClick={this.props.toggleChatbox}></div>
        </div>
        <div className="welcome_popup">
        <div className="buttons">
          <button
            style={{
              backgroundColor: `#00000030`,
              ["--color"]: `#000`,
              width: `23%`,
            }}
            className="button_msgs"
          >
            Turn off Popup
          </button>
          <button
            style={{
              backgroundColor: `#00800030`,
              ["--color"]: `#008000`,
              width: `23%`,
            }}
            className="button_msgs"
          >
            Video Call
          </button>
          <button
            style={{
              backgroundColor: `#f00f0030`,
              ["--color"]: `#f00`,
              width: `23%`,
            }}
            className="button_msgs"
          >
            Audio Call
          </button>
        </div>
        <p style={{marginTop: `10px`}}>Boovea does it all from solar teach to excercise tips.there is an article for you!</p>
            <div className="messages_container">
              <Messages maxHeight="300px" messages={messages} />
              <form
              action="/"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                style={{ marginTop: `10px` }}
                type="text"
                className="send_input"
                name="name"
                placeholder="Enter Your Name"
              />
              <button className="send_btn">
                <svg
                  version="1.1"
                  id="Icons"
                  fill="transparent"
                  stroke="#00f"
                  strokeWidth="2px"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="20"
                  height="20"
                  x="0px"
                  y="0px"
                  viewBox="0 0 32 32"
                  style={{ enableBackground: "new 0 0 32 32" }}
                  xmlSpace="preserve"
                >
                  <path
                    d="M29.3,2.6c-0.3-0.2-0.7-0.3-1-0.2L3,11.7c-0.4,0.1-0.7,0.5-0.7,0.9c0,0.4,0.3,0.8,0.7,0.9l10.2,3.8l10-10
                    c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-9.8,9.8l6.6,10.6c0.2,0.3,0.5,0.5,0.8,0.5c0.1,0,0.1,0,0.2,0c0.4-0.1,0.7-0.4,0.8-0.7l6.2-25.2
                    C29.7,3.3,29.6,2.9,29.3,2.6z"
                  />
                </svg>
              </button>
            </form>
            </div>
            </div>
      </div>
    );
  }
}

export default Group;
