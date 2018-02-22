var data = require('../data.json');

exports.viewList = function(req, res) { 
  // controller code goes here 
  var name = req.params.name; 
  console.log("The List name is: " + name);

  var pendingData = {'listName': name, 'db': []};
  
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
  res.render('list', pendingData);

};    