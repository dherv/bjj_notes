import * as express from 'express';
import { INote } from './notes.interface';
import { MysqlError } from 'mysql';
import { Note } from './notes.model';

class NotesController {
    public path = '/notes';
    public router = express.Router();
    public repository: any

    constructor(repository: any) {
        this.intializeRoutes();
        this.repository = repository
    }

    public intializeRoutes() {
        this.router.get(this.path, this.getAllNotes);
        this.router.post(this.path, this.createNote);
    }

    getAllNotes = (request: express.Request, response: express.Response) => {
        return this.repository.get().then((notes: INote[]) => {
            response.send(notes);
        }).catch((error: MysqlError) => response.send(error.message))

    }

    createNote = (request: express.Request, response: express.Response) => {
        const body: INote = request.body
        const note: INote = new Note(body);

        this.repository.add(note).then((message: string) => {
            response.send(message);
        }).catch((error: MysqlError) => response.send(error.message))

    }
}

export default NotesController;