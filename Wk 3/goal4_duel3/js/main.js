/**
 * Name: Jason Kastrup
 * Date: May 23, 2014
 * Assignment: The Duel #3
 */

// self-executing function
(function(){
	
	console.log("** FIGHT **");
	
	/*
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
	var fighter2_text = document.getElementByID("kratos");
	var round_text = document.getElementById("round");
	var button = document.getElementById("fight_btn");
	
	//Fighter Objects
	var fighters = [{name: "Kabal", damage: 20, health: 100}, 
		{name: "Kratos", damage: 20, health: 100}];
	
	// Keeps track of the rounds
	var round=1;
	
	// Creates an event listener for clicking on the fight button
	button.addEventListener("click", fight, false);
	
	function fight(){	// Function controlling the logic behind the fight
		console.log('in the fight function');
		
		round_text.innerHTML = "Click 'FIGHT BUTTON' to start!";
		fighter1_text.innerHTML = fighters[0].name + ": " + fighters[0].health;
		fighter2_text.innerHTML = fighters[1].name + ": " + fighters[1].health;
		
		// Determines the damage done by each fighter 
		//var f1 = Math.floor(Math.random()*(fighterA[1] - minDamage1)+minDamage1);
		//var f2 = Math.floor(Math.random()*(fighterB[1] - minDamage2)+minDamage
		var f1d = Math.floor(Math.random() * fighters[0].damage + fighters[0].danage * .5);
		var f2d = Math.floor(Math.random() * fighters[1].damage + fighters[1].danage * .5);
			
		// inflict damage
		//fighterA[2] -= f1;
		//fighterB[2] -= f2;		
		fighters[0].health -= f2d;
		fighters[1].health -= f1d;
		
		// Displays current health of each fighter
		console.log(fighters[0].name + ": " + fighters[0].health + " -- " + fighters[1].name + ": " + fighters[1].health);
		
		// checks for a winner and stores in 'results' - Displays the results of winnerCheck in console
		var results = winnerCheck();
		console.log(results);
		
		//Round results and round increment
		round_text.innerHTML = "ROUND #" + round + " Results:";
		round++;
		
		
		/*	
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
			result = "You Both Die!";
		}else if(fighters[0].health < 1){			// Occurs when fighter 1 is at/below 0 health
			result = fighters[1].name + " WINS!!";
		}else if(fighters[1].health < 1){			// Occurs when fighter 2 is at/below 0 health
			result = fighters[0].name + " WINS!!";
		}
	}
	
	/*
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
























