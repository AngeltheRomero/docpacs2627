const db = require('../models/database');

const createTableSQL = `
CREATE TABLE IF NOT EXISTS whatissubmitted(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    YouSubmittedAForm TEXT,
    DaSource TEXT,
    TheTimeStamp TEXT DEFAULT CURRENT_TIMESTAMP
)
`;

db.exec(createTableSQL);
console.log('Hey!Hey!TheDataBaseWasMade!');