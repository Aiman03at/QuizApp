const express = require('express');
const router = express.Router();
const quizzes = require('../db/queries/quizzes');

 

router.get('/', (req, res) => {
  quizzes
    .getAllQuizzes()  // Fetch all quizzes
    .then((quizzes) => {
      // Group quizzes by category
      const quizzesByCategory = {};
      quizzes.forEach(quiz => {
        
        if (!quizzesByCategory[quiz.category]) {
          quizzesByCategory[quiz.category] = []; // Initialize the array if it doesn't exist
        }
        quizzesByCategory[quiz.category].push(quiz); // Push the quiz into the appropriate category
      });

      console.log(quizzesByCategory);
      res.render('home', {quizzesByCategory});
    })
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
});

module.exports = router;