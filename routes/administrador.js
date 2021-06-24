const adminController = require('../controllers/adminController');

const {Router}=require('express');
const router= Router(); 
const passport = require('passport')

//url de pagina de inicio
//passport toma el nombre de local signup que definimos en passport
router.post('/register',passport.authenticate('local.signup',{
        succesRedirect: '/login',
        failureRedirect: '/register',
        
    }));
router.post('/login', adminController.login);
router.post('/regpersonal', adminController.regPersonal);
router.post('/regpersonalSeg', adminController.regSeguridad);
// router.post('/registroEstablecimiento',adminController.registroEstablecimiento);



module.exports = router