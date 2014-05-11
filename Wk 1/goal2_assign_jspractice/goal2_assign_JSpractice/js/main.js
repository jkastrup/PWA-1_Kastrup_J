/*
Activity:	Practice! Functions
Author:		Jason Kastrup
Date:		May 11, 2014
*/

// self-executing function
(function(){


    console.log('------ Goal2: Assignment: JavaScript Practice ----------');

    console.log("1. avg of an array of numbers");
    var avgNumbers = function(arr){
		// Creates two variables to hold the sum of the array, and its average
		var sum = 0,
			avgNum;
			
		for(i=0; i<arr.length; i++){	// Loops through the array adding each element to 'sum';
			sum += arr[i];
		}
		
		avgNum = sum / arr.length;	// Calculates the average of the array
		return avgNum;	// Returns the average 
		
    }

    console.log('avg number = ', avgNumbers([1,2,3,4,5]));

    //--------------------------------------------------------
    console.log("2. concat first and last name");

	var fullName = function(firstname, lastname){
		var concatName = firstname.concat(" " + lastname);	// Combines the first and last names into a single string
		
		return concatName;	// Returns the full name
		
	}

    console.log(fullName('James', 'Bond'));

    //--------------------------------------------------------
    console.log("3. word count");
    var ipsum = "this is test text that is being used as input to a function"

    var wordCount = function(longtext){
    	var numWords = longtext.split(' ').length;	// Calculates the number of words in the string by splitting it at the spaces
    	
    	return numWords;	// Returns the total number of words in the string
    }
    
    console.log(wordCount(ipsum));

    //--------------------------------------------------------
    console.log("4. sentence char count");

        //PUT FUNCTION HERE
    var charCount = function(longtext){
    	return longtext.length;	// returns the length of the string
    }
      
    console.log(charCount(ipsum));

    //--------------------------------------------------------
    console.log("5. how many vowels in a word");

        //PUT FUNCTION HERE
  	var vowelsInWord = function(word){
  		var numVowl = 0;	// stores the number of vowels
  		
  		for(i=0;i<word.length;i++){		// Loop searches through each index for a voewl
  			if('aouie'.search(word[i]) > -1){
  				numVowl++;	// Adds to the count of the number of vowels found
  			}
  		}
  		
  		return numVowl;	// Returns the number of vowels found
  	}


    console.log(vowelsInWord('JavaScript'));

    //--------------------------------------------------------
    console.log("6. find number and create an array of even or odd numbers");

        //PUT FUNCTION HERE
    var findNum = function(arrnum, bool){
    	
    	var newArray = [];	// stores new odd/even arrays
    	
    	if(bool === false || bool === null){	// checks 2nd parameter: if false or null, creates odd numbers array
    		for(i=0; i<arrnum.length; i++){
    			if(!(arrnum[i]%2==0)){			// If the element is not divisible by 2, it is odd
    				newArray[i] = arrnum[i];	// adds the odd number to the new array
    			}
    		}
    	}
    	else{									// Else, it will create even numbers array
    		for(i=0; i<arrnum.length; i++){
    			if(arrnum[i]%2==0){				// If the element is divisible by 2, it is even
    				newArray[i] = arrnum[i];	// adds the even number to the new array
    			}
    		}
    	}
    	
    	return newArray;	// returns the new even/odd array
    }
    console.log(findNum([31,22,4,67,83,6,5,4]));
    console.log(findNum([31,22,4,67,83,6,5,4], false));

})();