/* eslint-disable function-paren-newline */
const express = require('express');

const UserController = require('../controllers/UserController.js');
const CookieController = require('../controllers/CookieController.js');

const router = express.Router();

// GET all items that user has posted
router.get('/:user_id', UserController.getUserItems, (req, res, next) => {
  console.log('res.locals.items', res.locals.items);
  res.status(200).json({ allItems: res.locals.items });
});

// POST request to add user
router.post(
  '/signup',
  UserController.createUser,
  CookieController.setSSIDCookie,
  (req, res, next) => {
    return res.status(200).json({ isLoggedIn: true });
  }
);

//  SessionController.startSession,

// // handle login requests
// router.post('/login',
// UserController.verifyUser,
// CookieController.setSSIDCookie,
// SessionController.startSession,
// (req, res) => {
//   return res.status(200).json({isLoggedIn: true})
// })

// // hanlde logout requests
// // router.post('/:user_id/logout',
// //     SessionController.endSession,
// //     (req, res) => {
// //       return res.status(200).json({})
// // })

// // check for session on componentDidMount
// router.get('/checksession',
//   SessionController.isLoggedIn, (req, res) => {
//     // 200 response will provide client with user email
//     return res.status(200).json({email: res.locals.email});
// })

module.exports = router;
