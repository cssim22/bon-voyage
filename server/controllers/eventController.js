const db = require('../models/model.js');

const eventController = {};

eventController.getEvents = (req, res, next) => {
  console.log('made it inside event controller');
  console.log('req.query', req.query.location);

  const eventQuery = `
    SELECT e.*, 
      d.day_of_trip AS day_number, 
      t.location AS trip_location 
      FROM events e 
    LEFT JOIN days d 
      ON e.day_id = d._id 
    LEFT JOIN trips t 
      ON d.trip_id=t._id 
    WHERE t.location=VALUE($1)`

  db.query(eventQuery, [req.query.location])
    .then(data => console.log(data))
    // .then(res.status(200).json(data))
    .catch(err => {
      console.log('eventController.getEvents: error getting events');
      next(err);
    })
}

eventController.addEvent = (req, res, next) => {
  console.log('made it inside event controller');
  console.log('req.body:', req.body);

  const { time, eventName, story, link, location, tripLocation } = req.body;
  const input = [time, eventName, story, link, location, tripLocation];

  const eventQuery = `
    INSERT INTO events (time, eventName, story, link, location)
    VALUES ($1,$2,$3,$4,$5);

  db.query(eventQuery, input)
    .then(data => {
      console.log('made it to dbQuery');
      next();
    })
    .catch(err => {
      console.log('hit error in eventController.addEvent');
      next(err);
    });
};
  // console.log("made it inside trip controller");
	// console.log("before json", req.body);
	// const { name, start_date, end_date, people, location } = req.body;

	// const input = [name, start_date, end_date, people, location];

	// const tripQuery = INSERT INTO trips (name, start_date, end_date, people, location)
  // VALUES ($1,$2,$3,$4,$5)`;
}
	// db.query(tripQuery, input)
	// 	.then((data) => {
	// 		console.log("made it to dbQuery");
	// 		next();
	// 	})
	// 	.catch((err) => {
	// 		console.log("went into error in tripcontroller");
	// 		next(err);
	// 	});

// eventController.addTrip = (req, res, next) => {
//   console.log('made it inside trip controller')
//   console.log('before json', req.body);
//   const {name, start_date, end_date, people, location} = req.body;

//   const input = [name, start_date, end_date, people, location];

//   const tripQuery = `INSERT INTO trips (name, start_date, end_date, people, location)
//   VALUES ($1,$2,$3,$4,$5)`;

//   db.query(tripQuery, input)
//     .then((data) => {
//       console.log('made it to dbQuery');
//       next();
//     })
//     .catch(err => {
//       console.log('went into error in tripcontroller')
//       next(err)
//     }
//     )
// };

module.exports = eventController;