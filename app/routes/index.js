var express = require('express')
	, router = express.Router()
	, user = require('./user')
  , db = require('../models')
  , passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy
	, application = require('./application');


/* GET Main */
router.get('/', function(req, res, next) {
  db.Blog.findAll()  //{ where: {id: 1}} limit to top 2 chosen, shorter posts
          .then(function(blogs){
            res.render('homepage/index', { title: 'The ACT-W Conference Home Page', blogs: blogs });    
          })
          .catch(function(){
            console.error('Blog lookup failed!');
            res.render('homepage/index', { title: 'The ACT-W Conference Home Page' });
          })
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
  db.Blog.findAll({ include: db.BlogRxn})
          .then(function(blogs){
            console.log('$$$$blogs', blogs);
            res.render('homepage/blog', { blogs: blogs });    
          })
          .catch(function(){
            console.error('Blog lookup failed!');
            res.render('homepage/blog', { title: 'The ACT-W Conference Home Page', blogs: null });
          })
});

/* AUTH */
router.get('/login', function(req, res, next) {
  res.render('login');
});
router.post('/authenticate', user.authenticate);

router.get('/signup', function(req, res, next) {
  res.render('signup');
});
router.post('/register', user.register)


module.exports = router;
