const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


passport.use('local.signup', new LocalStrategy({
 usernameField:'email',
 passwordField:'apellidos',
 passReqToCallback: true
}, async (req, username, password,done) => {
   console.log(req.body);
}
));
//passReqToCallback para recibir mas datos aparte del email y password
//passport.serializeUser(())