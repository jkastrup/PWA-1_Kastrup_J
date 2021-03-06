/**
 * Name: Jason Kastrup
 * Date: May 23, 2014
 * Assignment: The Duel #3
 */

/**
 * Some code from Week 2 still remains and is commented out.  
 * Some was deleted to make the code more legible.
 */

// self-executing function
(function(){
	
	console.log("** FIGHT **");
	
	/* (old code)
	// player name
	var playerOneName = "Spiderman";
	var playerTwoName = "Batman";
	
	// player damage
	var player1Damage = 20;
	var player2Damage = 20;
	
	// player health
	var playerOneHealth = 100;
	var playerTwoHealth = 100;
	
	
	// Fighters - (name, damage, health)
	var fighterA = ["Spiderman", 20, 100];
	var fighterB = ["Batman", 20, 100];
	*/
	
	// Stores HTML elements in variables
	var fighter1_text = document.getElementById("kabal");
	var fighter2_text = document.getElementById("kratos");
	var round_text = document.getElementById("round");
	var button = document.getElementById("fight_btn");
	
	//Fighter Objects
	var fighters = [{name: "Kabal", damage: 20, health: 100}, 
		{name: "Kratos", damage: 20, health: 100}];

	// Global variables for control	
	var round = 1;		// Keeps track of the rounds
	var winner = -1;	// Tracks the winning fighter for display purposes (default -1, 0 = fighter1, 1 = fighter2);
	
	// Creates an event listener for clicking on the fight button
	button.addEventListener("click", fight, false);
	
	// Sets up the page with proper labels
	round_text.innerHTML = "Click 'FIGHT BUTTON' to start!";
	fighter1_text.innerHTML = fighters[0].name + ": " + fighters[0].health;
	fighter2_text.innerHTML = fighters[1].name + ": " + fighters[1].health;
	
	function fight(){	// Function controlling the logic behind the fight
		console.log('in the fight function');
		
		// Determines the damage done by each fighter (old code)
		//var f1 = Math.floor(Math.random()*(fighterA[1] - minDamage1)+minDamage1);
		//var f2 = Math.floor(Math.random()*(fighterB[1] - minDamage2)+minDamage
		var f1d = Math.floor(Math.random() * fighters[0].damage + fighters[0].damage * .5);
		var f2d = Math.floor(Math.random() * fighters[1].damage + fighters[1].damage * .5);
			
		// inflict damage (old code)
		//fighterA[2] -= f1;
		//fighterB[2] -= f2;		
		fighters[0].health -= f1d;
		fighters[1].health -= f2d;
		
		// Displays current health of each fighter
		console.log(fighters[0].name + ": " + fighters[0].health + " -- " + fighters[1].name + ": " + fighters[1].health);
		
		// checks for a winner and stores in 'results' - Displays the results of winnerCheck in console
		var results = winnerCheck();
		console.log(results);
		
		//Round results and round increment
		round_text.innerHTML = "ROUND #" + round + " Results Above";
		round++;
		
		// Two options: No winner displays fighter names and health, A winner deactivates the game and displays the winner
		if(results === "no winner"){
			fighter1_text.innerHTML = fighters[0].name + ": " + fighters[0].health;
			fighter2_text.innerHTML = fighters[1].name + ": " + fighters[1].health;
		}else{	// Only satisfying condition is a winner
			// Displays the proper results
			if(winner === 0){		// Fighter 1 wins
				fighter1_text.innerHTML = results;
				fighter2_text.innerHTML = fighters[1].name + " has fallen.";
				round_text.innerHTML = fighters[0].name + " WINS in Round #" + round;
			}else if(winner === 1){	// Fighter 2 wins
				fighter1_text.innerHTML = fighters[0].name + " has fallen.";
				fighter2_text.innerHTML = results;
				round_text.innerHTML = fighters[1].name + " WINS in Round #" + round;
			}else{	// both died
				fighter1_text.innerHTML = fighters[0].name + " has fallen.";
				fighter2_text.innerHTML = fighters[1].name + " has fallen.";
				round_text.innerHTML = results;
			}
			
			// Disables the 'Fight' button
			button.removeEventListener("click", fight, false);
			document.getElementById("btn_text").innerHTML = "FINISHED";			
		}
		
		/*	 Old Code
		if(results === "no winner"){	// Continues to the next round
			round++;
			alert(fighterA[0]+":"+fighterA[2]+" *ROUND " + round + " OVER* "+fighterB[0]+":"+fighterB[2]);	// Displays player names, health, and round
		}else{
			alert(results);	// Displays the winner
			break	// ends the fight loop
		}; */
			
	};
	
	function winnerCheck(){
		console.log("in winnerCheck function:");
		
		// Holds the result of checking for a winner each round - Default "no winner"
		var result = "no winner";
		
		if(fighters[0].health < 1 && fighters[1].health < 1){	// Occurs if both fighters are at/below 0 health
			result = "BOTH fighters have FALLEN!";
			winner = 2;	// stores that both fighters died
		}else if(fighters[0].health < 1){			// Occurs when fighter 1 is at/below 0 health
			result = fighters[1].name + " WINS!!";
			winner = 1;	// stores that fighter 2 won
		}else if(fighters[1].health < 1){			// Occurs when fighter 2 is at/below 0 health
			result = fighters[0].name + " WINS!!";
			winner = 0;	// stores that fighter 1 won
		}
		
		// Gives the user the result of winnerCheck
		return result;
	}
	
	/* (Old code)
	function winnerCheck(){
		console.log("in winnerCheck FN");
		
		var result = "no winner";	// Default state
		
		if(fighterA[2]<1 && fighterB[2]<1){	// When both players go below 0 in the same round
			result = "You Both Die"
		}else if(fighterA[2]<1){			// WHen player 1 goes below 0, player two wins
			result = fighterB[0] + " WINS!!";	
		}else if(fighterB[2]<1){			// When player 2 goes below 0, player one wins
			result = fighterA[0] + " WINS!!";
		};
		
		return result;	// returns the results
		
	};
	
	/*******	Program Starts Below	******/
	console.log('program starts');
	
}());
























