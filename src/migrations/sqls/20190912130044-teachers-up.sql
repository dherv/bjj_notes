CREATE TABLE teachers (
  id INT AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  club_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP DEFAULT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (club_id) REFERENCES clubs (id) ON UPDATE CASCADE ON DELETE
  SET
    NULL
);
INSERT INTO
  teachers(name, club_id)
VALUES
  ("thomas", 1),
  ("masa", 1);