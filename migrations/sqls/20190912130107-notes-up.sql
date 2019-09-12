CREATE TABLE notes (
  id INT AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  teacher_id INT,
  category_id INT,
  sub_category_id INT,
  position
  SET("Defense", "Attack") DEFAULT NULL,
    comment LONGTEXT,
    class_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP DEFAULT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (teacher_id) REFERENCES teachers (id) ON UPDATE CASCADE ON DELETE
  SET
    NULL
);