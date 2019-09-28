/* Replace with your SQL commands */
ALTER TABLE
  notes
ADD
  CONSTRAINT FK_PositionNote FOREIGN KEY (position_id) REFERENCES positions(id);