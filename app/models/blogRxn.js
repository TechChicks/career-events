//Sequelize model

module.exports = function(sequelize, DataTypes) {
	var BlogRxn = sequelize.define('BlogRxn', {
			username: {type: DataTypes.STRING},
			blogId: {type: DataTypes.INTEGER},
			rxn: {type: DataTypes.STRING}
		},
		{
			classMethods: {
				getBlogRxnsByBlogId: function(blogid){
					console.log('blogid',blogid)
				}
			}
		},
		{
			dialect: 'postgres'
		}
	);

	return BlogRxn;
}
