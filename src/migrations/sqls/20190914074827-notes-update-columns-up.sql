ALTER TABLE
  notes RENAME COLUMN category_id TO position_id;
ALTER TABLE
  notes RENAME COLUMN position TO type;
ALTER TABLE
  notes RENAME COLUMN title TO technique;
ALTER TABLE
  notes DROP COLUMN sub_category_id;