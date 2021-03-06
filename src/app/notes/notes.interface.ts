export interface INoteItem {
  content: String
  order_number: Number
  note_id: Number
}

export interface INote {
  id: Number;
  technique: String;
  teacher_id: Number;
  position_id: Number;
  type: ["Defense", "Attack", null];
  comment: String;
  note_items: INoteItem[];
  class_date: Date
}

export interface INoteWith extends INote {
  teacher_name?: String;
  position_name?: String;
}

export interface INoteRepository {
  get(): Promise<INote[]>;
  // getById(id: number): INote | undefined;
  add(note: INote): Promise<String>;
  // edit(id: number, note: INote): INote;
  // delete(id: number): INote | null;
}