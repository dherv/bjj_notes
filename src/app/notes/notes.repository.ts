import { INote, INoteRepository, INoteItem } from "./notes.interface";
import { Note, NoteModel, NoteWith } from "./notes.model"
import { MysqlError, Connection, FieldInfo, Pool, } from "mysql";
import { join } from "path";

export class NoteRepository implements INoteRepository {
    connection: Pool
    stmt: string
    constructor(connection: Pool) {
        this.connection = connection
        this.stmt = ""
    }

    private addNoteItems(items: INoteItem[], id: number) {
        // values need to be in the same order as properties in the objects
        console.log({ items })
        if (items.length > 0) {
            const stmt = `INSERT INTO note_items(content, order_number, note_id)  VALUES ?`
            const mapped_items = items.map(item => {
                // add FOREIGN_KEY note_id
                item.note_id = id
                // format object to array of values (content, note_id)
                return Object.values(item)
            })
            this.connection.query(stmt, [mapped_items], (err, results, fields) => {
                if (err) {
                    throw err.message
                    // return console.error(err.message);
                }
                // get inserted rows
                console.log('Row inserted:' + results.affectedRows);
            })
        }
    }

    get(): Promise<INote[]> {
        let stmt = `SELECT * FROM notes AS n`
        stmt += Note.with('teacher', ['name'])
        stmt += Note.with('position', ['name'])

        // 1. get the notes with teacher 
        const notes = new Promise((resolve: any, reject: any) => {
            return this.connection.query(stmt, (err: MysqlError, results: INote[], fields?: FieldInfo[]) => {
                if (err) {
                    return reject(err)
                }
                return resolve(results)
            })
        })

        // 2. get notes with note items map into it
        return notes.then((results: any) => {
            return Promise.all(results.map((result: any) => {
                return new Promise((resolve, reject) => {
                    this.connection.query(Note.withNoteItems(result.id), (err: MysqlError, results: INoteItem[], fields?: FieldInfo[]) => {
                        if (err) {
                            return reject(err)
                        }
                        result.note_items = results
                        return resolve(result)
                    })
                })
            })
            ).then((result: any) => {
                return result.map((note: any) => new NoteWith(note))
            }).catch(err => {
                console.error(err)
            })
        })

    }
    // getById(id: number): INote | undefined {
    //      return this.noteList.find((note: INote) => note.id == id);
    // }
    add(note: INote): Promise<String> {
        console.log("ADD", note)
        const stmt = `INSERT INTO notes SET ?`;

        //TODO: refactor with serializer type
        const items = note.note_items
        delete note.note_items

        return new Promise((resolve, reject) => {
            this.connection.query(stmt, note, (err: MysqlError | null, results: any, fields?: FieldInfo[]) => {
                if (err) {
                    return reject(err)
                }
                this.addNoteItems(items, results.insertId)
                return resolve(`Note id:${results.insertId} added`)
            });
        })
    }
    // edit(id: number, note: INote): INote {
    //     var targetIndex = this.noteList.findIndex((note => note.id == id));

    //     this.noteList[targetIndex].id = note.id;
    //     this.noteList[targetIndex].title = note.title;

    //     return this.noteList[targetIndex];

    // }
    // delete(id: number): INote | null {
    //     var targetIndex = this.noteList.findIndex((note => note.id == id));
    //     if (targetIndex < -1) return null;
    //     return this.noteList.splice(targetIndex, 1)[0];
    // }

}