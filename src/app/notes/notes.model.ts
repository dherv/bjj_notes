import { INote, INoteItem } from './notes.interface';

export class NoteModel implements INote {
    id: Number;
    technique: String;
    teacher_name: String;
    position_id: Number;
    type: ["Defense", "Attack", null];
    comment: String;
    note_items: INoteItem[];
    class_date: String

    constructor(note: INote) {
        this.id = note.id
        this.technique = note.technique
        this.teacher_name = note.teacher_name;
        this.position_id = note.position_id
        this.type = note.type;
        this.comment = note.comment;
        this.note_items = note.note_items;
        this.class_date = note.class_date.toLocaleDateString()
    }

}

export class Note {
    static withNoteItems(id: Number) {
        return `(SELECT * FROM note_items where note_items.note_id = ${id})`
    }
    static with(table: String, select: String[]) {
        return ` (SELECT * FROM notes) AS n LEFT JOIN (SELECT id as ${table[0]}_id, ${select} as ${table}_name FROM ${table}s) AS ${table[0]} ON n.${table}_id = ${table[0]}_id`
    }

}