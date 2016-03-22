
/*This file is not currently being used, 
but is a good template and may hold the working db code someday*/
// exports.homepage = function(req, res){
// 	res.render("homepage.ejs", { myVar: req.user.username })
// }

// var Sequelize = require('sequelize');
// // var pg = require('pg').native;
// var pg = require('pg');
// var passport = require("passport");
// var PassportLocalStrategy = require('passport-local').Strategy;
// var connectionString = require('../config.json');

// // var sequelize = new Sequelize('actw_development', 'swatson', {
// //   host: 'localhost',
// //   dialect: 'postgres'
// // });

// var sequelize = new Sequelize(connectionString.postgres);

// var User = sequelize.define('user', {
//   username: Sequelize.STRING,
//   password: Sequelize.STRING,
// });

// User.sync();

// var auth = {};
// auth.localStrategy = new PassportLocalStrategy({
// 	username: 'username',
// 	password: 'password'
//   },

//   function (username, password, done){
//     var User = require('./users');
//     User.find({username: username}).success(function(user){
//       if (!user){
//         return done(null, false, { message: 'Nobody here by that name'} );
//       }
//       if (user.password !== password){
//         return done(null, false, { message: 'Wrong password'} );
//       }
//       return done(null, { username: user.username });
//     });
//   }
// );

// auth.validPassword = function(password){
//   return this.password === password;
// }

// auth.serializeUser = function(user, done){
//   done(null, user);
// };

// auth.deserializeUser = function(obj, done){
//   done(null, obj);
// };

// module.exports = {
//   query: function(text, values, cb) {
//     pg.connect(connectionString.postgres, function(err, client, done) {
//       client.query(text, values, function(err, result) {
//         done();
//         cb(err, result);
//       });
//     });
//   }
// }