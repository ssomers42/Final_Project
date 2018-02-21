var data = require('../data.json');

/*
 * GET home page.
 */
exports.view = function(req, res){
	console.log('hello');
  res.render('index');
};

exports.logged = function(req, res) {
	res.render('indexLogged', data);
};