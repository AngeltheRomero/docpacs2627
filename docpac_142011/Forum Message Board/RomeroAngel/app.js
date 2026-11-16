const express = require("express");
const sessions = require('express-session');
app.use(express.urlencoded({ extended: true }))
require('dotenv').config();
const app = express();
// Set EJS as view engine
app.set('view engine', 'ejs');

app.get('/ejs-demo', (req, res) => {
    res.render("index", {
        title: "Forum Page",
        appName: "Hi, this is the Forum Page"
    });
});


express.static()
express.urlencoded({ extended: false })

app.listen(port, () => {
    console.log(`${process.env.APP_NAME} is running on http://localhost:${port}`);
});


