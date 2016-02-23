'use strict';

var request = require('superagent');

request
  .get('/api/items')
  .end(function(err, res) {
    var items = res.body;
    console.log(items);
  });
