import React, { Component } from 'react'

class AdminChat extends Component {
  state={
    chats: [
      {
        name: "Joe",
        lastMessage: "LAST MESSAGE"
      },
      {
        name: "John",
        lastMessage: "LAST MESSAGE"
      },
      {
        name: "Alex",
        lastMessage: "LAST MESSAGE"
      },
      {
        name: "Jordan",
        lastMessage: "LAST MESSAGE"
      },
      {
        name: "Christian",
        lastMessage: "LAST MESSAGE"
      },
      {
        name: "Alex",
        lastMessage: "LAST MESSAGE"
      },
      {
        name: "Jordan",
        lastMessage: "LAST MESSAGE"
      },
      {
        name: "Christian",
        lastMessage: "LAST MESSAGE"
      },
      {
        name: "Alex",
        lastMessage: "LAST MESSAGE"
      },
      {
        name: "Jordan",
        lastMessage: "LAST MESSAGE"
      },
      {
        name: "Christian",
        lastMessage: "LAST MESSAGE"
      },
      {
        name: "Alex",
        lastMessage: "LAST MESSAGE"
      },
      {
        name: "Jordan",
        lastMessage: "LAST MESSAGE"
      },
      {
        name: "Christian",
        lastMessage: "LAST MESSAGE"
      },
      {
        name: "Bill",
        lastMessage: "LAST MESSAGE"
      }
    ]
  }
  showList = ()=> this.state.chats.map(({name,lastMessage},i)=> <p className="chatList" key={i} onClick={()=> this.props.setPage("inbox")}> <span> {name} </span> {lastMessage} </p>)
  render () {
    return (
      <div>
        <p className="top_head">Lead Invest <span>CALLS</span></p>
        <h5 className="heading_chat">Newnameuser is calling!</h5>
        <div className="chats">
          {this.showList()}
        </div>
      </div>
    )
  }
}

export default AdminChat