module.exports = function(sequelize, DataTypes) {
	var Blog = sequelize.define('Blog', {
		username: {type: DataTypes.STRING, unique: true, validate: {notNull: true, notEmpty: true}},
		title: {type: DataTypes.STRING, validate: {notNull: true, notEmpty: true}},
		blogContent: {type: DataTypes.STRING, validate: {notNull: true, notEmpty: true}}
	},
	{
		dialect: 'postgres'
	}
);
	return Blog	
}
