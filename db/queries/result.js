

//const db = require("../connection");
const { Pool } = require('pg');

const pool = new Pool({
  user: "labber",
  password: "labber",
  host: "localhost",
  database: "midterm",
  port: 8080,
});
const getResultsAttemptId = (Id) => {
  const query = `
    SELECT result from attempts where id=$1
  `;
  return pool.query(query, [Id])
    .then(data => data.rows)
    .catch(err => {
      console.error('Error executing query', err.stack);
      throw err;
    });
};

getResultsAttemptId(1);

module.exports = { getResultsAttemptId};