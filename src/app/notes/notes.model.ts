import { INote, ListItem } from './notes.interface';

export class Note implements INote {
    title: String
    teacher: String;
    category: String;
    sub_category: String;
    comment: String;
    items: ListItem[];

    constructor(note: INote) {
        this.title = note.title
        this.teacher = note.teacher;
        this.category = note.category;
        this.sub_category = note.sub_category;
        this.comment = note.comment;
        this.items = note.items;
    }
}