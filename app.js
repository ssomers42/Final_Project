
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')


//Add Routes heres!!!!!
var index_A = require('./routes/index_A');
var list_A = require('./routes/list_A');
var login_A = require('./routes/login_A');
var index_B = require('./routes/index_B');
var list_B = require('./routes/list_B');
var login_B = require('./routes/login_B');

var add_A = require('./routes/add_A');
var add_B = require('./routes/add_B');

var help = require('./routes/help');
var edit = require('./routes/edit');
// var notes = require('./routes/notes');

// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//Add Routes heres!!!!!
app.get('/', index_A.view);

app.get('/index_A', index_A.view);
app.get('/list_A/:name', list_A.viewList);
app.get('/login_A', login_A.view);

app.get('/index_B', index_B.view);
app.get('/list_B/:name', list_B.viewList);
app.get('/login_B', login_B.view);

app.get('/help', help.view);
app.get('/edit', edit.view);
// app.get('/notes', notes.view);
app.get('/indexLogged_A', index_A.logged);
app.get('/indexLogged_B', index_B.logged);
app.get('/add_A', add_A.addItem);
app.get('/add_B', add_B.addItem);
app.get('/list_A', index_A.addList);
app.get('/list_B', index_B.addList);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
