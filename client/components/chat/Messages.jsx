import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import io from "socket.io-client";
import '../../scss/app.scss';
import Chat from './Chat.jsx'

const Messages = (props) => {
  const [currentRoom, setRoom] = useState('defaultRoom');
  

  function changeRoom(e) { // move this to App????????
    // e.preventDefault()
    setRoom(e.target.value);
    // window.location.reload(false);
    // this method should also make a POST request to the server
  }


  const listOfRooms = props.msgRooms.map(user => {
    return (
    <button type="button" class="list-group-item list-group-item-action" value={user} onClick={changeRoom} style={{height: '6vh'}}>{user}</button>
    )
  })
  console.log(listOfRooms);

  return ( 
    <div className="container msgContainer mx-10vh">
      <div className="row" style={{height: '100vh', width: '100vh'}}>
          {/* list of user messages */}
        <div className="col-3 msgList " style={{marginTop: '30vh', fontSize: '1.2rem'}} >

          <div class="list-group-flush">
            {listOfRooms}
            <button type="button" class="list-group-item list-group-item-action" value="Catherine" style={{height: '6vh'}} onClick={changeRoom}>
              Catherine
            </button>
            <button type="button" class="list-group-item list-group-item-action" value="Serena" style={{height: '6vh'}} >Serena</button>
            <button type="button" class="list-group-item list-group-item-action" value="John" onClick={changeRoom} style={{height: '6vh'}}>John</button>
            <button type="button" class="list-group-item list-group-item-action" value="Michelle" onClick={changeRoom} style={{height: '6vh'}}>Michelle</button>
            <button type="button" class="list-group-item list-group-item-action" value="Erin" onClick={changeRoom} style={{height: '6vh'}}>Erin</button>
          </div>
          </div>

          {/* chat area */}
        <div className="col-9 chatContainer">
          {/*  need to make a POST request to create a new chatroom? */}
      
          <Chat currentRoom={currentRoom} userEmail={props.userEmail}/>
        </div>

        {/* closing row + container divs */}
      </div>
    </div>
   );
}
 
export default Messages;