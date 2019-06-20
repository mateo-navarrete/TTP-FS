//jscs:disable maximumLineLength
const db = require('..');

const getUser = (req, res, next) => {
  let sqlStr =
    'SELECT u.id, u.user_name, total AS balance, p.portfolio FROM users u LEFT JOIN balance b ON u.id = b.user_id LEFT JOIN LATERAL ( SELECT json_agg(p) AS portfolio FROM ( SELECT DISTINCT t.stock_symbol AS symbol, s.total FROM transactions t JOIN ( SELECT s.stock_symbol, SUM(s.quantity) AS total FROM transactions s GROUP BY s.stock_symbol ) AS s ON t.stock_symbol = s.stock_symbol WHERE t.user_id = ( SELECT id FROM users WHERE email=$1 ) ) p ) p ON TRUE WHERE u.id = ( SELECT id FROM users u WHERE u.email=$1 )';
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

module.exports = {
  getUser,
};
