import React, { Component } from 'react'

class Popup extends Component {
  render () {
    return (
      <div className="popup_outer">
        <div className="close_icon" onClick={this.props.togglePopup}>
        &times;
        </div>
        <div className="popup_inner">
          {this.props.message}
        </div>
      </div>
    )
  }
}

export default Popup