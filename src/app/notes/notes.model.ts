import { INote, INoteItem, INoteWith } from './notes.interface';

export class NoteModel implements INote {
    id: Number;
    technique: String;
    teacher_id: Number;
    position_id: Number;
    type: ["Defense", "Attack", null];
    comment: String;
    note_items: INoteItem[];
    class_date: Date

    //TODO: Add optionals teacher_id and position_id
    constructor(note: any) {
        this.id = note.id
        this.technique = note.technique
        this.teacher_id = note.teacher_id
        this.position_id = note.position_id
        this.type = note.type;
        this.comment = note.comment;
        this.note_items = note.note_items;
        this.class_date = note.class_date.toLocaleDateString()
    }
}

export class NoteWith extends NoteModel {
    teacher_name?: String
    position_name?: String
    constructor(note: INoteWith) {
        super(note)
        this.teacher_name = note.teacher_name
        this.position_name = note.position_name
    }
}

export class Note {
    static withNoteItems(id: Number) {
        return `(SELECT * FROM note_items where note_items.note_id = ${id})`
    }
    //TODO: table should be oneOf teacher or position (all relations)
    static with(table: String, select: String[]) {
        return ` LEFT JOIN (SELECT id as ${table[0]}_id, ${select} as ${table}_name FROM ${table}s) AS ${table[0]} ON n.${table}_id = ${table[0]}_id`
    }
}