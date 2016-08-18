var express = require('express')
  , router = express.Router()

/* GET Main */
router.get('/', function(req, res, next) {
  res.render('homepage/index', { title: 'ChickTech Career Events' });
  var sess = req.session;
  if (sess.views)
    sess.views++;
  else
    sess.views = 1;
  console.log('Homepage session views', sess.views);
});

/* GET Portland */
router.get('/pdx', function(req, res, next) {
  res.render('city-pages/pdx/index', { title: 'Portland ChickTech Career Events', city: 'Portland' });
});

/* GET Seattle */
router.get('/seattle', function(req, res, next) {
  res.render('city-pages/seattle/index', { title: 'Seattle ChickTech Career Events', city: 'Seattle' });
});

/* GET San Francisco */
router.get('/sf', function(req, res, next) {
  res.render('city-pages/sf/index', { title: 'San Francisco ChickTech Career Events', city: 'San Francisco' });
});

/* GET Austin */
router.get('/atx', function(req, res, next) {
  res.render('city-pages/atx/index', { title: 'Austin ChickTech Career Events', city: 'Austin' });
});

/* GET Boston */
router.get('/boston', function(req, res, next) {
  res.render('city-pages/boston/index', { title: 'Boston ChickTech Career Events', city: 'Boston' });
});

/* GET Chicago */
router.get('/chicago', function(req, res, next) {
  res.render('city-pages/chicago/index', { title: 'Chicago ChickTech Career Events', city: 'Chicago' });
});

/* GET New York */
router.get('/nyc', function(req, res, next) {
  res.render('city-pages/nyc/index', { title: 'New York ChickTech Career Events', city: 'New York City' });
});

module.exports = router;
