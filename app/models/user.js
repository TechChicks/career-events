//Sequelize model
var bcrypt = require('bcrypt-nodejs')

module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define('User', {
		username: {type: DataTypes.STRING},
		password: {type: DataTypes.STRING}
	},
	{
		classMethods: {
			isValidPassword: function(password, passwd){
				// bcrypt.compare(password, passwd, function(err, isMatch){
				// 	if (err) console.log(err)
				// 	if (isMatch) {
				// 		return true;
				// 	} else {
				// 		return false;
				// 	}
				// })
				return password === passwd;
			}
		}
	},
	{
		dialect: 'postgres'
	}
);

// User.hook('beforeCreate', function(user, fn){
// 	var salt = bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
// 		return salt
// 	});
// 	bcrypt.hash(user.password, salt, null, function(err, hash){
// 		if(err) return next(err);
// 		user.password = hash;
// 	});
// })
	
 return User;	
}
