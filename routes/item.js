var data = require('../data.json');

exports.view = function(req, res) { 
  // controller code goes here 
  	console.log(data);
	res.render('list', data);
};

