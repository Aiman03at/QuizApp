-- Insert attempts for each user
INSERT INTO attempts (user_id, quiz_id, result, result_link)
VALUES 
  -- User 1 attempts
  (1, 1, 3, 'http://results1.com'),
  (1, 2, 4, 'http://results2.com'),

  -- User 2 attempts
  (2, 3, 1, 'http://results3.com'),
  (2, 4, 5, 'http://results4.com'),

  -- User 3 attempts
  (3, 5, 5, 'http://results5.com'),
  (3, 6, 2, 'http://results6.com'),

  -- User 4 attempts
  (4, 7, 4, 'http://results7.com'),
  (4, 8, 5, 'http://results8.com'),

  -- User 5 attempts
  (5, 9, 0, 'http://results9.com'),
  (5, 10, 1, 'http://results10.com');