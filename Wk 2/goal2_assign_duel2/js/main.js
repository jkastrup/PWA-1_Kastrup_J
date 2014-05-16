/**
 * Name: Jason Kastrup
 * Date: May 16, 2014
 * Assignment: The Duel #2
 */

// self-executing function
(function(){
	
	console.log("FIGHT!!!");
	
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
	*/
	
	// Fighters - (name, damage, health)
	var fighterA = ["Spiderman", 20, 100];
	var fighterB = ["Batman", 20, 100];
	
		
	var round=0;	// keeps track of the rounds
	
	function fight(){	// Function controlling the logic behind the fight
		console.log('in the fight function');
		
		alert(fighterA[0]+":"+fighterA[2]+" *START* "+fighterB[0]+":"+fighterB[2]);	// displays player health and name
		
		for(var i=0; i<10; i++){
			
			// random formula is - Math.floor(Math.random() * (max - min) + min);
			var minDamage1 = fighterA[1] * .5;
			var minDamage2 = fighterB[1] * .5;
			var f1 = Math.floor(Math.random()*(fighterA[1] - minDamage1)+minDamage1);
			var f2 = Math.floor(Math.random()*(fighterB[1] - minDamage2)+minDamage2);
			
			// inflict damage
			fighterA[2] -= f1;
			fighterB[2] -= f2;
			
			console.log(fighterA[0] + ":" + fighterA[2] + " " + fighterB[0] + ":" + fighterB[2]);
			
			var results = winnerCheck();	// checks for a winner and stores in 'results'
			console.log(results);
			
			if(results === "no winner"){	// Continues to the next round
				round++;
				alert(fighterA[0]+":"+fighterA[2]+" *ROUND " + round + " OVER* "+fighterB[0]+":"+fighterB[2]);	// Displays player names, health, and round

			}else{
				alert(results);	// Displays the winner
				break	// ends the fight loop
			};
			
		};
		
	};
	
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
	fight();	// calls the fight function
	
}());
























