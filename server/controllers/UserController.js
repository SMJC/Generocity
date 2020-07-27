const db = require('../models/Models');

const UserController = {};

UserController.getUserItems = (req, res, next) => {
  // console.log(`req.params.id`, req.params.user);
  const { user_id } = req.params;
  console.log('user', user_id);

  const query = `SELECT u._id, u.email, I.*
  FROM public.users u
  RIGHT OUTER JOIN public.items i ON u._id=i.user_id
  WHERE u._id=${user_id}`

  db.query(query, (err, data) => {
    if (err) {
      console.log('ERROR: ', err);;
    }
    // if successful, query will return list of itmems that user has posted
    const { rows } = data;
    res.locals.items = rows;
    console.log(`Successfully made GET request for all items that user has posted.`);
    return next();
  })
}


/** ------------------*From michelle's solo - need to edit--------------------------------- */
// userController.createUser = (req, res, next) => {
//   // let {email, password, phone} = req.body
//   console.log("req.body in create user", req.body);
//   // if (!username || passowrd) return next (if username or password feilds are missing)
//   const phone = '+1' + req.body.phone;
//   console.log(phone)
//     User.create(req.body, (err, data) => {
//       if (err) {
//         // refactor to include error object as 2nd sargument to render
//         return next({ log: 'Invalid create user query'});
//       } 
//       client.messages
//       .create({
//           body: 'Hi, welcome to Graphick!',
//           from: '+18052227105',
//           to: phone,
//         })
//         .then((message) => console.log(message.sid));
//       return next();
//     }
//   );
//   };


UserController.verifyUser = (req, res, next) => {

  const { email, password } = req.body;

// implement functionality that checks for lacking data fields

  User.findOne({email: email}, (err, user) => {
    // console.log("user in verifyUser", user);
    if (err) return next({log: 'Error returned, invalid username'});
    if (user === null) return next({log: 'Cannot find user from username'});
/** ------------------*BCRPYT - not using yet, so need to add functionality that mathes req email/pw to db email/pw----------------- */
    // if valid username, check password 
    // user.comparePassword(password, (err, isMatch) => {
    //   if (err) return next({log: 'Error occured while matching password via bcrypt'});
    //   if (isMatch === false) return next({log: 'Incorrect password - bcrypt match failed'})
    //   return next();
    
    // })
  });
};


module.exports = UserController;