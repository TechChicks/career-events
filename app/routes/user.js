var db = require('../models')
var passport = require('passport');

// app.post('/authenticate',
//   passport.authenticate('local',{
// 	successRedirect: '/',
// 	failureRedirect: '/'
//   })
// )

exports.authenticate = function(req, res) {
	console.log('~~~~~~~AUTHENTICATE~~~~~~~');
}

exports.register = function(req, res){
	db.User.find({where: {username: req.user}}).then(function (user){
		if(!user) {
			db.User.create({username: req.body.user, password: req.body.password})
					.then (function(){
						console.log('NEW USER ADDED TO USER DB');
					})
					.error(function(err){
						console.log('Error when signing up new user', err);
					})
		} else {
			res.redirect('/signup')
		}
		return null;
	})
	res.redirect('/')
};