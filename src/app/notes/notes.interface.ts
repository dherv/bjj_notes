export interface INoteItem {
  content: String
  note_id: Number
}

export interface INote {
  id: Number
  title: String
  teacher_id: String;
  category_id: String;
  sub_category_id: String;
  comment: String;
  note_items: INoteItem[];
  class_date: Date
}

export interface INoteRepository {
  get(): Promise<INote[]>;
  // getById(id: number): INote | undefined;
  add(note: INote): Promise<String>;
  // edit(id: number, note: INote): INote;
  // delete(id: number): INote | null;
}