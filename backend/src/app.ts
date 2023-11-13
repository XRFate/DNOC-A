var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ocRouter = require('./routes/oc');
var db = require('./DB');
var app = express();
// view engine setup we dont need view
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
var http = require('http');
/**
 * Get port from environment and store in Express.
*/
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
function normalizePort(val:any) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
}
/**
 * Create HTTP server.
 */
var server = http.createServer(app);
/**
 * Listen on provided port, on all network interfaces.
 */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/OC', ocRouter);
// app.use(function(err, req, res, next) {
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//   res.status(err.status || 500);
//   console.log(err)
//   res.render('error');
// });

async  function  initial(){
  await db.initialize()
}

initial().then(()=>{
  console.log('start watch port')
  server.listen(port);
})
/*  

 这里开始启动了服务器监听 所以之前应该处理所有的异步初始化操作
*/
module.exports = app;
