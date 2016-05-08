var db = require('../models')

exports.getBlogRxnsByBlogId = function(req, res) {
	console.log('~~~~~~~getBlogRxnsByBlogId~~~~~~~', req.body);
	// db.User.find({where: { username: req.body.user }})
	// 	  .then(function (user){
	// 	  	if(!user) {
	// 	  		console.error('Couldnt find user');
	// 	  		res.redirect('/login?error=usernotfound');
	// 	  	}
	// 	  	else {
	// 	  		//validate password
	// 	  		console.log('user', user)
	// 	  		if (db.User.isValidPassword(req.body.pass,user.password))
	// 					res.redirect('/');
	// 				else
	// 					res.redirect('/login?error=incorrectpassword');
	// 	  	}
	// 		})
}
