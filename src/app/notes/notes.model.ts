import { INote, INoteItem } from './notes.interface';

export class Note {

    // title: String
    // teacher_id: String;
    // category_id: String;
    // sub_category_id: String;
    // comment: String;
    // note_items: INoteItem[];
    // class_date: Date

    // constructor(note: INote) {
    //     this.id = note.id
    //     this.title = note.title
    //     this.teacher_id = note.teacher_id;
    //     this.category_id = note.category_id;
    //     this.sub_category_id = note.sub_category_id;
    //     this.comment = note.comment;
    //     this.note_items = note.note_items;
    //     this.class_date = note.class_date
    // }

    static withNoteItems(id: Number) {
        return `(SELECT * FROM note_items where note_items.note_id = ${id})`
    }

    static with(table: String, select: String[]) {
        return ` (SELECT * FROM notes) AS n LEFT JOIN (SELECT id, ${select} as ${table}_name FROM ${table}s) AS ${table[0]} ON n.${table}_id = ${table[0]}.id`
    }

}