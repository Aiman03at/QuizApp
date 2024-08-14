-- Insert quizzes for each user
INSERT INTO quizzes (created_by, quiz_link, is_private, category)
VALUES 
  (1, 'http://quizlink1.com', FALSE, 'JavaScript'),
  (1, 'http://quizlink2.com', TRUE, 'HTML'),
  
  (2, 'http://quizlink3.com', FALSE, 'CSS'),
  (2, 'http://quizlink4.com', TRUE, 'SQL'),
  
  (3, 'http://quizlink5.com', FALSE, 'JavaScript'),
  (3, 'http://quizlink6.com', TRUE, 'HTML'),
  
  (4, 'http://quizlink7.com', FALSE, 'CSS'),
  (4, 'http://quizlink8.com', TRUE, 'SQL'),
  
  (5, 'http://quizlink9.com', FALSE, 'JavaScript'),
  (5, 'http://quizlink10.com', TRUE, 'HTML');