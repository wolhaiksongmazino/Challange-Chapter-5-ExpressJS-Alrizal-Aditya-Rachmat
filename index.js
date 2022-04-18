const express = require('express'); // Include ExpressJS
const app = express(); // Create an ExpressJS app
const bodyParser = require('body-parser'); // Middleware
const port = 3000 // Port we will listen on
const path = require('path');
const http = require('http')
const fs = require('fs')
const appRouting = require('./router/app-route');

var login = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join('public')));
app.use(bodyParser.json())
app.set('view engine', 'ejs')


const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('content-type', 'text/html')
    res.end('<h1>login success</h1>')
})
app.use(express.json());
//midleware
app.use('/', appRouting);
// Route to Homepage

app.get('/', (req, res) => {
    return res.render('home')
});

//midleware
app.use('/game', appRouting);

//Route to game page
app.get('/game', (req, res) => {
    return res.render('game')

});

// middleware
app.use('/login', appRouting);


// Route to Login Page
app.get('/login', (req, res) => {
    return res.render('login')
});

app.post('/login', (req, res) => {
    // Insert Login Code Here
    let username = req.body.username;
    let password = req.body.password;
    res.send(`Username: ${username} Password: ${password}`);
})


app.listen(port, () => console.log(`This app is listening on port ${port}`));