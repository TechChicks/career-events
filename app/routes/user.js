var db = require('../models')
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

exports.authenticate = function(req, res) {
	console.log('~~~~~~~AUTHENTICATE~~~~~~~', req.body);
	db.User.find({where: { username: req.body.user }})
		  .then(function (user){
		  	if(!user) {
		  		console.error('Couldnt find user');
		  		res.redirect('/login?error=usernotfound');
		  	}
		  	else {
		  		//validate password
		  		console.log('user', user.password)
		  		if (db.User.isValidPassword(req.body.pass,user.password))
						res.redirect('/');
					else
						res.redirect('/login?error=incorrectpassword');
		  	}
			})
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