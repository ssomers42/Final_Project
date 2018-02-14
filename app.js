
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')


//Add Routes heres!!!!!
var index = require('./routes/index');
var list = require('./routes/list');
//var item = require('./routes/item');
var login = require('./routes/login');
var help = require('./routes/help');
var edit = require('./routes/edit');
var notes = require('./routes/notes');
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
app.get('/', index.view);
app.get('/list/:name', list.viewList);
app.get('/list/:name', list.view)
//app.get('/item', item.addItem);
app.get('/login', login.view);
app.get('/help', help.view);
app.get('/edit', edit.view);
app.get('/notes', notes.view);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
