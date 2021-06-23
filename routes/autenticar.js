const {Router}=require('express');
const router= Router();
const passport = require('passport');



// SIGNUP
/* router.get('/signup', (req, res) => {
  res.render('auth/signup');
});
*/
router.post('/signup', passport.authenticate('local.signup', {
  successRedirect: '/profile',
  failureRedirect: '/fail',
  // failureFlash: true
}));

router.get('/profile', (req, res) => {
    res.render('Este es tu perfil')
});

router.get('/fail', (req, res) => {
    res.render('Fallo el registro')

});

module.exports = router

/*
// SINGIN
router.get('/signin', (req, res) => {
  res.render('auth/signin');
});

router.post('/signin', (req, res, next) => {
  req.check('username', 'Username is Required').notEmpty();
  req.check('password', 'Password is Required').notEmpty();
  const errors = req.validationErrors();
  if (errors.length > 0) {
    req.flash('message', errors[0].msg);
    res.redirect('/signin');
  }
  passport.authenticate('local.signin', {
    successRedirect: '/profile',
    failureRedirect: '/signin',
    failureFlash: true
  })(req, res, next);
});

router.get('/logout', (req, res) => {
  req.logOut();
  res.redirect('/');
});

router.get('/profile', isLoggedIn, (req, res) => {
  res.render('profile');
});

module.exports = router;

*/