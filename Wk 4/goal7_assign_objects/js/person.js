/**
 * Author: Jason Kastrup
 * Class: PWA-1
 * Goal: Goal7
 */


(function(){
	
	window.Person = Person;
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
		
		// Displays the first action of the person in the proper row
		var elementID = document.getElementById("R" + this.row + "c3");
		elementID.innerHTML = this.action;
	}

	
	

}());