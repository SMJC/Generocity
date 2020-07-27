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
    <button type="button" class="list-group-item list-group-item-action" value={user} onClick={changeRoom}>{user}</button>
    )
  })
  console.log(listOfRooms);
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
            {listOfRooms}
            <button type="button" class="list-group-item list-group-item-action" value="Catherine" onClick={changeRoom}>
              Catherine
            </button>
            <Link onClick={changeRoom} to='/messages'> <button type="button" class="list-group-item list-group-item-action" value="Serena" >Serena</button></Link>
            <button type="button" class="list-group-item list-group-item-action" value="John" onClick={changeRoom}>John</button>
            <button type="button" class="list-group-item list-group-item-action" value="Michelle" onClick={changeRoom}>Michelle</button>
            <button type="button" class="list-group-item list-group-item-action" value="Erin" onClick={changeRoom} disabled>Erin</button>
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