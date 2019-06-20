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

const handleTransaction = (req, res, next) => {
  let sqlStr =
    'INSERT INTO transactions (user_id, stock_symbol, sale_price, quantity) VALUES ( ( SELECT id FROM users u WHERE email=${email} ), ${stock_symbol}, ${sale_price}, ${quantity} )';
  db.none(sqlStr, req.body)
    .then(data => {
      res.send({
        status: 'success',
        data: data,
        message: `completed transaction of user: ${req.body.email}`,
      });
    })
    .catch(err => next(err));
};

module.exports = {
  getTransactions,
  handleTransaction,
};
