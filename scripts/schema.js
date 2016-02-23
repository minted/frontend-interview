'use strict';

var path = require('path');

var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database(path.resolve(__dirname, '../database.sqlite'));

db.serialize(function() {
  db.run('CREATE TABLE items (id ROWID, text TEXT, createdAt TEXT, updatedAt TEXT)');
});

db.close();
