exports.IsAuthenticated = function(req, res, next){
	if(req.isAuthenticated()){
		console.log('############  req.isAuthenticated()');
		next();
	} else {
		console.log('############  !req.isAuthenticated()');
		next(new Error(401));
	}
}

exports.destroySession = function(req, res, next) {
	req.logOut();
	req.session.destroy()
	res.redirect("/")
}