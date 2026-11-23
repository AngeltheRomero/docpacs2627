const express = require("express");
const sessions = require('express-session');
const app = express();
// Set EJS as view engine 
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render("index",
        {
            title: "Forum Page",
            appName: "Hi, this is the Forum Page",
            message: "This is a ejs page alright"
        });
});

const PORT = 3120; app.listen(PORT, function (err) {
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
});