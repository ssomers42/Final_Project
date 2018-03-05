var data = require("../data.json");

exports.addItem = function(req, res) {    

	console.log(req.query.itemName);
	console.log(req.query.quantity);
	console.log(req.query.listName);
	console.log(req.query.dueDate);
	var newItem = {"itemName": req.query.itemName, "quantity": req.query.quantity, 
	"listName": req.query.currentListName, "dueDate": req.query.currentDueDate};
	data.item.push(newItem);

	var name = req.query.currentListName
	var due = req.query.currentDueDate
	// res.render('list', data);

	var pendingData = {'listName': name, 'dueDate':due, 'db': []};
  
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
	res.render('list_A', pendingData);
 };