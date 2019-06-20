const pgp = require('pg-promise')({});
const db = pgp(process.env.DATABASE_URL || 'postgress://localhost:5432/ttpfs');

module.exports = db;
