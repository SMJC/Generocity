/* eslint-disable function-paren-newline */
const express = require('express');

const UserController = require('../controllers/UserController.js');

const router = express.Router();



// GET all items that user has posted
router.get('/:user_id', UserController.getUserItems, (req, res, next) => {
  console.log('res.locals.items', res.locals.items);
  res.status(200).json({ allItems: res.locals.items });
});


module.exports = router;