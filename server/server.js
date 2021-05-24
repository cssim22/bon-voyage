const express = require('express');
const app = express();
const path = require('path');

const apiRouter = require('./routes/api');


app.use(express.json({type: 'application/x-www-form-urlencoded'}));
// app.use(express.urlencoded({extended: true}));


//define route handlers
app.use('/api', apiRouter);


//deliver main index html
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
})

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});