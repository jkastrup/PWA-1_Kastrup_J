/*
Activity:	Practice! Functions
Author:		Jason Kastrup
Date:		May 11, 2014
*/

// self-executing function
(function(){

    /*******************************************

     STUDENTS ASSIGNMENT

     1.  create a function named 'avgNumbers'
         - accept 1 parameter into the function that will be an array of unlimited numbers
         - find the average of all the numbers
         - return the average from the function
         - console.log the answer outside of the function

     2.  create a function named 'fullName'
         - accept 2 parameters into the function that are strings (firstname and lastname)
         - return the name after it has been concatenated
         - console.log the answer outside of the function

     3.  create a function named 'wordCount'
         - accept 1 parameter into the function that is a long string of text words
         - create a function that counts all the words and return the answer
         - console.log the answer outside of the function

     4.  create a function named 'charCount'
         - accept 1 parameter into the function that is a long string of text
         - return length of the array of string characters
         - console.log the answer outside of the function

     5.  create a function named 'vowelsInWord'
         - accept 1 parameter into the function that is a a one word string
         - return the number of vowels in the word
         - console.log the answer outside of the function

     6.  create a function named 'findNum'
         - accepts 2 parameters into the function - 1. array of numbers, 2. boolean
         - if the second parameter being passed is "false" or null then
             - create an array with all of the odd numbers from
                the array
         - else - create an array with all of the even numbers
            from the array
         - return the array
         - console.log the answer outside of the function
     ********************************************/

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