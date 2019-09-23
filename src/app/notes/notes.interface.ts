export interface INoteItem {
  content: String
  order_number: Number
  note_id: Number
}

export interface INote {
  id: Number;
  technique: String;
  teacher_name: String;
  position_id: Number;
  type: ["Defense", "Attack", null];
  comment: String;
  note_items: INoteItem[];
  class_date: String
}

export interface INoteRepository {
  get(): Promise<INote[]>;
  // getById(id: number): INote | undefined;
  add(note: INote): Promise<String>;
  // edit(id: number, note: INote): INote;
  // delete(id: number): INote | null;
}