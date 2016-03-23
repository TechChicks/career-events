var db = require('../models')

exports.signUp = function(req, res) {
	res.render('signup');
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