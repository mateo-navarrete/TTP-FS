//jscs:disable maximumLineLength
const db = require('..');

const initBalance = (req, res, next) => {
  let sqlStr =
    "INSERT INTO balance (user_id, total) VALUES ( ( SELECT id FROM users u WHERE email=$1 ), '5000' )";
  db.none(sqlStr, req.body.email)
    .then(data => {
      res.send({
        status: 'success',
        message: `init balance of user: ${req.body.email}`,
      });
    })
    .catch(err => next(err));
};

const updateBalance = (req, res, next) => {
  let sqlStr =
    'UPDATE balance SET total=${total} WHERE user_id= ( SELECT id FROM users u WHERE email=${email} )';
  db.none(sqlStr, req.body)
    .then(data => {
      res.send({
        status: 'success',
        message: `updated balance of user: ${req.body.email}`,
      });
    })
    .catch(err => next(err));
};

module.exports = {
  initBalance,
  updateBalance,
};
