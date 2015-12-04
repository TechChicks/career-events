var express = require('express');
var router = express.Router();

/* GET Main */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'The ACT-W Conference Home Page' });
});

/* GET Portland */
router.get('/pdx', function(req, res, next) {
  res.render('index', { title: 'Portland ACT-W Conference' });
});

/* GET Seattle */
router.get('/seattle', function(req, res, next) {
  res.render('index', { title: 'Seattle ACT-W Conference' });
});

/* GET San Francisco */
router.get('/sf', function(req, res, next) {
  res.render('index', { title: 'San Francisco ACT-W Conference' });
});

/* GET Austin */
router.get('/atx', function(req, res, next) {
  res.render('index', { title: 'Austin ACT-W Conference' });
});

/* GET Boston */
router.get('/boston', function(req, res, next) {
  res.render('index', { title: 'Boston ACT-W Conference' });
});

/* GET Chicago */
router.get('/chicago', function(req, res, next) {
  res.render('index', { title: 'Chicago ACT-W Conference' });
});

/* GET New York */
router.get('/nyc', function(req, res, next) {
  res.render('index', { title: 'New York ACT-W Conference' });
});

module.exports = router;
