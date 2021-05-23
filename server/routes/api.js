const path = require('path');
const express = require('express');

//middleware
const tripController = require('../controllers/tripController');
const app = express.Router();



//post request
app.post('/new-trip', tripController.addTrip, (req,res) => {
  console.log('successfully added trip')
  return res.status(200).json('successfully added trip');
});


//link to data
//POST request
//db query
//form data from app and insert into proper table on SQL database
//test request with Postman
//use middleware



//catch-all route for unhandled requests

app.use(function (req, res) {
    res.status(404).sendFile(path.join(__dirname, '.', 'client', '404.html'));
    
});

module.exports = app;
