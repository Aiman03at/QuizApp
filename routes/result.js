const express = require('express');
const router  = express.Router();

const { getResultsAttemptId } = require('../db/queries/result');

// Route to display quiz results
router.get('/:attempt_id', async (req, res) => {
  const attemptId = req.params.attempt_id;

  try {
    const results = await getResultsAttemptId(attemptId);

    if (results) {  // Check if results exist
      res.render('result', { results });
    } else {
      res.status(404).send('Result not found');
    }
  } catch (error) {
    console.error('Error fetching results:', error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;