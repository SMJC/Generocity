const db = require('../models/itemsModels');

const ItemsController = {};

ItemsController.postItem = (req, res, next) => {

  const { _id, title, description, image, category, status, user_id } = req.body;

  console.log('req.body', req.body);

  const query = {
    text: 'INSERT INTO public.items(title, description, image, category, status, user_id) VALUES($1, $2, $3, $4, $5, $6) RETURNING *',
    values: [title, description, image, category, status, user_id],
  };

  // set var to db.query()
  db.query(query, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      const { rows } = data;
      res.locals.items = rows;
      return next();
    }
  })
}


// ItemsController.postItem = (req, res, next) => {

//   const { zipCode, st, city, state } = req.body;


//   const createAddressQuery = {
//     text: 'INSERT INTO public.address(zipcode, street, city, state) VALUES($1, $2, $3, $4) RETURNING *',
//     values: [zipCode, st, city, state],
//   };


//   // set var to db.query()
//   db.query(createAddressQuery, (err, res) => {
//     if (err) {
//       console.log(err);
//     } else {
//       const { rows } = data;
//       res.locals.items = rows;
//       return next();
//     }
//   })
// }



module.exports = ItemsController;
