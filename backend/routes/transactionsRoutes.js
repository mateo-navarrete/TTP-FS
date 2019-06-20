const express = require('express');
const router = express.Router();
const { getTransactions, handleTransaction } = require('../db/queries/transactionsQueries');

router.get('/:email', getTransactions);
router.post('/', handleTransaction);

module.exports = router;
