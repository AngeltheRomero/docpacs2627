
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
    password TEXT NOT NULL,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  );
`

module.exports = db;