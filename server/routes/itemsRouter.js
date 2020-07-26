/* eslint-disable function-paren-newline */
const express = require('express');

const ItemsController = require('../controllers/ItemsController.js');

const router = express.Router();

// router.get('/', ItemsController.getItems, (req, res, next) => {
//   res.status(200).json(res.locals);
// });

router.post('/add', ItemsController.postItem, (req, res, next) => {
  res.status(200).json(res.locals);
});

module.exports = router;