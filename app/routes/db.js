var pg = require('pg');
var connectionString = require('../config.json');

module.exports = {
  query: function(text, values, cb) {
    pg.connect(connectionString.postgres, function(err, client, done) {
      client.query(text, values, function(err, result) {
        done();
        cb(err, result);
      });
    });
  }
}