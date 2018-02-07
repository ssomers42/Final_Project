var foo = {"name": "hello"};

exports.viewList = function(req, res) { 
  // controller code goes here 
  var name = req.params.name; 
  console.log("The list name is: " + name);
  res.render('list', {
    'listName': name
  });
};