const express = require('express');
const router = express.Router();

router.get('/query', (req, res) => {
    if (!req.query.message || req.query.message.trim() === "") {
        res.status(400).send('Please provide a message');
    } else {
        res.render('queryResponse', {
            title: "The Query Message will now be recieved!",
            message: "Your Query Message now is:",
            queryMessage: req.query.message.trim()
        });
    }
});

router.get('/urlparams/:paramname', (req, res) => {
    if (!req.params.paramname || req.params.paramname.trim() === "") {
        res.status(400).send("You must send a valid parameter");
    } else {
        res.render('parameterResponse', {
            title: "urlparams message is here!",
            message: "Hey Hey! Your urlparams message now is:",
            parameterResponse: req.params.paramname.trim()
        });
    }
});

module.exports = router;
