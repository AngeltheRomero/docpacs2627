const express = require("express");
const sessions = require('express-session');
const app = express();
// Set EJS as view engine 
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(sessions({
    secret: "shushitsasupersecretsecret",
    resave: false,
    saveUninitialized: false,
    name: "ThisCookieSavesInfo",
    cookie: {
        httpOnly: true,
        sameSite: 'lax'
    }
}));

app.use((req, res, next) => {
    if (req.session.user) {
        const user = req.session.user;
        res.locals.username = user.username;
        res.locals.userId = user.userId;
        res.locals.isLoggedIn = true;
    }

    else {
        res.locals.isLoggedIn = false
    }

    next();
});

app.get('/', (req, res) => {
    res.render("index",
        {
            title: "Forum Page",
            appName: "Hi, this is the Forum Page",
            message: "This is a ejs page alright"
        });
});

app.get("/register", (req, res) => {
    if (req.session.user) {
        res.redirect("/")
    }
    else {
        res.render("register", {
            title: "Dont' Have An Account? Sign up here!",
            message: "We encourage new users to sign up and join the fun!",
            error: null
        });
    }
});

function validateEmail(email) {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return pattern.test(email);
}

app.post("/register", (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const PasswordRepeated = req.body.PasswordRepeated;

    const trimmedUsername = username.trim();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const trimmedPasswordRepeated = PasswordRepeated.trim();

    if (trimmedUsername === "" || trimmedEmail === "" || trimmedPassword === "" || trimmedPasswordRepeated === "") {
        res.status(400).render('register', {
            error: "Please Fill All Fields In Order To Make An Account And try Again!"
        });
    }
    else if (trimmedPassword !== trimmedPasswordRepeated) {
        res.status(400).render('register', {
            title: "Invalid Passwords!",
            message: "Welcoming All New Register! Don't Miss Out And Sign Up!",
            error: "Please Make Sure Both Passwords Match!"
        });
    }

    else if (trimmedUsername.length < 4 || trimmedUsername.length > 30) {
        res.status(400).render('register', {
            title: "Invalid username!",
            message: "The username provided isn't matched up to our requirements",
            error: "The username should be between 6 to 30 characters!"
        });
    }
    else if (trimmedEmail.length < 6 || trimmedEmail.length > 50) {
        res.status(400).render('register', {
            title: "Invalid Email Provided!",
            message: "This isn't a valid email we can take! Try again!",
            error: "The email should between 6-50 email"
        });
    }

    else if (!validateEmail(trimmedEmail)) {
        res.status(400).render('register', {
            title: "Invalid Email Provided!",
            message: "This isn't a valid email format we can take! Try again!",
            error: "The email should be a valid format!"
        });
    }

    else {
        const thisUserexists = userModel.findByUsername(trimmedUsername);
        if (thisUserexists) {
            res.status(400).render('register', {
                title: "Can't Use That Username!",
                error: "Sorry! But that username is already in use!",
                message: "No Can Do! That Username Is In Use! Maybe Try Altering Some Things"
            });
        }

        else {
            const thisEmailexists = userModel.findByEmail(trimmedEmail);
            if (thisEmailexists) {
                res.status(400).render('register', {
                    title: "Can't Use That Email!",
                    error: "Sorry! But that email is already in use!",
                    message: "That has been used before!"
                });
            }

            else {
                const result = userModel.createuser(trimmedUsername, trimmedEmail, trimmedPassword, trimmedPasswordRepeated, trimmedcolor);
                const user = userModel.findById(result.lastInsertRowid);
                req.session.user = user;
                res.redirect('/account');
            }
        }
    }
});

const PORT = 3120; app.listen(PORT, function (err) {
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
});