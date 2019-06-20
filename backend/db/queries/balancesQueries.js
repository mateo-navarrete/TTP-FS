//jscs:disable maximumLineLength
const db = require('..');

const initBalance = (req, res, next) => {
  let sqlStr =
    "INSERT INTO balance (user_id, total) VALUES ( ( SELECT id FROM users u WHERE email=$1 ), '5000' )";
  db.none(sqlStr, req.params.email)
    .then(data => {
      res.send({
        status: 'success',
        data: data,
        message: `init balance of user: ${req.params.email}`,
      });
    })
    .catch(err => next(err));
};

module.exports = {
  initBalance,
};
