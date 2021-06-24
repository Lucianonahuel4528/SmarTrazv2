const establController = require('../controllers/establController');

const {Router}=require('express');
const router= Router(); 


router.post('/',establController.registroEstabl);
router.post('/parametros',establController.parametros);

module.exports = router