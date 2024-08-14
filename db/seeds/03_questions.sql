-- Insert questions for each quiz
INSERT INTO questions (quiz_id, question_text, choice_1, choice_2, choice_3, choice_4, correct_choice)
VALUES 
  -- Questions for Quiz 1
  (1, 'What is a closure?', 'A function inside another function', 'A loop', 'A condition', 'A variable', 'A function inside another function'),
  (1, 'What is the output of 2 + 2 in JavaScript?', '4', '22', 'NaN', 'Error', '4'),
  (1, 'What does "this" refer to in JavaScript?', 'Current object', 'Global object', 'DOM element', 'Function', 'Current object'),
  (1, 'Which symbol is used for comments in JavaScript?', '//', '<!-- -->', '#', '/* */', '//'),
  (1, 'What is a Promise in JavaScript?', 'An object representing the eventual completion or failure of an async operation', 'A loop', 'A function', 'A variable', 'An object representing the eventual completion or failure of an async operation'),

  -- Questions for Quiz 2
  (2, 'What does HTML stand for?', 'HyperText Markup Language', 'Hyperlink Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language', 'HyperText Markup Language'),
  (2, 'Which HTML tag is used to define an unordered list?', '<ul>', '<ol>', '<li>', '<list>', '<ul>'),
  (2, 'What is the purpose of the <head> tag?', 'Contains metadata', 'Displays content', 'Defines styles', 'Handles scripts', 'Contains metadata'),
  (2, 'What is the correct syntax for creating a hyperlink?', '<a href="url">link</a>', '<link href="url">link</link>', '<a name="url">link</a>', '<a link="url">link</a>', '<a href="url">link</a>'),
  (2, 'Which HTML attribute is used to define inline styles?', 'style', 'styles', 'class', 'font', 'style'),

  -- Questions for Quiz 3
  (3, 'What is the correct CSS syntax?', 'body:color=black;', '{body:color=black;}', 'body {color: black;}', '{body;color:black;}', 'body {color: black;}'),
  (3, 'Which property is used to change the background color?', 'background-color', 'bgcolor', 'color', 'background', 'background-color'),
  (3, 'How do you select an element with id "header" in CSS?', '#header', '.header', 'header', '*header', '#header'),
  (3, 'Which CSS property controls the text size?', 'font-size', 'text-style', 'font-style', 'text-size', 'font-size'),
  (3, 'What does CSS stand for?', 'Cascading Style Sheets', 'Colorful Style Sheets', 'Computer Style Sheets', 'Creative Style Sheets', 'Cascading Style Sheets'),

  -- Questions for Quiz 4
  (4, 'Which SQL statement is used to extract data from a database?', 'GET', 'EXTRACT', 'SELECT', 'OPEN', 'SELECT'),
  (4, 'Which SQL keyword is used to sort the result-set?', 'ORDER', 'SORT', 'ORDER BY', 'GROUP BY', 'ORDER BY'),
  (4, 'Which SQL function is used to count the number of rows in a table?', 'COUNT()', 'SUM()', 'AVG()', 'TOTAL()', 'COUNT()'),
  (4, 'Which SQL statement is used to delete data from a table?', 'REMOVE', 'DELETE', 'DROP', 'CUT', 'DELETE'),
  (4, 'Which SQL statement is used to update data in a database?', 'MODIFY', 'UPDATE', 'CHANGE', 'ALTER', 'UPDATE'),

  -- Questions for Quiz 5
  (5, 'Which company developed JavaScript?', 'Microsoft', 'Netscape', 'Google', 'Apple', 'Netscape'),
  (5, 'Inside which HTML element do we put the JavaScript?', '<js>', '<script>', '<javascript>', '<scripting>', '<script>'),
  (5, 'How can you add a comment in JavaScript?', '// This is a comment', '<!-- This is a comment -->', '/* This is a comment */', '# This is a comment', '// This is a comment'),
  (5, 'What is the correct syntax for referring to an external script called "app.js"?', '<script src="app.js">', '<script href="app.js">', '<script link="app.js">', '<script name="app.js">', '<script src="app.js">'),
  (5, 'Which operator is used to assign a value to a variable?', '=', '==', '===', '!=', '='),

  -- Questions for Quiz 6
  (6, 'What is the default value of a Boolean variable in JavaScript?', 'false', 'true', 'null', 'undefined', 'false'),
  (6, 'What is the output of typeof null?', 'object', 'null', 'undefined', 'string', 'object'),
  (6, 'Which method is used to add an element to the end of an array in JavaScript?', 'push()', 'pop()', 'shift()', 'unshift()', 'push()'),
  (6, 'How do you convert a string to a number in JavaScript?', 'Number()', 'parseInt()', 'parseFloat()', 'All of the above', 'All of the above'),
  (6, 'Which keyword is used to define a constant in JavaScript?', 'const', 'let', 'var', 'fixed', 'const'),

  -- Questions for Quiz 7
  (7, 'Which CSS selector is used to select elements by class?', '.', '#', '::', '*', '.'),
  (7, 'How do you apply a border to an element in CSS?', 'border: 1px solid black;', 'border: 1px dashed black;', 'border: 1px dotted black;', 'All of the above', 'All of the above'),
  (7, 'What is the correct CSS syntax to set the font size to 16px?', 'font-size: 16px;', 'font-size: 16px', 'font: size 16px;', 'font-size: 16;', 'font-size: 16px;'),
  (7, 'Which CSS property is used to set the spacing between lines of text?', 'line-height', 'letter-spacing', 'word-spacing', 'text-indent', 'line-height'),
  (7, 'How do you apply a background image in CSS?', 'background-image: url("image.jpg");', 'background-image: "image.jpg";', 'bg-image: url("image.jpg");', 'image: url("image.jpg");', 'background-image: url("image.jpg");'),

  -- Questions for Quiz 8
  (8, 'Which SQL keyword is used to retrieve unique values?', 'DISTINCT', 'UNIQUE', 'DIFFERENT', 'SEPARATE', 'DISTINCT'),
  (8, 'Which SQL clause is used to filter records?', 'FILTER', 'WHERE', 'HAVING', 'ORDER BY', 'WHERE'),
  (8, 'Which SQL keyword is used to combine results from multiple SELECT statements?', 'COMBINE', 'JOIN', 'UNION', 'MERGE', 'UNION'),
  (8, 'Which SQL statement is used to create a new table?', 'CREATE TABLE', 'NEW TABLE', 'TABLE CREATE', 'MAKE TABLE', 'CREATE TABLE'),
  (8, 'Which SQL statement is used to drop a table?', 'DELETE TABLE', 'DROP TABLE', 'REMOVE TABLE', 'TRUNCATE TABLE', 'DROP TABLE'),

  -- Questions for Quiz 9
  (9, 'What is the result of 3 ** 2 in JavaScript?', '9', '6', '3', 'undefined', '9'),
  (9, 'How do you check if a variable is an array in JavaScript?', 'Array.isArray()', 'instanceof Array', 'typeof array', 'all of the above', 'Array.isArray()'),
  (9, 'Which method is used to remove the last element from an array?', 'pop()', 'shift()', 'slice()', 'splice()', 'pop()'),
  (9, 'What will the following code return: Boolean("false")?', 'true', 'false', 'null', 'undefined', 'true'),
  (9, 'Which function is used to parse a string to a floating-point number?', 'parseFloat()', 'parseInt()', 'toFloat()', 'toInteger()', 'parseFloat()'),

  -- Questions for Quiz 10
  (10, 'Which HTML tag is used to create a text area?', '<textarea>', '<input>', '<field>', '<text>', '<textarea>'),
  (10, 'How do you make a list item bold in HTML?', '<b>', '<strong>', '<bold>', '<big>', '<strong>'),
  (10, 'Which HTML attribute specifies the URL of an image?', 'src', 'href', 'link', 'url', 'src'),
  (10, 'What is the correct HTML element for inserting a line break?', '<break>', '<lb>', '<br>', '<newline>', '<br>'),
  (10, 'How do you create a checkbox in HTML?', '<input type="checkbox">', '<checkbox>', '<input type="check">', '<input type="box">', '<input type="checkbox">');