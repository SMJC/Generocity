const db = require('../models/Models');

const SessionController = {};
/**
 * startSession - create and ave a new Session into the database.
 */

SessionController.startSession = async (req, res, next) => {
  const createSessionQuery = {
    text:
      'INSERT INTO public.sessions("cookie", "created_At", "expiration", "user_id") VALUES($1, current_timestamp, $2, $3) RETURNING *',
    values: [res.locals.ssid, 500000, res.locals.ssid],
  };
  try {
    const session = await db.query(createSessionQuery);
    console.log('session created successfully', session);
    return next();
  } catch (e) {
    return next({ log: 'Invalid startSession query' });
  }
};

// // set cookieID to user ID
// console.log('in startSession res.locals.ssid', res.locals.ssid);
// Session.create({ cookieId: res.locals.ssid }, (err, data) => {
//   if (err) return next({ log: 'Invalid startSession query' });
//   console.log('Session data in startSession: ', data);
//   return next();
// });
/**
 * endSession - delete user session.
 */

// SessionController.endSession = (req, res, next) => {
//   const ssid = req.cookies.ssid;

//   Session.deleteOne({cookieId: ssid}, (err, data) => {
//     if (err) return next({log: 'Invalid endSession query'});
//     return next();
//   });
// };

module.exports = SessionController;
