$(document).ready(function(){
	var result = 0;
	var prevEntry = 0;
	var currentEntry = "0";
	updateScreen(result);


	//function that sees what button is pressed and then changes the screen to reflect that
	$("button").click(function(){
		var buttonPressed = $(this).html();

		if(buttonPressed === "C"){
			result = 0;
			currentEntry = "0";
		}else if (buttonPressed === "CE") {
      		currentEntry = '0';
    	}else if (buttonPressed === "BK") {
    		currentEntry = currentEntry.substring(0, currentEntry.length - 1);
    	}else if (buttonPressed === "+/-") {
      		currentEntry *= -1;
    	}else if (buttonPressed === ".") {
      		currentEntry += ".";
    	}else if (isNumber(buttonPressed)) {
      		if (currentEntry === '0'){
      			currentEntry = buttonPressed;
      		}else {
      			currentEntry = currentEntry + buttonPressed;
      		}
    	}else if (isOperator(buttonPressed)) {
      		prevEntry = parseFloat(currentEntry);
      		operation = buttonPressed;
      		currentEntry = '';
    	}else if (buttonPressed === '=') {
      		currentEntry = operate(prevEntry, currentEntry, operation);
      		operation = null;
    	}


    	updateScreen(currentEntry);
	});

});

//function that updates screen
function updateScreen(display){
	//change value of the screen to a string
	var display = display.toString();
	$(".screen").val(display);
}


function isNumber(val){
	return !isNaN(val);
}

function isOperator(value) {
 	return value === '/' || value === '*' || value === '+' || value === '-';
}

function operate(x, y, operation){
	x = parseFloat(x);
	y = parseFloat(y);
	
	if (operation === '+') return x + y;
 	if (operation === '-') return x - y;
 	if (operation === '*') return x * y;
 	if (operation === '/') return x / y;
}