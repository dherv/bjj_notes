CREATE TABLE note_items(
  id INT AUTO_INCREMENT,
  note_id INT NOT NULL,
  content LONGTEXT NOT NULL,
  order_number INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP DEFAULT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (note_id) REFERENCES notes (id) ON UPDATE CASCADE ON DELETE CASCADE
);