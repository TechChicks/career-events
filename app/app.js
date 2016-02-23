var express = require('express')
 , routes = require('./routes/index')
 , app = express()
 , user = require('./routes/user')
 //, users = require('./routes/users')
 , db = require('./models')
 , path = require('path')
 , favicon = require('serve-favicon')
 , logger = require('morgan')
 , session = require('express-session')
 , cookieParser = require('cookie-parser')
 , bodyParser = require('body-parser')
 , http = require('http')
 , home = require('./routes/home')
 , application = require('./routes/application')
 , passport = require('passport')
 , passportConfig = require('./config/passport');


app.listen(5000);
//app.use('/public', express.static(__dirname+'/public'));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ secret: 'so secret' }));
app.use(passport.initialize());
app.use(passport.session());
//app.use(app.router); deprecation warning

app.use('/', routes);
//app.use('/users', users);
app.use(express.static('/public'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});



module.exports = app;
