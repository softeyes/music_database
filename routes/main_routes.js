var router = require('express').Router();
var SONGCLASS = require('../mongodb/mongoose_connection');
module.exports = router;

router.get('/', do_homepage);

function do_homepage(req, res){
    console.log('doing homepage');
    res.render('index');
}

// api

router.get('/api/v6/read', do_read);
router.post('/api/v6/create', do_create);
router.put('/api/v6/update', do_update);
router.delete('/api/v6/delete/:_id', do_delete);

function do_read(req, res) {
    console.log('getting all data');
    SONGCLASS.find()
        .then(function(results) {
            console.log(results);
            res.json(results);            
        });
};

function do_create(req, res) {
    console.log('creating user');
    console.log(req.body);

    var data = {
        artist: req.body.artist,
        song_name: req.body.song_name,
        youtube_link: req.body.youtube_link,
        key_of_string: req.body.key_of_string,
        genre: req.body.genre,
        year_of_release: req.body.year_of_release
        }

    var song = new SONGCLASS(data);
    song.save()
        .then(function(result){
            console.log(result);
            res.json({message: 'employee saved!'})
        });
    }

function do_update(req, res) {
    console.log('updating user');
    console.log(req.body)

    var update = {
        $set: {
            name: req.body.name,
            gender: req.body.gender,
            contact: {
                email: req.body.email,
                cell: req.body.cell,
                home: req.body.home
            }
        }
    }

    SONGCLASS.findByIdAndUpdate(req.body._id, update)
    .then(function(result){
        console.log(result);
        res.json({message: 'employee updated!'})
    })
};
    function do_delete(req, res) {
        console.log('deleting user');
        console.log(results)
        SONGCLASS.findByIdAndRemove(req.params._id)
        .then(function(result){
            console.log(result);
            res.json({message: 'employee deleted!'})
        });
    }