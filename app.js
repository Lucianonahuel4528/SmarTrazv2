//modulos que se utilizan para trabajar con la aplicacion
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport =require('passport');

//aca se definen las rutas
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var librosRouter = require('./routes/libros');

var app = express();
require('./config/passport');
//aquí se usan las rutas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/libros',librosRouter);

app.use('/autenticar',require('./routes/autenticar'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));
//app.use(bodyParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// usamos passport y lo llamamos 

app.use(passport.initialize());
app.use(passport.session());

app.listen(3000,()=> {
  console.log("Server started on Port 3000")  
})


module.exports = app;
