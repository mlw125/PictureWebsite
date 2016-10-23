$(document).ready(function(){
	
	// variable to keep track of the current picture
	var count = -1;
	// this will change the type of picutres displayed, dogs is used by default
	var mode = "dog";

	// if the button for dogs is pressed
	$("#dogButton").click(function(){
		// change the message at the top of the screen
		$("#first").html("Here is a sweet pupper");
		// set the text inside the button to somethign else
		$("#dogButton").html("Random Doggo");
		// reset the gtext insie the other button
		$("#bearButton").html("Bear");
		// change the mode to dogs
		mode = "dog";
		
		// default to the first picture and reset count
		count = -1;
		$("#pic").attr("src", dogList[0]);
		// display the picutres if they are hidden
		$("#pic").show();
    }); // "dogButton".click()
	// if the bear button is pressed
	$("#bearButton").click(function(){
		// change the message at the top of the screen
		$("#first").html("Here is a sweet bearo");
		// set the text inside the button to somethign else
		$("#bearButton").html("Random Bearo");
		// reset the gtext insie the other button
		$("#dogButton").html("Dog");
		// change the mode to bears
		mode = "bear";
		
		// default to the first picture and reset count
		count = -1;
		$("#pic").attr("src", bearsList[0]);
		// display the picutres if they are hidden
		$("#pic").show();
    }); // "bearButton".click()
	// if the next button is pressed
	$("#nextButton").click(function(){
		// makes sure the pictures are visible
		$("#pic").show();
		
		// increment the count to the next value
		count++;
		
		// if we are displaying dogs
		if(mode == "dog") {
			// if we reach the last picture start over again
			if(count > dogList.length-1) {
				count = 0;
			} // end if
			// change the picutre to a new one
			$("#pic").attr("src", function() {
				console.log(count);
				return dogList[count]; 
			});	// end $("#pic").attr		
		} // end if
		// if we are displaying bears
		else if(mode == "bear") {
			// if we reach the last picture start over again
			if(count > bearsList.length-1) {
				count = 0;
			} // end if	
			// change the picutre to a new one
			$("#pic").attr("src", function() {
				console.log(count);
				return bearsList[count]; 
			}); // end $("#pic").attr	
		} // end else if
	}); // end nextButton.onclick()
	// if the previous button is pressed
	$("#prevButton").click(function(){
		// makes sure the pictures are visible
		$("#pic").show();
		
		// decrement the count to the next value
		count--;
		
		// if we are displaying dogs
		if(mode == "dog") {
			// if we reach the last picture start over again
			if(count < 0) {
				count = dogList.length-1;
			} // end if	
			// change the picutre to a new one
			$("#pic").attr("src", function() {
				console.log(count);
				return dogList[count]; 
			}); // end $("#pic").attr			
		} // end if
		// if we are displaying bears
		else if(mode == "bear") {
			// if we reach the last picture start over again
			if(count < 0) {
				count = bearsList.length-1;
			} // end if	
			// change the picutre to a new one
			$("#pic").attr("src", function() {
				console.log(count);
				return bearsList[count]; 
			});	// end $("#pic").attr		
		} // end else if
	}); // end prevButton.onclick()
	// if the random button is pressed
	$("#randButton").click(function() {
		// makes sure the pictures are visible
		$("#pic").show();
		
		// if we are displaying dogs
		if(mode == "dog") {
			// set count to a random number based somewhere inside the array of dog pics
			count = 1 + Math.floor(Math.random() * dogList.length-1);
			// change the picutre to a new one
			$("#pic").attr("src", function() {
				console.log(count);
				return dogList[count]; 
			}); // end $("#pic").attr		
		} // end if
		// if we are displaying bears
		else if(mode == "bear") {
			// set count to a random number based somewhere inside the array of bear pics
			count = 1 + Math.floor(Math.random() * bearsList.length-1);
			// change the picutre to a new one
			$("#pic").attr("src", function() {
				console.log(count);
				return bearsList[count]; 
			});	// end $("#pic").attr	
		} // end else if
	}); // end randButton.click()
}); // end .ready()

// This will read the text file and populate an array of picture names
$.get('dogs.txt', function(data) {
	dogList = data.split("\n");	
}, 'text'); // $.get();

// This will read the text file and populate an array of picture names
$.get('bears.txt', function(data) {
	bearsList = data.split("\n");	
}, 'text'); // $.get();

// holds the strongs of dog picture file names
var dogList;
// holds the strongs of bear picture file names
var bearsList;