import { INote, INoteRepository } from "./notes.interface";
import { Note } from "./notes.model"
import { MysqlError, Connection, FieldInfo, } from "mysql";

export class NoteRepository implements INoteRepository {
    connection: Connection
    constructor(connection: Connection) {
        this.connection = connection
    }

    get(): Promise<INote[]> {
        const stmt = `SELECT * FROM notes`
        return new Promise((resolve, reject) => {
            this.connection.query(stmt, (err: MysqlError, results: INote[], fields?: FieldInfo[]) => {
                if (err) {
                    return reject(err)
                }
                return resolve(results)
            })
        })
    }
    // getById(id: number): INote | undefined {
    //      return this.noteList.find((note: INote) => note.id == id);
    // }
    add(note: INote): Promise<String> {
        const stmt = `INSERT INTO notes SET ?`;
        return new Promise((resolve, reject) => {
            this.connection.query(stmt, note, (err: MysqlError | null, results: any, fields?: FieldInfo[]) => {
                if (err) {
                    return reject(err)
                }
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