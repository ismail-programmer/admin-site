import React, { Component } from "react";
import Messages from "./Messages";

class UserChat extends Component {
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
    ],
  };
  render() {
    const { messages } = this.state;
    const { toggleChatbox, toggleState } = this.props;
    return (
      <div>
        <div className="welcome_popup">
          <div>
            <div className="minimize_wrapper">
              <div className="minimize" onClick={toggleChatbox}></div>
            </div>
            <div className="buttons" style={{ justifyContent: `center` }}>
              <button
                style={{ backgroundColor: `#00800030`, ["--color"]: `#008000` }}
                className="button_msgs"
              >
                Video Call
              </button>
              <button
                style={{ backgroundColor: `#f00f0030`, ["--color"]: `#f00` }}
                className="button_msgs"
              >
                Audio call
              </button>
              <button className="switch">
                <video
                  autoPlay={true}
                  muted={true}
                  src="https://downloadstatus.xyz/latest/Love-me-like-you-do-heart-eyes-Whatsapp-status.mp4"
                  width="100%"
                  height="100%"
                ></video>
              </button>
              <button className="switch">
                <svg
                  id="Capa_1"
                  enableBackground="new 0 0 551.13 551.13"
                  height="30"
                  viewBox="0 0 551.13 551.13"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m68.891 275.565c0-102.134 74.738-186.382 172.228-202.94v30.712l68.891-51.668-68.89-51.669v37.235c-116.654 16.805-206.674 117.119-206.674 238.33 0 87.119 46.608 163.375 116.048 205.749l29.947-22.46c-66.186-34.49-111.549-103.631-111.55-183.289z" />
                  <path d="m516.685 275.565c0-87.119-46.608-163.375-116.048-205.749l-29.947 22.46c66.186 34.49 111.549 103.631 111.549 183.289 0 102.162-74.7 186.655-172.228 203.175v-30.949l-68.891 51.668 68.891 51.671v-37.26c116.645-16.807 206.673-117.095 206.674-238.305z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="center_container">
            <p>Boovea does it all from solar teach to excercise tips.there is an article for you!</p>
            <div className="svg_con">
              <svg
                version="1.1"
                width={40}
                height={40}
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style={{ enableBackground: `new 0 0 512 512` }}
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M498.846,397.887l-84.833-84.832c-17.581-17.582-46.039-17.585-63.623,0l-21.209,21.209
			c-17.544,17.542-46.084,17.54-63.694-0.07l-88.822-87.646c-17.542-17.542-17.542-46.082,0-63.624l21.208-21.208
			c17.542-17.541,17.542-46.082,0-63.624L113.042,13.26C95.5-4.282,66.957-4.28,49.418,13.26L28.212,34.468
			C0.684,61.995-7.412,122.687,7.083,192.857c9.238,44.721,35.815,130.824,110.02,205.029
			c74.055,74.056,159.46,99.471,203.777,108.029c48.713,9.407,121.92,11.639,156.757-23.196l21.21-21.209
			C516.385,443.969,516.385,415.428,498.846,397.887z M70.628,34.468c5.848-5.847,15.36-5.848,21.209,0l84.832,84.832
			c5.848,5.848,5.848,15.361,0,21.209l-10.551,10.551L60.076,45.02L70.628,34.468z M326.568,476.467
			c-40.948-7.907-119.855-31.386-188.257-99.788C69.631,307.997,45.016,228.227,36.456,186.79
			c-11.339-54.888-6.618-96.147,4.392-118.583l105.117,105.118c-19.291,29.105-16.121,68.817,9.564,94.501l88.822,87.646
			c25.611,25.611,65.3,28.8,94.43,9.494l105.202,105.203C411.925,486.426,362.07,483.322,326.568,476.467z M477.638,440.302
			l-10.552,10.552L361.046,344.815l10.551-10.551c5.86-5.861,15.346-5.861,21.208,0l84.832,84.832
			C483.484,424.942,483.484,434.456,477.638,440.302z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M287.033,0.115c-8.282,0-14.996,6.714-14.996,14.996s6.714,14.996,14.996,14.996
			c107.496,0,194.951,87.455,194.951,194.951c0,8.282,6.714,14.996,14.996,14.996c8.282,0,14.996-6.714,14.996-14.996
			C511.976,101.024,411.067,0.115,287.033,0.115z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M287.033,60.1c-8.282,0-14.996,6.714-14.996,14.996s6.714,14.996,14.996,14.996c74.42,0,134.966,60.546,134.966,134.966
			c0,8.282,6.714,14.996,14.996,14.996s14.996-6.714,14.996-14.996C451.991,134.1,377.991,60.1,287.033,60.1z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M287.033,120.085c-8.282,0-14.996,6.714-14.996,14.996c0,8.282,6.714,14.996,14.996,14.996
			c41.345,0,74.981,33.636,74.981,74.981c0,8.282,6.714,14.996,14.996,14.996s14.996-6.714,14.996-14.996
			C392.007,167.176,344.915,120.085,287.033,120.085z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M287.033,180.07c-8.282,0-14.996,6.714-14.996,14.996s6.714,14.996,14.996,14.996c8.269,0,14.996,6.727,14.996,14.996
			c0,8.282,6.714,14.996,14.996,14.996c8.282,0,14.996-6.714,14.996-14.996C332.022,200.251,311.84,180.07,287.033,180.07z"
                    />
                  </g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
            </div>
          </div>
          <div className="chat_container">
            <Messages maxHeight="200px" messages={messages} />
            <form
              action="/"
              onSubmit={(e) => {
                e.preventDefault();
                toggleState("chat");
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

export default UserChat;
