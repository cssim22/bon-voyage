const path = require('path');
const express = require('express');

//middleware
const tripController = require('../controllers/tripController');
//const eventController = require('../controllers/eventController');
const app = express.Router();


//add a new trip
app.post('/new-trip', tripController.addTrip, (req,res) => {
  console.log('successfully added trip')
  return res.status(200).send('successfully added trip to database');
});


/////////////////////not finished
//add a new event to a trip
// app.post('/new-event', eventController.addEvent, (req,res) => {
//   console.log('successfully added event')
//   return res.status(200).send('successfully added event to database');
// });

/////////////////////not finished
//remove a trip
app.delete('/remove-trip', tripController.removeTrip, (req,res) => {
  console.log('successfully removed trip')
  return res.status(200).send('successfully deleted trip from database');
});

/////////////////////not finished
// remove an event from a trip
// app.delete('/remove-event', eventController.removeEvent, (req,res) => {
//   console.log('successfully removed event')
//   return res.status(200).send('successfully added to database');
// });


/////////////////////not finished
//get all trips
// app.get('/get-trips', tripController.getTrips, (req,res) => {
//   console.log('successfully retrieved trips')
//   return res.status(200).send('successfully added to database');
// });


/////////////////////not finished
//get all events from a specific trip
// app.get('/get-events', eventController.getEvents, (req,res) => {
//   console.log('successfully retrieved events')
//   return res.status(200).send('successfully added to database');
// });







//catch-all route for unhandled requests
app.use(function (req, res) {
    res.status(404).sendFile(path.join(__dirname, '.', 'client', '404.html'));
    
});

module.exports = app;
