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
var numGuess = 0;	// The number of guesses used



// Self-executing function
(function (){

	// Generates random integer 1-10
	pcNum = Math.floor(Math.random() * 10 + 1);
	//	console.log("The target number is: " + pcNum);	// Can be used to see the target number (cheats)
	
	// Adds the event listener to the button
	button.addEventListener("click", checkGuess, false);
	
	// Function used for the onClick event handler
	function checkGuess(){
		
		// Stores the user input
		userGuess = input.value;
		
		// Checks the input to be a number 1-10
		if(isNumber(userGuess) && userGuess <=10 && userGuess >=1){
			// Adds 1 to the guess counter
			numGuess++;
			
			// Checks for a winner, or tells the user higher or lower
			if(pcNum == userGuess){
				output.innerHTML = "YOU WIN!! The number was: " + pcNum;
				button.removeEventListener("click", guessCheck);	// Disables the click event for the button
			}else if(userGuess > pcNum){
				output.innerHTML = "That's too high. Guess: " + numGuess + ", Remaining: " + (3-numGuess);
			}else if(userGuess < pcNum){
				output.innerHTML = "That's too low. Guess: " + numGuess + ", Remaining: " + (3-numGuess);
			}
			
			if(numGuess > 2){
				output.innerHTML = "No more guesses left! The number was: " + pcNum;
				button.removeEventListener("click", checkGuess);	// Disables the click event for the button
			}
		// Catch statement prompting the user to try a different input	
		}else{
			output.innerHTML = "Please enter a number, 1-10";
		}
		
	};
	
	// Function created to check if the input is a number
	function isNumber(num) {
  		return !isNaN(parseFloat(num)) && isFinite(num);
	};
	
		

})();