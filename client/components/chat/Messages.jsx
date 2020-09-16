import React, { useState } from 'react';
import '../../scss/app.scss';
import Chat from './Chat.jsx';

const Messages = (props) => {
  const [currentRoom, setRoom] = useState('no one');

  const changeRoom = (e) => setRoom(e.target.value);

  const listOfRooms = props.msgRooms.map((user) => (
    <button
      className="list-group-item list-group-item-action"
      style={{ height: '6vh' }}
      type="button"
      value={user}
      onClick={changeRoom}
    >
      {user}
    </button>
  ));

  return (
    <div className="container msgContainer mx-10vh">
      <div className="row" style={{ height: '100vh' }}>
        {/* --- LIST OF USER MESSAGE ROOMS ---- */}
        <div
          className="col-3 msgList "
          style={{ marginTop: '30vh', fontSize: '1.2rem', lineHeight: '1.1' }}
        >
          <div className="list-group-flush">
            <button
              className="list-group-item list-group-item-action"
              style={{ height: '6vh' }}
              type="button"
              value="no one"
            >
              Choose someone:
            </button>

            {listOfRooms}
            <button
              className="list-group-item list-group-item-action"
              style={{ height: '6vh' }}
              type="button"
              value="Catherine"
              onClick={changeRoom}
            >
              Catherine
            </button>
            <button
              className="list-group-item list-group-item-action"
              style={{ height: '6vh' }}
              type="button"
              value="Serena"
              onClick={changeRoom}
            >
              Serena
            </button>
            <button
              className="list-group-item list-group-item-action"
              style={{ height: '6vh' }}
              type="button"
              value="Dave"
              onClick={changeRoom}
            >
              Dave
            </button>
            <button
              className="list-group-item list-group-item-action"
              style={{ height: '6vh' }}
              type="button"
              value="John"
              onClick={changeRoom}
            >
              John
            </button>
            <button
              className="list-group-item list-group-item-action"
              style={{ height: '6vh' }}
              type="button"
              value="Michelle"
              onClick={changeRoom}
            >
              Michelle
            </button>
            <button
              className="list-group-item list-group-item-action"
              style={{ height: '6vh' }}
              type="button"
              value="Erin"
              onClick={changeRoom}
            >
              Erin
            </button>
          </div>
        </div>

        {/* ---- CHAT AREA ----- */}
        <div className="col-9 chatContainer">
          <Chat currentRoom={currentRoom} userEmail={props.userEmail} />
        </div>

        {/* closing row + container divs */}
      </div>
    </div>
  );
};

export default Messages;
