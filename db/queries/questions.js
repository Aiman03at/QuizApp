const db = require('../connection');

const createQuestion = ({ quiz_id, question_text, choice_1, choice_2, choice_3, choice_4, correct_choice }) => {
  const query = `
    INSERT INTO questions (quiz_id, question_text, choice_1, choice_2, choice_3, choice_4, correct_choice)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *;
  `;
  const values = [quiz_id, question_text, choice_1, choice_2, choice_3, choice_4, correct_choice];
  return db.query(query, values)
    .then(data => data.rows[0]);
};

const getQuestionsByQuizId = (quizId) => {
  const query = `
    SELECT * FROM questions
    WHERE quiz_id = $1
  `;
  return db.query(query, [quizId])
    .then(data => data.rows)
    .catch(err => {
      console.error('Error executing query', err.stack);
      throw err;
    });
};

module.exports = { createQuestion, getQuestionsByQuizId };
