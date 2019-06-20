const bcrypt = require('bcryptjs');

const comparePass = (userPass, databasePass) =>
  bcrypt.compareSync(userPass, databasePass);

const createHash = password => {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

const signinRequired = (req, res, next) => {
  console.log('@req.user', req.user);
  if (!req.user) {
    res.status(401).json({ status: 'Unauthorized - please login.' });
    return;
  }

  next();
};

module.exports = {
  comparePass,
  createHash,
  signinRequired,
};
