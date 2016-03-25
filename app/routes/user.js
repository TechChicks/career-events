var db = require('../models')
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

exports.authenticate = function(req, res) {
	console.log('~~~~~~~AUTHENTICATE~~~~~~~', req.body);
	passport.use(new LocalStrategy(
	  function(username, password, done) {
	    db.User.find({ username: username }, function (err, user) {
	      if (err) {  return done(err); }
	      if (!user) {  return done(null, false); }
	      if (!user.verifyPassword(password)) {  return done(null, false); }
	      return done(null, user);
	    });
	  }
	));
	passport.authenticate('local',{
		successRedirect: '/',
		failureRedirect: '/pdx',
		failureFlash: 'Invalid username or password.',
  });
}

exports.register = function(req, res){
	db.User.find({where: {username: req.user}}).then(function (user){
		if(!user) {
			db.User.create({username: req.body.user, password: req.body.password})
					.then (function(){
						console.log('NEW USER ADDED TO USER DB');
					})
					.error(function(err){
						console.log('ERROR WHEN SIGNING UP NEW USER', err);
					})
		} else {
			res.redirect('/signup')
		}
		return null;
	})
	res.redirect('/')
};