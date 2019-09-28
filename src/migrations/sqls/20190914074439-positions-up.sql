CREATE TABLE positions (
  id INT AUTO_INCREMENT,
  name VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP DEFAULT NULL,
  PRIMARY KEY (id)
);
INSERT INTO
  positions(name)
VALUES
  ("closed guard"),
  ("half guard"),
  ("mount"),
  ("knee mount"),
  ("side control"),
  ("back control");