//jscs:disable maximumLineLength
const db = require('..');

const getTransactions = (req, res, next) => {
  let sqlStr =
    'SELECT t.created_date AS DATE, t.stock_symbol AS symbol, t.sale_price, t.quantity FROM users u LEFT JOIN transactions t ON u.id = t.user_id WHERE u.email=$1 ORDER BY DATE ';
  db.any(sqlStr, req.params.email)
    .then(data => {
      res.send({
        status: 'success',
        data: data,
        message: `got transactions of user: ${req.params.email}`,
      });
    })
    .catch(err => next(err));
};

module.exports = {
  getTransactions,
};
