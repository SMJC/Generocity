import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import '../../scss/app.scss';


const Chat = (props) => {
  const [yourID, setYourID] = useState();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  // const room = this.messenger;
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect('/'); // connects client to server
    // socketRef.on('connect', (room) => {
    //   socketRef.emit('room', room) // need to add room event listener in server.js
    // })
    socketRef.current.on("your id", id => {
      setYourID(id); // server emits the 'your id' event and sends along an ID
    })
    
    socketRef.current.on("message", (message) => {
   
      receiveMessage(message);
    })
  }, []);

  function receiveMessage(message) {
    setMessages((pastMessages) => [...pastMessages, message]);
  }

  function sendMessage(e) { // sends ID and body to server
    e.preventDefault();
    const messageObject = {
      body: message, // variables from state
      id: yourID, // variables from state
    };
    setMessage(""); // clear state 
    socketRef.current.emit("send message", messageObject);
  }

  function handleChange(e) {
    setMessage(e.target.value);
  }

  return (
    <div className="container chatContainer">
      <div className="row chatRow" style={{height: '45vh', width: '100%'}}></div>
        {messages.map((message, index) => {
          // if you are the sender, render your message
          if (message.id === yourID) {
            return (
              <div className="row" key={index} style={{width: '100%', display: 'flex', justifyContent: 'flex-end', margin: '0px'}}>
                <p>
                  {message.body}
                </p>
              </div>
            )
          }
          // if someone else is the sender, render their message
          return (
            <div className="row" key={index} style={{width: '100%', display: 'flex', justifyContent: 'flex-start', backgroundColor: 'whitesmoke', margin: '0px'}}>
              <p>
                {message.body}
              </p>
            </div>
          )
        })}


    
      {/* <Form onSubmit={sendMessage}>
        <TextArea 
        value={message} 
        onChange={handleChange} 
        placeholder="Say something..." />
        <Button>Send</Button>
      </Form> */}

      <form>
      <div class="form-group">
    <label for="exampleFormControlTextarea1"></label>
    <textarea 
    class="form-control" 
    id="exampleFormControlTextarea1" 
    rows="3"
    value={message} 
        onChange={handleChange} 
    ></textarea>
  </div>
  <button type="submit" class="btn btn-primary w-100 appButton" onClick={sendMessage}>Send Message</button>
</form>

    </div>
  );
};

 
export default Chat;