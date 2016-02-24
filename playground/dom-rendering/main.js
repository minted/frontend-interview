'use strict';

var request = require('superagent');
var markdown = require('markdown').markdown;

/* Convenience imports  */

// React
// var React = require('react');
// var ReactDOM = require('react-dom');

// AngularJS
// var angular = require('angular');

// jQuery
// var $ = require('jquery');

// Example xhr
request
  .get('/api/items')
  .end(function(err, res) {
    var items = res.body;
    console.log(items);
  });
