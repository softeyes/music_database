var express = require('express');
var backend_app = express();

var routes = require('./routes/main_routes')
var bodyParser = require('body-parser');
var port = 3700;

var passport = require('passport');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var flash    = require('connect-flash');

backend_app.set('view engine', 'ejs');
backend_app.use(express.static('public'));
backend_app.use( bodyParser.urlencoded( {extended:true} ) );
backend_app.use( bodyParser.json() );
backend_app.use(routes);

backend_app.listen(port,listening);
function listening(){
    console.log('broadcasting on localhost:' + port);
}
