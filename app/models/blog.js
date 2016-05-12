//Sequelize model

module.exports = function(sequelize, DataTypes) {
	var Blog = sequelize.define('Blog', {
			username: {type: DataTypes.STRING},
			title: {type: DataTypes.STRING},
			blogContent: {type: DataTypes.STRING}
		},
		{
			dialect: 'postgres'
		}
	);

	return Blog;
}
