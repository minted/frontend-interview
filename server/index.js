'use strict';

var express = require('express');
var app = express();

var Item = require('./models').Item;

var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.send('OK');
});

app.get('/items', function(req, res) {
  res.send('list of things');
});

app.listen(port, function() {
  console.log('App listening on port', port);
});
