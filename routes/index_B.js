var data = require('../data.json');

/*
 * GET home page.
 */
exports.view = function(req, res){
	console.log('hello');
  res.render('index_B');
};

exports.logged = function(req, res) {
	res.render('indexLogged_B', data);
};

exports.addList = function(req, res) {

  var newList = {"listName": req.query.listInput, "dueDate": req.query.due}
  data.names.push(newList);
  res.render('indexLogged_B', data);
}