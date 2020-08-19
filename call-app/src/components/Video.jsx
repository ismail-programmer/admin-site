import React, { Component } from 'react'
import videoTest from "../video/t.mp4"
class Video extends Component {
  render () {

    return (
      <div style={{position: `relative`}}>
        <div style={{position: `absolute`,fontSize:`2rem`,zIndex:1000000}}  onClick={this.props.toggleChatbox} >&times;</div>
        <div className="minimize_wrapper" style={{position: `absolute`,right: `15px`}}>
          <div style={{marginTop: `5px`,background: `transparent`,fontSize:`2rem`,zIndex: 1100000}} className="minimize"> <p onClick={()=>this.props.toggleState("welcome")} style={{position: `relative`,zIndex:1000000}}>+</p></div>
        </div>
        <video width="100%" src={videoTest}></video>
        <div className="comments">
          <p> Excepturi quae inventore voluptate!</p>
          <p> Excepturi quae inventore voluptate!</p>
          <p> Excepturi quae inventore voluptate!</p>
          <p> Excepturi quae inventore voluptate!</p>
        </div>
      </div>
    )
  }
}

export default Video