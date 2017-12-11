var router = require('express').Router();
var SONGCLASS = require('../mongodb/mongoose_connection');
module.exports = router;

// render pages

router.get('/', do_homepage);
router.get('/database_for_admin', do_database_for_admin);
router.get('/database_for_users', do_database_for_users);
router.get('/database_for_users', do_database_for_users);
router.get('/login', do_login);
router.get('/signup', do_signup);

function do_homepage(req, res) {
    console.log('doing homepage');
    res.render('index');
}

function do_database_for_admin(req, res) {
    console.log('doing database for admin');
    res.render('database_for_admin');
}

function do_database_for_users(req, res) {
    console.log('doing database for users');
    res.render('database_for_users');
}

function do_login(req, res) {
    console.log('doing login');
    res.render('login');
}

function do_signup(req, res) {
    console.log('doing signup');
    res.render('signup');
}

// api

router.get('/api/v6/read', do_read);
router.post('/api/v6/create', do_create);
router.put('/api/v6/update', do_update);
router.delete('/api/v6/delete/:_id', do_delete);

function do_read(req, res) {
    console.log('getting all data');
    SONGCLASS.find()
        .then(function (results) {
            console.log(results);
            res.json(results);
        });
};

function do_create(req, res) {
    console.log('creating song entry');
    console.log(req.body);

    var data = {
        artist: req.body.artist,
        song_name: req.body.song_name,
        youtube_link: req.body.youtube_link,
        key_of_song: req.body.key_of_song,
        genre: req.body.genre,
        year_of_release: req.body.year_of_release
    }

    var song = new SONGCLASS(data);
    song.save()
        .then(function (result) {
            console.log(result);
            res.json({
                message: 'song entry saved!'
            })
        });
}

function do_update(req, res) {
    console.log('updating song entry');
    console.log(req.body)

    var update = {

        $set: {
            artist: req.body.artist,
            song_name: req.body.song_name,
            youtube_link: req.body.youtube_link,
            key_of_song: req.body.key_of_song,
            genre: req.body.genre,
            year_of_release: req.body.year_of_release
        }
    }

    SONGCLASS.findByIdAndUpdate(req.body._id, update)
        .then(function (result) {
            console.log(result);
            res.json({
                message: 'song entry updated!'
            })
        });
};

function do_delete(req, res) {
    console.log('deleting song entry');
    console.log(req.params)
    SONGCLASS.findByIdAndRemove(req.params._id)
        .then(function (result) {
            console.log(result);
            res.json({
                message: 'song entry deleted!'
            })
        });
}