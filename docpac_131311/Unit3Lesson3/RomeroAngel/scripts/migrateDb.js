const { DatabaseSync } = require('node:sqlite');
const fs = require('fs');
const { version } = require('os');
const console = require('console');

const db = new DatabaseSync('../app.db');

db.exec(`
    CREATE TABLE IF NOT EXISTS 
    schema_migrations(version TEXT PRIMARY KEY,
    applied_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
)
    `);

fs.readdir('./migrations', (err, files) => {
    if (err) {
        console.log(err);
    } else {

        console.log('Migration files found:', files);

        files.sort();

        const completedMigrations = db.prepare('SELECT version FROM schema_migrations').all();
        console.log('You should see this if it works!', completedMigrations);

        const pendingMigrations = []

        files.forEach(file => {
            const isCompleted = completedMigrations.find(migration => migration.version === file);

            if (!isCompleted) {
                pendingMigrations.push(file);
            }
        });
    }

});