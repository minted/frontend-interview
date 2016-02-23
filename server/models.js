'use strict';

var Sequelize = require('sequelize');

var sequelize = new Sequelize('sqlite://database.sqlite');

var Item = sequelize.define('item', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  text: {
    type: Sequelize.STRING
  }
});

module.exports.Item = Item;
