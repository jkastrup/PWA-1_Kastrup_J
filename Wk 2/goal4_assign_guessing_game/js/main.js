/**
 * GUESSING GAME:
 *
 * Created By: Jason Kastrup
 * Date: May 16, 2014
 * 
 * GUESSING GAME
 */

//Game variables
var pcNum = 0;	// stores the number to guessed by the user
var input = document.getElementById("input");	// Gets input text field element
var output = document.getElementById("output");	//	Gets ouput text element
var button = document.getElementById("button");	// Gets the button element

// Self-executing function
(function (){

	// Generates random integer 1-10
	pcNum = Math.floor(Math.random() * 10 + 1);
	
	// Adds the event listener to the button
	button.addEventListener("click", checkGuess, false);
	
	function checkGuess(){
		
	};
	
	function isNumber(num) {
  		return !isNaN(parseFloat(num)) && isFinite(num);
	};
	
		

})();