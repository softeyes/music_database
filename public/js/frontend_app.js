var frontend_app = angular.module('song_app', []);
frontend_app.controller('all_songs', do_all_songs);

function do_all_songs($scope, $http) {

    $scope.read = function () {
        console.log('reading all data');
        $http.get('/api/v6/read')
            .then(function (results) {
                console.log(results);
                $scope.songs = results.data;
            })
    }
    $scope.read();

    $scope.genres = ["House", "Electro", "Pop", "SELECT GENRE"];

    $scope.year_of_release = ["1999", "2000", "2001", "2002", "2003", "SELECT YEAR OF RELEASE"];

    $scope.key_of_song = ["C", "Cb", "C#", "D", "SELECT KEY OF SONG"];

    $scope.sortType     = 'name'; // set the default sort type

    $scope.sortReverse  = false;  // set the default sort order

    $scope.searchSong   = '';     // set the default search/filter term
};