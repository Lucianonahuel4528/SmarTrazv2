const {Router}=require('express');
const router= Router(); 

const librosController= require("../controllers/librosController");



/* GET home page. */
router.get('/',librosController.index);
router.get('/crear',librosController.crear);
//a traves del metodo post recibo el dato desde el formulario
router.post("/",librosController.guardar);
module.exports = router;
