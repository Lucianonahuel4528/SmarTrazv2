const superadminController = require('../controllers/superadminController');

const {Router}=require('express');
const router= Router(); 


//url de pagina de inicio
router.post('/establecerPass', superadminController.asignarCredenciales);




module.exports = router