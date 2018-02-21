var data = require("../data.json");

exports.addItem = function(req, res) {    

	console.log(req.query.itemName);
	console.log(req.query.quantity);
	var newItem = {"itemName": req.query.itemName, "quantity": req.query.quantity, listName: 'Grocery List'};
	data.item.push(newItem);

	var name = "Grocery List"
	// res.render('list', data);

	var pendingData = {'listName': name, 'db': []};
  
	console.log("logging data " + data.item.length)
	// var item;
	for (currentItem in data.item){

		console.log("rendering item.... ");
		console.log(data.item[currentItem]);

		if (data.item[currentItem].listName == (name)){
			pendingData.db.push(data.item[currentItem])
		} 
		else {
			console.log("not matching... ")
		}
	}
		
	console.log(pendingData);
	res.render('list', pendingData);
 };