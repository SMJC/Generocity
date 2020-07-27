import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import '../../scss/app.scss';


let socket;
/*------------ currentRoom needs to be updated to a string of both users names-------------*/ 
/*------------ then in theory, each user would have a DB storage of all rooms -------------*/ 

const Chat = (props) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  // const [room, setRoom] = useState('')
  const ENDPOINT = 'localhost:3000'
  const name = props.userEmail;
  const room = props.currentRoom;



  useEffect(() => { // on join
    // const room = props.currentRoom;
    const name = props.userEmail;
    socket = io(ENDPOINT)
    console.log('newROOM joined');
    socket.emit('join', { name, room }, ({error}) => {
      console.log('error')
    })

    return () => {
      socket.emit('disconnect')
      socket.off();
      setMessages([]);
    }
  }, [ENDPOINT, props.currentRoom]);

  useEffect(() => {
    socket.on('message', (message) => {
      console.log('message received on client', message)
      setMessages([...messages, message]) // message has a suer on it
    })
    
  }, [messages])

  // fn for sending mssgs  
  //   socketRef.current = io.connect('/'); // connects client to server on mount
  //   // socketRef.on('connect', (room) => {
  //   //   socketRef.emit('room', room) // need to add room event listener in server.js
  //   // })
  //   socketRef.current.on("your id", id => {
  //     setYourID(id); // server emits the 'your id' event and sends along an ID
  //   })
    
  //   socketRef.current.on("message", (message) => {
   
  //     receiveMessage(message);
  //   })
  // }, []);

  // function receiveMessage(message) {
  //   setMessages((pastMessages) => [...pastMessages, message]);
  // }

  // function sendMessage(e) { // sends ID and body to server
  //   e.preventDefault();
  //   const messageObject = {
  //     body: message, // variables from state
  //     id: yourID, // variables from state
  //   };
  //   setMessage(""); // clear state 
  //   socketRef.current.emit("send message", messageObject);
  // }
  const sendMessage = (event) => {
    event.preventDefault();
    console.log('message in sendmsd', message)
    //    const messageObject = {
    //   body: message, // variables from state
    //   id: yourID, // variables from state
    // };
    socket.emit('sendMessage', message, () => setMessage(''))
  }
  function handleChange(e) {
    setMessage(e.target.value);
  }

  return (
    <div className="container chatContainer">
  <div className="row chatRow" style={{height: '45vh', width: '100%'}}></div>
        {messages.map((message, index) => { 
          console.log('message.user:', message.user)
          console.log('name', name)

          //</div>if you are the sender, render your message
          if (message.user === name) {
            // console.log('message.user', message.name)
            return (
              <div className="row" key={index} style={{width: '100%', display: 'flex', justifyContent: 'flex-end', margin: '0px'}}>
                <p>
                  {message.text}
                </p>
              </div>
            )
          }
          // if someone else is the sender, render their message
          return (
            <div className="row" key={index} style={{width: '100%', display: 'flex', justifyContent: 'flex-start', backgroundColor: 'whitesmoke', margin: '0px'}}>
              <p>
                {message.text}
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
      </Form>  */}

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