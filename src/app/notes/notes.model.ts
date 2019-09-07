import { INote } from './notes.interface';

export class Note implements INote {
    id: number
    title: string
    constructor(note: INote) {
        this.id = note.id
        this.title = note.title
    }
}