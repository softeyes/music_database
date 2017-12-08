var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var url = 'mongodb://localhost:27100/music'
mongoose.connect(url,{useMongoClient: true}); 

var song_data = {
    artist: String,
    song_name: String,
    youtube_link: String,
    key_of_sing: String,
    genre: String,
    year_of_release: Number
}

var song_schema = mongoose.Schema(song_data);

var SONGCLASS = mongoose.model('song', song_schema);

module.exports = SONGCLASS;