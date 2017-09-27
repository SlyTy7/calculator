$(document).ready(function(){

	var result = 0;
	var prevEntry = 0;
	var currentEntry = "0";
	updateScreen(result);


	$("button").click(function(){
		const buttonPressed = $(this).html();
		console.log(buttonPressed);

		if(buttonPressed === "C"){
			result = 0;
			currentEntry = "0";
		}else if (buttonPressed === "CE") {
      		currentEntry = '0';
    	}


    	updateScreen(currentEntry);
	});







/*	var input = $("#user-input");


	$("#equals-button").click(function(){
		console.log(input.val());
	});

	$(".number-button").click(function(){
		var buttonVal = $(this).text();
		input.val("" + input.val() + "" + buttonVal);
	});

	$(".clear-button").click(function(){
		input.val("");
	});

	function add(x,y){
		return x + y;
	};

	console.log(add(1,2));*/


});

//function that updates screen
function updateScreen(display){
	//change value of the screen to a string
	var display = display.toString();
	$(".screen").val(display);
}