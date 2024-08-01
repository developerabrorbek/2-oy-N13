CREATE TABLE student (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  phone_number VARCHAR(12),
  teacher_id INT,
  FOREIGN KEY (teacher_id) REFERENCES teacher(id)
);

CREATE TABLE teacher (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  field VARCHAR(255)
);


INSERT INTO teacher (name, field) 
VALUES ('Abbos teacher', 'frontend'),
('Akmal teacher', 'backend'),
('Tom teacher', 'english'),
('John teacher', 'deutsch'),
('Akmal pm teacher', 'PM');



INSERT INTO student (name, phone_number ,teacher_id) 
VALUES ('Abbos', '998963564522', 1),
('Akmal', '998963564522', 2),
('Tom', '998963564556', 5),
('John', '998963564534', 3),
('Akmal oka', '998963564513', 3),
('Sam', '998963564556', 2),
('Alex', '998963568513', 2),
('White', '998964564513', 5),
('Ben', '998963562313', 5);


-- GET -> /teachers

-- [
--   {
--     teacher,
--     students: [
--       {}
--     ]
--   }
-- ]

SELECT student.id, student.name as student_name, teacher.name as teacher_name FROM student RIGHT JOIN teacher ON teacher.id = student.teacher_id;