const db = require('../connection');

const getResultsAttemptId = (Id) => {
  const query = `
    SELECT id, result, result_link 
    FROM attempts 
    WHERE id = $1
  `;
  return db.query(query, [Id])
    .then(data => {
      if (data.rows.length > 0) {
        return data.rows[0];  // Return the first row from the result
      } else {
        return null;  // No result found for the given ID
      }
    })
    .catch(err => {
      console.error('Error executing query', err.stack);
      throw err;  // Propagate the error to be handled by the calling function
    });
};

const getResultList = (Id) => {
  const query =`SELECT q.id AS question_id, q.question_text, q.correct_choice, ua.user_choice, a.result
      FROM questions q
      JOIN user_answers ua ON q.id = ua.question_id
      JOIN attempts a ON a.id = ua.attempt_id
      WHERE a.id = $1;`
}


module.exports = { getResultsAttemptId };




