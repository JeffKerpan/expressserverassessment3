const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/pets', function (req, res, next) {
  // This will GET all the pets
  res.send(req.params);
});

app.get('/pets/:id', function (req, res, next) {
  // This will GET a specific pet based on the id
  res.send(req.params.id);
});

app.post('/pets', function (req, res, next) {
  // This will ADD a new pet and use body-parser
  res.send(req.body);
});

app.patch('/pets/:id', function (req, res, next) {
  // This will UPDATE a specific pet based on id
  res.send(req.params.id);
});

app.delete('/pets/:id', function (req, res, next) {
  // This will DELETE a specific pet based on id
  res.send(req.params.id);
});

app.use(function (req, res, next) {
  // This will throw a 404 status code if NOT FOUND
  res.sendStatus(404);
});

app.use(function (req, res, next) {
  // This will throw a 500 status code if server error
});

app.listen(port, function() {
  console.log('Listening on Port:', + port);
});

module.exports = app;
