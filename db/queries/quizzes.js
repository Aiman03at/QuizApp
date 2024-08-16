const { Pool } = require('pg');

const pool = new Pool({
  user: "labber",
  password: "labber",
  host: "localhost",
  database: "midterm",
});


const getAllQuizzes = () => {
  return pool.query('SELECT * FROM quizzes')
    .then(data => {
      
      return data.rows;
    });
};

module.exports = { getAllQuizzes };




