const Database = require('better-sqlite3');
let db;

try {
    db = new Database('forum.db');
} catch (error) {
    console.log("Database failed to start!")
}

module.exports = db;