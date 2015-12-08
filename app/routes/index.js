var express = require('express');
var router = express.Router();

/* GET Main */
router.get('/', function(req, res, next) {
  res.render('homepage/index', { title: 'The ACT-W Conference Home Page' });
});

/* GET Portland */
router.get('/pdx', function(req, res, next) {
  res.render('city-pages/index', { title: 'Portland ACT-W Conference', city: 'Portland' });
});

/* GET Seattle */
router.get('/seattle', function(req, res, next) {
  res.render('city-pages/index', { title: 'Seattle ACT-W Conference', city: 'Seattle' });
});

/* GET San Francisco */
router.get('/sf', function(req, res, next) {
  res.render('city-pages/index', { title: 'San Francisco ACT-W Conference', city: 'San Francisco' });
});

/* GET Austin */
router.get('/atx', function(req, res, next) {
  res.render('city-pages/index', { title: 'Austin ACT-W Conference', city: 'Austin' });
});

/* GET Boston */
router.get('/boston', function(req, res, next) {
  res.render('city-pages/index', { title: 'Boston ACT-W Conference', city: 'Boston' });
});

/* GET Chicago */
router.get('/chicago', function(req, res, next) {
  res.render('city-pages/index', { title: 'Chicago ACT-W Conference', city: 'Chicago' });
});

/* GET New York */
router.get('/nyc', function(req, res, next) {
  res.render('city-pages/index', { title: 'New York ACT-W Conference', city: 'New York City' });
});

module.exports = router;
