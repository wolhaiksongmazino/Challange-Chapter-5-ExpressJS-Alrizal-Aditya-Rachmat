var router = require('express').Router();



router.get('/', function(req, res) {
    res.render('home');
});

router.get('/game', function(req, res) {
    res.render('game');
});


router.get('/login', function(req, res) {
    res.render('login');
    // res.send("Belajar Membuat REST API dengan Express.");

});



module.exports = router;