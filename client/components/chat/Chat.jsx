import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import '../../scss/app.scss';


const Chat = () => {
  const [yourID, setYourID] = useState();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect('/'); // connects client to server

    socketRef.current.on("your id", id => {
      setYourID(id); // server emits the 'your id' event
    })

    socketRef.current.on("message", (message) => {
      console.log("here");
      receivedMessage(message);
    })
  }, []);

  function receivedMessage(message) {
    setMessages(oldMsgs => [...oldMsgs, message]);
  }

  function sendMessage(e) {
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
    <div className="container">
      <div className="row" style={{height: '45vh'}}></div>
        {messages.map((message, index) => {
          // if you are the sender, render your message
          if (message.id === yourID) {
            return (
              <div className="row" key={index} style={{width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
                <p>
                  {message.body}
                </p>
              </div>
            )
          }
          // if someone else is the sender, render their message
          return (
            <div className="row" key={index} style={{width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
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
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea 
    class="form-control" 
    id="exampleFormControlTextarea1" 
    rows="3"
    value={message} 
        onChange={handleChange} 
    ></textarea>
  </div>
  <button type="submit" class="btn btn-primary w-100" onClick={sendMessage}>Send Message</button>
</form>

    </div>
  );
};

 
export default Chat;