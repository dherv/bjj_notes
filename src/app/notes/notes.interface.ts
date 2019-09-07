export interface INote {
  id: number;
  title: string;
}

export interface INoteRepository {
  get(): Promise<INote[]>;
  // getById(id: number): INote | undefined;
  add(note: INote): Promise<String>;
  // edit(id: number, note: INote): INote;
  // delete(id: number): INote | null;
}