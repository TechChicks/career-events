var express = require('express')
	, router = express.Router()
	, user = require('./user')
  , db = require('../models')
  , Blog = require('../models/blog')
	, application = require('./application');

  var models = require('../models');

/* GET Main */
router.get('/', function(req, res, next) {
  res.render('homepage/index', { title: 'The ACT-W Conference Home Page' });
});

/* GET Portland */
router.get('/pdx', function(req, res, next) {
  res.render('city-pages/pdx/index', { title: 'Portland ACT-W Conference', city: 'Portland' });
});

/* GET Seattle */
router.get('/seattle', function(req, res, next) {
  res.render('city-pages/seattle/index', { title: 'Seattle ACT-W Conference', city: 'Seattle' });
});

/* GET San Francisco */
router.get('/sf', function(req, res, next) {
  res.render('city-pages/sf/index', { title: 'San Francisco ACT-W Conference', city: 'San Francisco' });
});

/* GET Austin */
router.get('/atx', function(req, res, next) {
  res.render('city-pages/atx/index', { title: 'Austin ACT-W Conference', city: 'Austin' });
});

/* GET Boston */
router.get('/boston', function(req, res, next) {
  res.render('city-pages/boston/index', { title: 'Boston ACT-W Conference', city: 'Boston' });
});

/* GET Chicago */
router.get('/chicago', function(req, res, next) {
  res.render('city-pages/chicago/index', { title: 'Chicago ACT-W Conference', city: 'Chicago' });
});

/* GET New York */
router.get('/nyc', function(req, res, next) {
  res.render('city-pages/nyc/index', { title: 'New York ACT-W Conference', city: 'New York City' });
});

/* GET Blog */
router.get('/blog', function(req, res, next) {
  this.blogs = db.Blog.findAll().then(function(blogs){
    console.log('SUCCESS!!', blogs);
    res.render('homepage/blog', { title: 'New York ACT-W Conference', content: 'New York City' });    
  });
  // });
});

/* AUTH */
router.get('/authenticate', function(req, res, next) {
  res.render('login');
});

router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.post('/register', user.register)

module.exports = router;
