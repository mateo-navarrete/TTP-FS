const express = require('express');
const router = express.Router();
const { getUser } = require('../db/queries/userQueries');

router.get('/:email', getUser);

module.exports = router;
