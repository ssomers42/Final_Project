var data = require('../data.json');

exports.viewList = function(req, res) { 
  // controller code goes here 
  var name = req.params.name; 
  console.log("The List name is: " + name);
  res.render('list', {
    'listName': name
  });
};

exports.view = function(req, res) { 
  // controller code goes here 
  console.log(data);
  res.render('list', data);
};
