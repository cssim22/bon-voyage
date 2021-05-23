const express = require('express');
const app = express();
const path = require('path');

// create link to database

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
})

// add routes for get requests from react and 

//

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});