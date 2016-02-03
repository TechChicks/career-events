var express = require('express');
var router = express.Router();
var db = require('./db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.query('SELECT * FROM tech_chicks', null, function(err, result) {
    if(err) {
      console.log('Error running query: ', err);
      return res.send('Database connection error');
    }

    result = JSON.stringify(result.rows);
    res.send(result);
  });
});

module.exports = router;
