const db = require('../connection');

const createAttempt = ({ user_id, quiz_id, result, result_link }) => {
  const query = `
    INSERT INTO attempts (user_id, quiz_id, result, result_link)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;
  const values = [user_id, quiz_id, result, result_link];
  return db.query(query, values)
    .then(data => data.rows[0])
    .catch(err => {
      console.error('Error saving attempt:', err);
      throw err;
    });
};

const updateAttemptLink = (attempt_id, result_link) => {
  const query = `
    UPDATE attempts
    SET result_link = $1
    WHERE id = $2
    RETURNING *;
  `;
  const values = [result_link, attempt_id];
  return db.query(query, values)
    .then(data => data.rows[0])
    .catch(err => {
      console.error('Error updating attempt link:', err);
      throw err;
    });
};

module.exports = { createAttempt, updateAttemptLink };
