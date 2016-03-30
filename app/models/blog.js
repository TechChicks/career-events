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

	var BlogRxn = sequelize.define('BlogRxn', {
			username: {type: DataTypes.STRING},
			blogId: {type: DataTypes.INTEGER},
			rxn: {type: DataTypes.STRING}
		},
		{
			dialect: 'postgres'
		}
	);

	Blog.hasMany(BlogRxn, {foreignKey: 'blogId'});

	return Blog;	
}
