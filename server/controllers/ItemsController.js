const db = require('../models/Models');

const ItemsController = {};

ItemsController.getAllItems = (req, res, next) => {
  const query = ' SELECT * FROM public.items'

  db.query(query, (err, data) => {
    if (err) {
      console.log('ERROR: ', err);
    }
    // if successful, query will return data.rows
    const { rows } = data;
    console.log('rows', rows);
    res.locals.items = rows;
    console.log(`Successfully made GET request for all items in database.`);
    return next();
  });
};

ItemsController.postItem = (req, res, next) => {
  const { title, description, image, category, status, user_id } = req.body;

  const query = {
    text: 'INSERT INTO public.items(title, description, image, category, status, user_id) VALUES($1, $2, $3, $4, $5, $6) RETURNING *',
    values: [title, description, image, category, status, user_id],
  };

  db.query(query, (err, data) => {
    if (err) {
      console.log('ERROR HERE', err);
    }
    // const { rows } = data;
    // console.log('rows', rows);
    // res.locals.items = rows;
    console.log(`${title} successfully posted to database.`);
    return next();
  });
};

// ItemsController.getUserItems = (req, res, next) => {
//   // console.log(`req.params.id`, req.params.user);
//   const { user_id } = req.params;
//   console.log('user', user_id);

//   const query = `SELECT u._id, u.email, I.*
//   FROM public.users u
//   RIGHT OUTER JOIN public.items i ON u._id=i.user_id
//   WHERE u._id=${user_id}`

//   db.query(query, (err, data) => {
//     if (err) {
//       console.log('ERROR: ', err);;
//     }
//     // if successful, query will return list of itmems that user has posted
//     const { rows } = data;
//     res.locals.items = rows;
//     console.log(`Successfully made GET request for all items that user has posted.`);
//     return next();
//   })
// }

ItemsController.editUserItem = (req, res, next) => {
  const { item_id } = req.params;
  const { title, description, image, category, status } = req.body;

  const query = `
  UPDATE public.items
  SET title='${title}',
  description='${description}',
  image='${image}',
  category='${category}',
  status='${status}'
  WHERE _id=${item_id}`

  db.query(query, (err, data) => {
    if (err) {
      console.log('ERROR: ', err);
    }
    // if successful, query will edit single item in database
    console.log(`Item Number ${item_id} successfully edited in database.`);
    return next();
  })
}

ItemsController.deleteItem = (req, res, next) => {
  const { item_id } = req.params;

  const query = `
  DELETE FROM public.items
  WHERE _id=${item_id};
  `

  db.query(query, (err, data) => {
    if (err) {
      console.log('ERROR: ', err);
    }
    // if successful, query will delete single item in database
    console.log(`Item Number ${item_id} successfully deleted in database`);
    return next();
  })
}

// ItemsController.filterByCategory = (req, res, next) => {
//   const { filter } = req.params;

//   const query = `
//   SELECT * FROM public.items
//   WHERE category=${filter}`

//   db.query(query, (err, data) => {
//     if (err) {
//       console.log('ERROR: ', err);
//     }
//     // if successful, query will filter by category (determined by front-end) and return list of filtered items
//     console.log('rows', data.rows);
//     const { rows } = data;
//     res.locals.items = rows;
//     console.log(`Successfully made GET request for all items filtered by: ${filter}.`);
//     return next();
//   })
// }

module.exports = ItemsController;



