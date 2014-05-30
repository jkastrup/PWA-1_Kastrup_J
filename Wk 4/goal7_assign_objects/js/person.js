/**
 * Author: Jason Kastrup
 * Class: PWA-1
 * Goal: Goal7
 */

// Self-executing function
(function(){
	
	// Adds the Person object to the global window object
	window.Person = Person;
	
	// Creates arrays to be used for random selection
	Person.jobs = ["Mechanic", "Astronaut", "Field Biologist", "Google CEO"];
	Person.actions = ["Sleep", "Work", "Potty Break", "Out on the town", "M.I.A."];


	function Person (name, row){
		console.log("New Person: " + name);
		
		// Sets the name and row of the person to the parameters of 'name' and 'row'
		this.name = name;
		this.row = row;
		
		// Selects a job and action at random from the relative array (Person.jobs or Person.actions) of possible selections
		this.job = Person.jobs[Math.floor(Math.random() * Person.jobs.length)];
		this.action = Person.actions[Math.floor(Math.random() * Person.actions.length)];
		
		// Displays the first action of the person in the proper row (Actions will be updated randomly)
		var elementID = document.getElementById("R" + this.row + "c3");
		elementID.innerHTML = this.action;
	}
	
	Person.prototype.update = function(){
		if(Math.floor(Math.random() < .01)){
			
			// Creates variable holders for an array index and element ID 
			var count = Math.floor(Math.random() * Person.actions.length);
			var elementID = document.getElementById("r" + this.row + "c3");
			
			// Uses the array index and element ID above to update the action and the form
			this.action = Person.actions[count];
			elementID.innerHTML = this.action;
		}
	}

	
	

}());