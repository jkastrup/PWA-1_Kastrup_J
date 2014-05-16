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
	var fighter1 = ["Spiderman", 20, 100];
	var fighter2 = ["Batman", 20, 100];
	
		
	var round=0;	// keeps track of the rounds
	
	function fight(){	// Function controlling the logic behind the fight
		console.log('in the fight function');
		
		alert(playerOneName+":"+playerOneHealth+" *START* "+playerTwoName+":"+playerTwoHealth);	// displays player health and name
		
		for(var i=0; i<10; i++){
			
			// random formula is - Math.floor(Math.random() * (max - min) + min);
			var minDamage1 = figher1[1] * .5;
			var minDamage2 = figher2[1] * .5;
			var f1 = Math.floor(Math.random()*(fighter1[1] - minDamage1)+minDamage1);
			var f2 = Math.floor(Math.random()*(fighter2[1] - minDamage2)+minDamage2);
			
			// inflict damage
			fighter1[2] -= f1;
			fighter2[2] -= f2;
			
			console.log(fighter1[0] + ":" + fighter1[2] + " " + fighter2[0] + ":" + fighter2[2]);
			
			var results = winnerCheck();	// checks for a winner and stores in 'results'
			console.log(results);
			
			if(results === "no winner"){	// Continues to the next round
				round++;
				alert(fighter1[0]+":"+fighter1[2]+" *ROUND " + round + " OVER* "+fighter2[0]+":"+fighter2[2]);	// Displays player names, health, and round

			}else{
				alert(results);	// Displays the winner
				break	// ends the fight loop
			};
			
		};
		
	};
	
	function winnerCheck(){
		console.log("in winnerCheck FN");
		
		var result = "no winner";	// Default state
		
		if(fighter1[2]<1 && fighter2[2]<1){	// When both players go below 0 in the same round
			result = "You Both Die"
		}else if(fighter1[2]<1){			// WHen player 1 goes below 0, player two wins
			result = fighter2[0] + " WINS!!";	
		}else if(fighter2[2]<1){			// When player 2 goes below 0, player one wins
			result = fighter1[0] + " WINS!!";
		};
		
		return result;	// returns the results
		
	};
	
	
	/*******	Program Starts Below	******/
	console.log('program starts');
	fight();	// calls the fight function
	
}());
























