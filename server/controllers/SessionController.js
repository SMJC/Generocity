// const Session = require('../models/sessionModel');
// const User = require('../models/userModel');


const SessionController = {};
/**
* startSession - create and save a new Session into the database.
*/

SessionController.startSession = (req, res, next) => {
  // set cookieID to user ID
  console.log("in startSession res.locals.ssid", res.locals.ssid);
  Session.create({ cookieId: res.locals.ssid}, (err, data) => {
    if (err) return next({log: 'Invalid startSession query'});
    console.log("Session data in startSession: ", data);
    return next();
  });
};

/**
* endSession - delete user session.
*/

SessionController.endSession = (req, res, next) => {
  const ssid = req.cookies.ssid;

  Session.deleteOne({cookieId: ssid}, (err, data) => {
    if (err) return next({log: 'Invalid endSession query'});
    return next();
  });
};

module.exports = SessionController;