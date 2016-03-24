var db = require('../models')
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// app.post('/authenticate',
//   passport.authenticate('local',{
// 	successRedirect: '/',
// 	failureRedirect: '/pdx'
//   })
// )

exports.authenticate = function(req, res) {
	console.log('~~~~~~~AUTHENTICATE~~~~~~~', req.body);
	// passport.use(new LocalStrategy(
	//   function(username, password, done) {
	//   	console.log('username, password, done', username, password, done)
	//     User.findOne({ username: req.body.user }, function (err, user) {
	//     	console.log('######', user)
	//       if (err) { return done(err); }
	//       if (!user) { return done(null, false); }
	//       if (!user.verifyPassword(req.body.pass)) { return done(null, false); }
	//       return done(null, user);
	//     });
	//   }
	// ));
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