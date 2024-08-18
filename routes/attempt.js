const express = require('express');
const router  = express.Router();

const { getQuestionsByQuizId } = require('../db/queries/questions');
const { createAttempt, updateAttemptLink } = require('../db/queries/attempt');

router.get('/:id', (req, res) => {
  const quizId = req.params.id;

  getQuestionsByQuizId(quizId)
    .then(rows => {
      if (rows.length > 0) {

        const quiz = {
          id: quizId,
          title: "Quiz Title",
          description: "Quiz Description",
          questions: rows.map(row => ({
            id: row.id,
            text: row.question_text,
            choice_1: row.choice_1,
            choice_2: row.choice_2,
            choice_3: row.choice_3,
            choice_4: row.choice_4,
            correct_choice: row.correct_choice ///Dany added this
          }))
        };

        const currentQuestionIndex = 0;
        const question = quiz.questions[currentQuestionIndex];

        res.render('attempt', {

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

router.post('/', (req, res) => {
  const { user_id, quiz_id, result } = req.body;

  createAttempt({ user_id, quiz_id, result, result_link: "google.ca" })
    .then(attempt => {
      const result_link = `http://localhost:8080/result/${attempt.id}`;

      return updateAttemptLink(attempt.id, result_link);
    })
    .then(updatedAttempt => {
      res.redirect(`/result/${updatedAttempt.id}`);
    })
    .catch(err => {
      console.error('Error saving attempt:', err);
      res.status(500).send('Error saving attempt');
    });
});

module.exports = router;


