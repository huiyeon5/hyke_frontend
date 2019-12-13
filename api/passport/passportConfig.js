const passport = require('passport');
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const { ExtractJwt } = require('passport-jwt');
const bcrypt = require('bcrypt');
const { JWT_SECRET } = require('./jwtConfig');
const User = require('../models/User')

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: JWT_SECRET,
  }, async (jwtPayload, done) => {
    try {
      const user = await User.findById(jwtPayload.id);
      const passwordsMatch = await bcrypt.compare(jwtPayload.passport, user.password);
      
      if(!user || !passwordsMatch) {
        return done(null, false);
      }

      done(null, user);
    } catch(error) {
      done(error, false);
    }
  }
));