const express = require('express');
const path = require('path');
const http = require('http')
const socket = require('socket.io')

const app = express();
const server = http.createServer(app);
const io = socket(server);

const PORT = 3000;

io.on("connection", socket => {
  socket.emit("your id", socket.id);
  socket.on("send message", body => {
      io.emit("message", body)
  })
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', express.static(path.resolve(__dirname, '../')));
app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../index.html')));
app.get('/profile', (req, res) => res.sendFile(path.resolve(__dirname, '../index.html')));
app.get('/login', (req, res) => res.sendFile(path.resolve(__dirname, '../index.html')));
app.get('/signup', (req, res) => res.sendFile(path.resolve(__dirname, '../index.html')));
app.get('/chat', (req, res) => res.sendFile(path.resolve(__dirname, '../index.html')));



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