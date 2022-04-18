const users = require('user.json');
const fs = require('fs');


app.post('/login/auth', (req, res) => {

    let username = req.body.username;
    let password = req.body.password;

    users.forEach(element => {
        if (element.username === username) {
            if (element.password === password) {
                return res.status(200).send("Login successful");

            } else {
                return res.status(404).send("Wrong password");
            }
        }
    });
    return res.status(404).send("username belum register");
});


module.exports = users;