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


module.exports = UserController;