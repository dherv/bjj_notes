export interface ListItem {
  content: String
  note_id: Number
}

export interface INote {
  title: String
  teacher: String;
  category: String;
  sub_category: String;
  comment: String;
  items: ListItem[];
}

export interface INoteRepository {
  get(): Promise<INote[]>;
  // getById(id: number): INote | undefined;
  add(note: INote): Promise<String>;
  // edit(id: number, note: INote): INote;
  // delete(id: number): INote | null;
}