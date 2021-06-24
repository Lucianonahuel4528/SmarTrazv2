var express = require('express');
var router = express.Router();
const adminController= require("../controllers/adminController");

/* GET home page. */
router.get('/',(req,res) => {
  res.render('index');
});

router.get('/register', (req, res)=> {
  res.render('register');
});

router.get('/login', (req, res)=> {
  res.render('login');
});

router.get('/administrador/establecimiento',(req,res)=>{
   res.render('administrador/establecimiento');
});

router.get('/administrador/index',(req,res)=>{
  res.render('administrador/index');
});


module.exports = router;