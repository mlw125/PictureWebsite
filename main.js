$(document).ready(function(){
	
	// variable to keep track of the current picture
	var count = -1;
	
	var mode = "dog";

	
	$("#dogButton").click(function(){
		// change the message at the top of the screen
		$("#first").html("Here is a sweet pupper");
		// set the text inside the button to somethign else
		$("#dogButton").html("Random Doggo");
		$("#bearButton").html("Bear");
		mode = "dog";
		
		count = -1;
		$("#pic").attr("src", dogList[0]);
		$("#pic").show();
    }); // "dogButton".click()
	
	$("#bearButton").click(function(){
		// change the message at the top of the screen
		$("#first").html("Here is a sweet bearo");
		// set the text inside the button to somethign else
		$("#bearButton").html("Random Bearo");
		$("#dogButton").html("Dog");
		mode = "bear";
		
		count = -1;
		$("#pic").attr("src", bearsList[0]);
		$("#pic").show();
    }); // "bearButton".click()
	
	$("#nextButton").click(function(){
		$("#pic").show();
		
		// increment the count to the next value
		count++;
		
		if(mode == "dog") {
			// if we reach the last picture start over again
			if(count > dogList.length-1) {
				count = 0;
			} // end if
			
			$("#pic").attr("src", function() {
				console.log(count);
				return dogList[count]; 
			});			
		} // end if
		else if(mode == "bear") {
			// if we reach the last picture start over again
			if(count > bearsList.length-1) {
				count = 0;
			} // end if	
			
			$("#pic").attr("src", function() {
				console.log(count);
				return bearsList[count]; 
			});	
		} // end else if
	}); // end nextButton.onclick()
	
	$("#prevButton").click(function(){
		$("#pic").show();
		
		// increment the count to the next value
		count--;
		
		if(mode == "dog") {
			// if we reach the last picture start over again
			if(count < 0) {
				count = dogList.length-1;
			} // end if	
			
			$("#pic").attr("src", function() {
				console.log(count);
				return dogList[count]; 
			});				
		} // end if
		else if(mode == "bear") {
			// if we reach the last picture start over again
			if(count < 0) {
				count = bearsList.length-1;
			} // end if	
			
			$("#pic").attr("src", function() {
				console.log(count);
				return bearsList[count]; 
			});		
		} // end else if
	}); // end prevButton.onclick()
	
	$("#randButton").click(function() {
		$("#pic").show();
		
		if(mode == "dog") {
			count = 1 + Math.floor(Math.random() * dogList.length-1);
			
			$("#pic").attr("src", function() {
				console.log(count);
				return dogList[count]; 
			});				
		} // end if
		else if(mode == "bear") {
			count = 1 + Math.floor(Math.random() * bearsList.length-1);
			
			$("#pic").attr("src", function() {
				console.log(count);
				return bearsList[count]; 
			});		
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

var dogList;
var bearsList;