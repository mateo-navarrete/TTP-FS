const express = require('express');
const router = express.Router();
const passport = require('../db/auth/local');
const { signinRequired } = require('../db/auth/utils');

const {
  deleteUser,
  getUserPortfolio,
  isAuthenticated,
  registerUser,
  signinUser,
  signoutUser,
} = require('../db/queries/usersQueries');

router.get('/isAuthenticated', isAuthenticated);
router.get('/:email', getUserPortfolio);

router.post('/register', registerUser);
router.post('/signin', passport.authenticate('local', {}), signinUser);
router.post('/signout', signinRequired, signoutUser);

router.delete('/:email', deleteUser);

module.exports = router;
