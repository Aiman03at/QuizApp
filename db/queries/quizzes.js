

const db = require('../connection');

const getAllQuizzes = () => {
  return db.query('SELECT * FROM quizzes WHERE is_private = FALSE;')
    .then(data => {
      console.log(data.rows);
      return data.rows;
    });
};


const createQuiz = ({ created_by, category, is_private }) => {
  const quiz_link = "https://google.ca";
  const query = `
    INSERT INTO quizzes (created_by, quiz_link, category, is_private)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;
  const values = [created_by, quiz_link, category, is_private];
  return db.query(query, values)
    .then(data => data.rows[0]);
};

module.exports = { createQuiz,getAllQuizzes };

