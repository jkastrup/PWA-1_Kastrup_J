/**
 * Author: Jason Kastrup
 * Class: PWA-1
 * Goal: Goal7
 */
// Self executing function
(function(){
	
	// Array of names to be randomly selected and the amount of people to be created
	var names = ["Jason", "John", "Lauren", "Sara", "Garek"];
	var numPeople = 3;
	
	// An array that will be used to store the created Person objects and the interval to update their actions
	var allPeople = [];
	var interval;
	
	console.log(names + " " + numPeople);
	
	
	for(i = 0; i < numPeople; i++){
		// Stores a random index used to determine the name of the person
		var nameIndex = Math.floor(Math.random() * names.length);
		
		// Creates a new Person object (from person.js) each iteration with a random name, and a new row
		var person = new Person(names[nameIndex], i + 1);
		
		console.log("Index#: " + nameIndex + ", Person: " + person);
		
	}


	function populateHTML(data, field){
		console.log("Data: " + data + " Field: " + field);
		
		// Gets and stores the page location of the person's property 
		var elementID = document.getElementById(field);
		
		// Updates the HTML text of the person's property 
		elementID.innerHTML = data;
	}
	
	
	// runUpdate function: calls the update() method of the Person object for every person in the array
	function runUpdate(){
		allPeople.forEach(function(person)){
			console.log(person);
			person.update();
		}
	}
	


}());