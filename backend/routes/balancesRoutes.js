const express = require('express');
const router = express.Router();
const { initBalance } = require('../db/queries/balancesQueries');

router.post('/:email', initBalance);

module.exports = router;
