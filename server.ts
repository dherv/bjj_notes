import App from './app';
import NotesController from './src/app/notes/notes.controller';
import { NoteRepository } from './src/app/notes/notes.repository';

import * as mysql from 'mysql'
import * as database from './src/config/database'

(async () => {
  let connection;
  try {
    // create a single connection
    connection = await mysql.createConnection(database.config);

  } catch (error) {
    console.log('Error while connecting to the database', error);
    return error;
  }
  const app = new App(
    [
      new NotesController(new NoteRepository(connection)),
    ],
  );
  app.listen();
})();