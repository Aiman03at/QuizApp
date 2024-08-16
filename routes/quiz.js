const express = require('express');
const router  = express.Router();
const quizQueries = require('../db/queries/quizzes');
const questionQueries = require('../db/queries/questions');

router.get('/', (req, res) => {
  res.render('create_quiz');
});

router.get('/:quiz_id', (req, res) => {
  const { quiz_id } = req.params;
  questionQueries.getQuestionsByQuizId(quiz_id)
    .then(questions => {
      console.log({ quiz_id, questions })
      res.render('attempt', { quiz_id, questions });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error loading quiz');
    });
});

router.post('/create', (req, res) => {
  const { category, is_private, questions } = req.body;
  console.log(questions);
  // const created_by = req.user.id;
  const created_by = 1;

  quizQueries.createQuiz({ created_by, category, is_private: is_private || false })
    .then(quiz => {
      const quiz_id = quiz.id;
      const questionPromises = questions.map((question) => {
        return questionQueries.createQuestion({
          quiz_id,
          question_text: question.question_text,
          choice_1: question.choice_1,
          choice_2: question.choice_2,
          choice_3: question.choice_3,
          choice_4: question.choice_4,
          correct_choice: question.correct_choice
        });
      });

      return Promise.all(questionPromises);
    })
    .then(() => {
      res.redirect('/');
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error creating quiz');
    });
});

module.exports = router;

