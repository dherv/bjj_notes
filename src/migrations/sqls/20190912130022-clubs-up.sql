CREATE TABLE clubs (
  id INT AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  location_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP DEFAULT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (location_id) REFERENCES locations (id) ON UPDATE CASCADE ON DELETE
  SET
    NULL
);
INSERT INTO
  clubs(name, location_id)
VALUES
  ("carpe diem", 1);