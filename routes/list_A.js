var data = require('../data.json');

exports.viewList = function(req, res) { 
  // controller code goes here 
  var pendingName = req.params.name; 
  name = pendingName.split("=")[0]
  dueDate = pendingName.split("=")[1]
  console.log("The List name is: " + name);

  var pendingData = {'listName': name, 'dueDate':dueDate, 'db': []};
  
  console.log("logging data " + data.item.length)
  // var item;
  for (currentItem in data.item){

  	console.log("rendering item.... ");
  	console.log(data.item[currentItem]);

	if (data.item[currentItem].listName == (name)){
		pendingData.db.push(data.item[currentItem])
	} else {
		console.log("not matching... ")
	}
  }
	
  console.log(pendingData);
  res.render('list_A', pendingData);

};    