//jscs:disable requireCamelCaseOrUpperCaseIdentifiers
const passport = require('passport');
const db = require('..');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.email);
  });

  passport.deserializeUser((email, done) => {
    let sqlStr = 'SELECT * FROM users WHERE email = ${email}';
    db.one(sqlStr, { email: email })
      .then(user => done(null, user.email))
      .catch(err => done(err, null));
  });
};
