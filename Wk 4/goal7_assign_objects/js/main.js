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
	
	
	for(i = 0; i < numPeople; i++){
		
		var nameIndex = Math.floor(Math.random() * names.length);
		
		// Creates a new Person object (from person.js) each iteration with a random name, and a new row
		var person = new Person(names[nameIndex], i + 1);
		
	}


	function populateHTML(data, field){
		var elementID = document.getElementById(data);
		elementID.innerHTML = field;
	}


}());