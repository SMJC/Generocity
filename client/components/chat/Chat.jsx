const Chat = () => {
  const [yourID, setYourID] = useState();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect('/'); // connects client to server

    socketRef.current.on("your id", id => {
      setYourID(id); // server pemits the 'your id' event
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
    <div>
      <div className="container">
        {messages.map((message, index) => {
          // if you are the sender, render your message
          if (message.id === yourID) {
            return (
              <div className="row" key={index}>
                <p>
                  {message.body}
                </p>
              </div>
            )
          }
          // if someone else is the sender, render their message
          return (
            <div class="row" key={index}>
              <p>
                {message.body}
              </p>
            </div>
          )
        })}
      </div>
      <Form onSubmit={sendMessage}>
        <TextArea 
        value={message} 
        onChange={handleChange} 
        placeholder="Say something..." />
        <Button>Send</Button>
      </Form>
    </div>
  );
};

 
export default Chat;