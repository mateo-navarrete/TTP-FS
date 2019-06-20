//jscs:disable requireCamelCaseOrUpperCaseIdentifiers
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const init = require('./passport');
const utils = require('./utils');
const db = require('..');
const config = { usernameField: 'email', passwordField: 'password' };

passport.use(
  new LocalStrategy(config, (email, password, done) => {
    let sqlStr = 'SELECT * FROM users WHERE email = ${email}';
    db.one(sqlStr, { email: email })
      .then(user => {
        let status = utils.comparePass(password, user.password_digest)
          ? user
          : false;
        return done(null, status);
      })
      .catch(err => done(err));
  })
);

init();

module.exports = passport;
