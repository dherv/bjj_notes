/* Replace with your SQL commands */
ALTER TABLE
  notes RENAME COLUMN position_id TO category_id;
ALTER TABLE
  notes RENAME COLUMN type TO position;
ALTER TABLE
  notes RENAME COLUMN technique TO title;
ALTER TABLE
  notes
ADD
  COLUMN sub_category_id INT;