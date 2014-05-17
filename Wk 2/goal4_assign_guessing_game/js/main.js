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
var numGuess = 3;	// The number of guesses the user may have



// Self-executing function
(function (){

	// Generates random integer 1-10
	pcNum = Math.floor(Math.random() * 10 + 1);
	
	// Adds the event listener to the button
	button.addEventListener("click", checkGuess, false);
	
	function checkGuess(){
		
		// Stores the user input
		userGuess = input.value;
		
		// Checks the input to be a number 1-10
		if(isNumber(userGuess) && userGuess <=10 && userGuess >=1){
			
			if(pcNum == userGuess){
				output.innerHTML = "YOU WIN!! The number was: " + pcNum;
			}else if(userGuess > pcNum){
				output.innerHTML = "TOO HIGH! Try again!";
			}else if(userGuess < pcNum){
				output.innerHTML = "TOO LOW! Try again!";
			}
		}else{
			output.innerHTML = "Please enter a number, 1-10";
		}
		
	};
	
	// Function created to check if the input is a number
	function isNumber(num) {
  		return !isNaN(parseFloat(num)) && isFinite(num);
	};
	
		

})();