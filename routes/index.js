
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index');
};

exports.logged = function(req, res) {
	res.render('indexLogged');
};