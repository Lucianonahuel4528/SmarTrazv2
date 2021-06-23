//var express = require('express');
//var router = express.Router();
//en algunos casos la forma de requerir exprres y el router no toma abajo se definio la manera actualizada
//Parte principal de nuestra aplicacion
//Aca se define un login inicio de sesion se define un panel administrativo

const {Router}=require('express');
const router= Router(); 

/* GET home page. Aca se define el inicio de sesion al usuario ver si se puede hacer el registro */
router.get('/',function(req,res,next) {
    res.send("Bienvenido a la pagina de trazabilidad de personas")
});

module.exports = router;
