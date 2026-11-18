const express = require('express');
const router = express.Router();

const userModel = require('../models/userModel');

router.get("/register", (req, res) => {
    res.render("register", {
        title: "Dont' Have An Account? Sign up here!"
    });
});

router.post("/register", (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const trimmedUsername = username.trim();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (trimmedUsername === "" || trimmedEmail === "" || trimmedPassword === "") {
        res.status(400).render('error', {
            title: "400 Error!",
            message: "You got a 400 error",
            statusCode: 400,
        });
    } else {
        userModel.createuser(trimmedUsername, trimmedEmail, trimmedPassword);
        res.render('UserIsMade', {
            title: 'Thank You! Your account is now being made!',
            message: 'Hey Hey! Get ready to get your new account!'
        });
    }
});

router.get("/login", (req, res) => {
    res.render("", {
        title: ""
    });
});

router.post("/login", (req, res) => {
   
});

router.post("/logout");

router.get("/account");



module.exports = router;