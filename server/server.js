const express = require('express');
const path = require('path');
const http = require('http')
const socket = require('socket.io')

const app = express();
const server = http.createServer(app);
const io = socket(server);

const PORT = 3000;
// const rooms = { name: {}}

io.on("connection", socket => {
  socket.emit("your id", socket.id); // emits the 'your id' event to client, along with user's socket ID
  //socket.client
  // socket.join('some room');
  // socket.on('room', (room) => {
  //   socket.join(room)
  // })
  socket.on("send message", body => { // when the client emits the 'send message' event, (i.e. when user sends msg), server emits the 'message' event
      io.emit("message", body) // the client listens for the 'message' event, and appends the 'body' (sent from server) to the DOM
  })
})
// from client, send message to scoket when room is created
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', express.static(path.resolve(__dirname, '../')));
app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../index.html')));
app.get('/profile', (req, res) => res.sendFile(path.resolve(__dirname, '../index.html')));
app.get('/login', (req, res) => res.sendFile(path.resolve(__dirname, '../index.html')));
app.get('/signup', (req, res) => res.sendFile(path.resolve(__dirname, '../index.html')));
app.get('/chat', (req, res) => res.sendFile(path.resolve(__dirname, '../index.html')));
app.get('/messages', (req, res) => res.sendFile(path.resolve(__dirname, '../index.html')));




// react router
app.get('/profile', (req, res) => res.sendFile(path.resolve(__dirname, '../index.html')));
app.get('/logIn', (req, res) => res.sendFile(path.resolve(__dirname, '../index.html')));


app.use('*', (req, res) => {
  res.status(404).send('Bad Request');
});

app.use((err, req, res, next) => {
  console.log('Global error handler: ', err);
  res.status(500).send(err);
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}...`))