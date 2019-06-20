const express = require('express');
const router = express.Router();
const { initBalance, updateBalance } = require('../db/queries/balancesQueries');

router.post('/', initBalance);
router.patch('/', updateBalance);

module.exports = router;
