var passport = require('passport')
	, LocalStrategy = require('passport-local').Strategy
  , db = require('../models');

// Serialize Sessions
passport.serializeUser(function(user, done){
	done(null, user);
});

//Deserialize Sessions
passport.deserializeUser(function(user, done){
	db.User.find({where: {id: user.id}}).success(function(user){
		done(null, user);
	}).error(function(err){
		done(err, null)
	});
});

// For Authentication Purposes
// passport.use(new LocalStrategy(
// 	function(username, password, done){
// 		db.User.find({where: {username: username}}).success(function(user){
// 			passwd = user ? user.password : ''
// 			isMatch = db.User.validPassword(password, passwd, done, user)
// 		});
// 	}
// ));

// Configure the local strategy for use by Passport.
//
// The local strategy require a `verify` function which receives the credentials
// (`username` and `password`) submitted by the user.  The function must verify
// that the password is correct and then invoke `cb` with a user object, which
// will be set at `req.user` in route handlers after authentication.
passport.use(new LocalStrategy(
  function(username, password, done) {
    db.users.findByUsername(username, function(err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (user.password != password) { return done(null, false); }
      return done(null, user);
    });
  }));