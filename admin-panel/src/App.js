import React, { useState } from 'react';
import './App.css';
import AdminChat from './components/AdminChat';
import Inbox from './components/Inbox';

function App() {
  const [page,setPage] = useState("chats")
  return (
    <div className="App">
      <div className="chatpopup">
        {
          page === "chats" ? <AdminChat setPage={setPage} /> : page === "inbox" ?  <Inbox /> : ""
        }
      </div>
    </div>
  );
}

export default App;
