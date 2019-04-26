let express = require('express');
let path = require('path');
let http = require('http');
let config = require('config');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let log = require('./libs/log')(module);
let HttpError = require('error').HttpError;
let session = require('express-session');
let mongoose = require('./libs/mongoose')

let app = express();
app.engine('ejs', require('ejs-locals'));
app.set('port', config.get('port'));
app.set('views', path.join(__dirname, 'template'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

let MongoStore = require('connect-mongo')(session); // Operations with session + MongoDB

app.use(session({
    secret: config.get('session:secret'),
    key: config.get('session:key'),
    cookie: config.get('session:cookie'),
    resave: config.get('session:resave'),
    saveUninitialized: config.get('session:saveUninitialized'),
    store: new MongoStore({mongooseConnection: mongoose.connection}) // Operations with session + MongoDB
}));

/*/app.use(function (req, res, next) {
    req.session.numberOfInputs = req.session.numberOfInputs + 1 || 1;
    res.send("Visits: " + req.session.numberOfInputs);
});/*/


app.use(require('middleware/sendHttpError'));
app.use(require('middleware/loadUser'));

require('routes')(app);

app.use(express.static(path.join(__dirname, 'public')));

// error handler
app.use(function(err, req, res, next) {
    if (typeof err == 'number') {
        err = new HttpError(err);
    }

    if (err instanceof HttpError) {
        res.sendHttpError(err);
    } else {

        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};
        res.status(err.status || 500);
        res.render('error');
    }
});

http.createServer(app).listen(config.get('port'), function() {
    log.info('Express server listening on port ' + app.get('port'));
});

/*/
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let http = require('http');
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

// view engine setup
app.set('views', path.join(__dirname, 'template'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app; */
