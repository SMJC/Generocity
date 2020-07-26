const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const itemRouter = require('./routes/itemsRouter.js');
const userRouter = require('./routes/userRouter.js');
const filterRouter = require('./routes/filterRouter.js');

// require dotenv to hide server uri
require('dotenv').config();

// Handle Parsing of Request Body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handle Requests for Static Files
app.use('/', express.static(path.resolve(__dirname, '../')));

// Define Route Handlers
app.use('/item', itemRouter);
app.use('/user', userRouter);
app.use('/filter', filterRouter);

// Get Home Route 
app.get('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../index.html')));

app.get('/profile', (req, res) => res.sendFile(path.resolve(__dirname, '../index.html')));
app.get('/login', (req, res) => res.sendFile(path.resolve(__dirname, '../index.html')));
app.get('/signup', (req, res) => res.sendFile(path.resolve(__dirname, '../index.html')));

// Catch-All to handle unknown routes
app.use('*', (req, res) => {
  res.status(404).send('Bad Request');
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.log('Global error handler: ', err);
  res.status(500).send(err);
});

// Start Server
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
