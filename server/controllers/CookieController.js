// const cookieController = {};
// const User = require('../models/userModel');

// cookieController.setSSIDCookie = (req, res, next) => {
//   // console.log("from setssid testing login");
//   const { email, password } = req.body;
//   console.log("email in setSSIDcookie", email);
//   User.findOne({email: email}, (err, data) => {
//     if (err) return next({log: "Invalid query in SSIDCookie - can't find username"});
//     // data._id is the mongoDB id of the user
//     console.log("DATA in setSSIDcookie",data);
//     res.cookie('ssid', data._id, {httpOnly: true})
//     // store user ID in res.locals.ssid
//     res.locals.ssid = data._id;

//     // console.log("setSSID response headers", res);
//     return next();
//   })

// }

// module.exports = cookieController;
