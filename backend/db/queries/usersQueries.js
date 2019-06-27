//jscs:disable maximumLineLength
const db = require('..');
const authUtils = require('../auth/utils');

const deleteUser = (req, res, next) => {
  let sqlStr = 'DELETE FROM users WHERE email=$1';
  db.none(sqlStr, req.params.email)
    .then(() => {
      res.status(200).json({
        status: 'success',
        message: `deleted user: ${req.params.email}`,
      });
    })
    .catch(err => next(err));
};

const getUserPortfolio = (req, res, next) => {
  let sqlStr =
    'SELECT u.id AS user_id, u.user_name, b.total, p.portfolio FROM users u LEFT JOIN balance b ON u.id = b.user_id LEFT JOIN LATERAL (SELECT json_agg(p) AS portfolio FROM (SELECT DISTINCT t.stock_symbol AS symbol, total_sum FROM transactions t JOIN (SELECT s.stock_symbol, SUM(s.quantity) AS total_sum FROM transactions s WHERE s.user_id = (SELECT id FROM users WHERE email=$1) GROUP BY s.stock_symbol) AS s ON t.stock_symbol = s.stock_symbol WHERE t.user_id = (SELECT id FROM users WHERE email=$1)) p) p ON TRUE WHERE u.id = (SELECT id FROM users u WHERE u.email=$1)';
  db.any(sqlStr, req.params.email)
    .then(data => {
      res.send({
        status: 'success',
        data: data,
        message: `got user: ${req.params.email}`,
      });
    })
    .catch(err => next(err));
};

const isAuthenticated = (req, res) => {
  res.json({ email: req.user || null });
};

const registerUser = (req, res, next) => {
  const rb = req.body;
  const hash = authUtils.createHash(rb.password);
  const config = {
    user_name: rb.user_name,
    password_digest: hash,
    email: rb.email,
  };
  let sqlStr =
    'INSERT INTO users ( user_name, password_digest, email ) VALUES ( ${user_name}, ${password_digest}, ${email} )';
  db.none(sqlStr, config)
    .then(() => {
      res.send({
        status: 'success',
        message: `registered user: ${rb.user_name}`,
      });
    })
    .catch(err => next(err));
};

const signinUser = (req, res) => {
  res.json({ email: req.user.email });
};

const signoutUser = (req, res, next) => {
  req.logout();
  res.status(200).send('user signout success');
};

module.exports = {
  deleteUser,
  getUserPortfolio,
  isAuthenticated,
  registerUser,
  signinUser,
  signoutUser,
};
