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
var userGuess = 0;	// Stores the user's guess.

// Self-executing function
(function (){

	// Generates random integer 1-10
	pcNum = Math.floor(Math.random() * 10 + 1);
	
	// Adds the event listener to the button
	button.addEventListener("click", checkGuess, false);
	
	function checkGuess(){
		userGuess = input.value;
		
		if(isNumber(userGuess) && (userGuess <=10 && userGuess >= 1)){
			
		}else{
			output.value = "Please enter a NUMBER 1-10";
		}
		
	};
	
	// Function created to check if the input is a number
	function isNumber(num) {
  		return !isNaN(parseFloat(num)) && isFinite(num);
	};
	
		

})();