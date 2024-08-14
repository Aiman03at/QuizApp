DROP TABLE IF EXISTS questions CASCADE;
CREATE TABLE questions (
  id SERIAL PRIMARY KEY NOT NULL,
  quiz_id INTEGER REFERENCES quizzes(id) ON DELETE CASCADE,
  question_text TEXT NOT NULL,
  choice_1 TEXT NOT NULL,
  choice_2 TEXT NOT NULL,
  choice_3 TEXT NOT NULL,
  choice_4 TEXT NOT NULL,
  correct_choice TEXT NOT NULL
);
