'use strict';

var path = require('path');

var sequelizeFixtures = require('sequelize-fixtures');

var models = require('../server/models');

sequelizeFixtures.loadFile(path.resolve(__dirname, 'fixtures.json'), models)
  .then(function() {
    console.log('Fixture data loaded');
  });
