var data = require('../data.json');

exports.addItem = function(req, res) { 
  // controller code goes here 
  var newItem = {"name" : req.query.name};
  data.friends.push(newItem);
  res.render('list', data);
};

