const express = require('express');
const router  = express.Router();

// Route to display quiz results
router.get('/', (req, res) => {
  res.render('result');
});

module.exports = router;
