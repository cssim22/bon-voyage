const db = require('../models/model.js');

const tripController = {};



tripController.addTrip = (req, res, next) => {
  console.log('made it inside trip controller')
  console.log('before json', req.body);
  const {name, start_date, end_date, people, location} = req.body;

  const input = [name, start_date, end_date, people, location];

  const tripQuery = `INSERT INTO trips (name, start_date, end_date, people, location)
  VALUES ($1,$2,$3,$4,$5)`;

  db.query(tripQuery, input)
    .then((data) => {
      console.log('made it to dbQuery');
      next();
    })
    .catch(err => {
      console.log('went into error in tripcontroller')
      next(err)
    }
    )
};

module.exports = tripController;