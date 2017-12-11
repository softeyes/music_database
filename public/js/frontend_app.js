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
    $scope.genres = ["Rock", "Electronic", "Pop", "Rap", "R&B", "Country", "Latin", "J-Pop", "K-Pop", "Classical", "Folk", "Jazz", "Reggae", "Hip-Hop"];

    $scope.year_of_release = ["1900", "1901", "1902", "1903", "1904", "1905", "1906", "1907", "1908", "1909", "1910", "1911", "1912", "1913", "1914", "1915", "1916", "1917", "1918", "1919", "1920", "1921", "1922", "1923", "1924", "1925", "1926", "1927", "1928", "1929", "1930", "1931", "1932", "1933", "1934", "1935", "1936", "1937", "1938", "1939", "1940", "1941", "1942", "1943", "1944", "1945", "1946", "1947", "1948", "1949", "1950", "1951", "1952", "1953", "1954", "1955", "1956", "1957", "1958", "1959", "1960", "1961", "1962", "1963", "1964", "1965", "1966", "1967", "1968", "1969", "1970", "1971", "1972", "1973", "1974", "1975", "1976", "1977", "1978", "1979", "1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"];

    $scope.key_of_song = ["G", "C", "D", "A", "C#", "F", "Fm", "F#", "B", "Gm", "Dm", "F#m", "D#", "Cm", "C#m", "G#m", "D#m", "Bm", "E", "A#", "A#m", "G#", "Em"];

    $scope.sortType = 'artist'; // set the default sort type

    $scope.sortReverse = false; // set the default sort order

    $scope.read();

    $scope.create = function (song) {
        console.log('creating song entry');
        console.log(song)

        var data = {
            artist: $scope.input_artist,
            song_name: $scope.input_song_name,
            youtube_link: $scope.input_youtube_link,
            key_of_song: $scope.input_key_of_song,
            genre: $scope.input_genre,
            year_of_release: $scope.input_year_of_release
        }

        $http.post('/api/v6/create', data).then(function (results) {
            console.log(results);
            $scope.message = results.data.message
            $scope.read();
        });
    }

    $scope.update = function (song) {
        console.log('updating all data');
        console.log(song);

        $http.put('/api/v6/update', song).then(function (results) {
            console.log(results);
            $scope.message = results.data.message
            $scope.read();
        });
    }

    $scope.delete = function (song) {
        console.log('deleting all data');
        console.log(song);

        $http.delete('/api/v6/delete/' + song._id).then(function (results) {
            console.log(results);
            $scope.message = results.data.message
            $scope.read();
        });
    }
};

frontend_app.controller('filterCtrl', filterCtrl);

function filterCtrl($scope, $http) {
    $scope.searchSong = function () {
        console.log('reading all data');
        $http.get('/api/v6/read')
            .then(function (results) {
                console.log(results);
                $scope.songs = results.data;
            });
    }
};