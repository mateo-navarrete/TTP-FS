const express = require('express');
const router = express.Router();
const { getTransactions } = require('../db/queries/transactionsQueries');

router.get('/:email', getTransactions);

module.exports = router;
