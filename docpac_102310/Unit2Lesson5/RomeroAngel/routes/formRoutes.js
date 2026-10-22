const express = require('express');
const router = express.Router();
//const path = require('path');

//router.get('/form', (req, res) => {
//res.sendFile(path.join(__dirname, '..', 'public', 'form.html'));
//});

router.get('/form', (req, res) => {
    res.render('form', { title: 'Information Form', message: 'HEY YOU! Please Fill Out My Cool Wicked Radical Superb Form I Made For You!' });
});

router.post('/form', (req, res) => {
    let userName = req.body.userName;
    let trimmedName = userName.trim();

    if (trimmedName === "") {
        res.status(400).render('error', {
            title: "400 Error!",
            message: "You got a 400 error"
        });

    }
    else {
        console.log('Route was hit!');
        console.log(req.body);
        res.render('formResponse', {
            title: 'The Form You Submitted Is Coming Our Way!',
            message: 'Hey Hey!',
            userName: trimmedName
        });
    }
});

module.exports = router;