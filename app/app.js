var express = require('express')
 , routesIndex = require('./routes/index')
 , app = express()
 , db = require('./models')
 , path = require('path')
 , favicon = require('serve-favicon')
 , logger = require('morgan')
 , session = require('express-session')
 , cookieParser = require('cookie-parser')
 , bodyParser = require('body-parser')
 , http = require('http')

SALT_WORK_FACTOR = 12;

app.listen(5000);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('serve-static')(__dirname + path.join(__dirname, 'public')));
app.use(session({ secret: 'actw secret' }));

app.use('/', routesIndex);
app.use(express.static('/public'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

db.Blog.hasMany(db.BlogRxn, {foreignKey: 'blogId'});
db.BlogRxn.belongsTo(db.Blog, { onDelete: "CASCADE", foreignKey: { name: 'blogId', allowNull: false }});

db
  .sequelize
  .sync()

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
