var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require("dotenv");
const passport =require('passport');

const db = require('./config/conexion');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


var app = express();
require('./config/passport')
// view engine setup
app.engine('ejs', require('ejs-locals'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/administrador', require('./routes/administrador'));
app.use('/establecimiento',require('./routes/establecimiento'));
app.use('/superadministrador', require('./routes/superadministrador'));


app.use(passport.initialize());
app.use(passport.session());


app.listen(3000,()=> {
  console.log("Server started on Port 3000")  
})

module.exports = app;
