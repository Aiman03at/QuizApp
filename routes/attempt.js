const express = require('express');
const router  = express.Router();
const { getQuestionsByQuizId }= require('../db/queries/questions');

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

module.exports = router;


