const Database = require('better-sqlite3');
let db;

try {
    db = new Database('forum.db');
} catch (error) {
    console.log("Database failed to start!")
}

const createuserTable = `
   CREATE TABLE IF NOT EXISTS userTable (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL, 
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  );
`

const createthreadsTable = `
   CREATE TABLE IF NOT EXISTS threadsTable (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id TEXT NOT NULL UNIQUE,
    body TEXT NOT NULL UNIQUE, 
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    user_id
  );
`

module.exports = db;