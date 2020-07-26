import React, { useState, useEffect, useRef } from "react";
import { NavLink } from 'react-router-dom';
import io from "socket.io-client";
import '../../scss/app.scss';
import Chat from './Chat.jsx'

const Messages = (props) => {
  const [currentMessenger, setMessenger] = useState('');
  function changeMessenger(e) {
    e.preventDefault()
    setMessenger(e.target.value);
  }
  return ( 
    <div className="container msgContainer">
      <div className="row" style={{height: '100vh'}}>
          {/* list of user messages */}
        <div className="col-3 msgList " style={{marginTop: '30vh'}} >

          <div class="list-group-flush">
            <button type="button" class="list-group-item list-group-item-action" value="Catherine" onClick={changeMessenger}>
              Catherine
            </button>
            <button type="button" class="list-group-item list-group-item-action" value="Serena" onClick={changeMessenger}>Serena</button>
            <button type="button" class="list-group-item list-group-item-action" value="John" onClick={changeMessenger}>John</button>
            <button type="button" class="list-group-item list-group-item-action" value="Michelle" onClick={changeMessenger}>Michelle</button>
            <button type="button" class="list-group-item list-group-item-action" value="Erin" onClick={changeMessenger} disabled>Erin</button>
          </div>
          </div>

          {/* chat area */}
        <div className="col-9 chatContainer">
          <Chat messenger={currentMessenger}/>
        </div>

        {/* closing row + container divs */}
      </div>
    </div>
   );
}
 
export default Messages;