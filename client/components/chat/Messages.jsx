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
  const listOfMessages = props.userMessages.map(user => {
    return (
    <button type="button" class="list-group-item list-group-item-action" value={user} onClick={changeMessenger}>{user}</button>
    )
  })
  console.log(listOfMessages);
  /* TODO */
  // add a method on Home component to append to the userMessages ID when 'send message' button is clicked
  // dynamically add buttons to the messages list for each socketID (these will be passed down as userMessengers prop from Home component)
  // value of each button should be socketID
  // buttons sould setMessenger to socketID
  // pass down currentMessenger to Chat component
  return ( 
    <div className="container msgContainer">
      <div className="row" style={{height: '100vh'}}>
          {/* list of user messages */}
        <div className="col-3 msgList " style={{marginTop: '30vh'}} >

          <div class="list-group-flush">
            {listOfMessages}
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
          {/*  need to make a POST request to create a new chatroom? */}
          <Chat messenger={currentMessenger}/>
        </div>

        {/* closing row + container divs */}
      </div>
    </div>
   );
}
 
export default Messages;