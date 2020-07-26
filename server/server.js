const express = require('express');
const path = require('path');
const http = require('http')
const socketio = require('socket.io')

const app = express();
const server = http.createServer(app);
const io = socketio(server)

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Run when client connects // socket is an individual socket connection
io.on('connection', socket => {
  socket.emit('your id', socket.id) // socket.id is sent to client
  socket.on('send message', body => { // body is received from client
    // io.emit -> all connceted clients get message
    io.emit('message', body)
  })
  socket.on('joinRoom', ({ username, room }) => {
    const user = userJoin(socket.id, username, room);

    socket.join(user.room);

    // Welcome current user when they join
    socket.emit('message', formatMessage(botName, 'Welcome to ChatCord!'));

    // Broadcast when a user connects
    socket.broadcast
      .to(user.room)
      .emit(
        'message',
        formatMessage(botName, `${user.username} has joined the chat`)
      );

    // Send users and room info
    io.to(user.room).emit('roomUsers', {
      room: user.room,
      users: getRoomUsers(user.room)
    });
  });

app.use('/', express.static(path.resolve(__dirname, '../')));
app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../index.html')));
app.get('/profile', (req, res) => res.sendFile(path.resolve(__dirname, '../index.html')));
app.get('/login', (req, res) => res.sendFile(path.resolve(__dirname, '../index.html')));
app.get('/signup', (req, res) => res.sendFile(path.resolve(__dirname, '../index.html')));


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