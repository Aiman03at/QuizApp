const express = require('express');
const router  = express.Router();

router.get('/attempt/:id', (req, res) => {
  const quizId = req.params.id; // Get the quiz ID from the URL

  getQuizWithQuestions(quizId)
    .then(rows => {
      if (rows.length > 0) {
        // Group the questions under the quiz
        const quiz = {
          id: rows[0].id,
          title: rows[0].title,
          description: rows[0].description,
          questions: rows.map(row => ({
            id: row.question_id,
            text: row.question_text,
            options: row.options, // Assuming options are stored as JSON or Array
          }))
        };

        const currentQuestionIndex = 0; // Start with the first question
        const question = quiz.questions[currentQuestionIndex];

        res.render('attempts', {
          quiz: quiz,
          question: question,
          currentQuestion: currentQuestionIndex + 1,
          totalQuestions: quiz.questions.length
        });
      } else {
        res.status(404).send('Quiz not found or no questions available for this quiz.');
      }
    })
    .catch(err => {
      console.error('Error retrieving quiz and questions', err);
      res.status(500).send('Internal server error');
    });
});



module.exports = router;
