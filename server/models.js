'use strict';

var Sequelize = require('sequelize');

var sequelize = new Sequelize('sqlite:///database.sqlite');

var Item = sequelize.define('item', {
  text: {
    type: Sequelize.STRING
  }
});

module.exports.Item = Item;
