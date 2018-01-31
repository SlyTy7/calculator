$(document).ready(function(){
	var prevNum;
	var currentNum = '';
  var operation;
	updateScreen('0');


	//function that sees what button is pressed and then changes the screen to reflect that
	$("button").click(function(){
		var buttonPressed = $(this).html();

		if(buttonPressed === "C"){
        prevNum = undefined;
			  currentNum = '';
        updateScreen(0);
		}else if (buttonPressed === "CE") {
        currentNum = '';
      	updateScreen(0);
    }else if (buttonPressed === "BK") {
        currentNum = currentNum.substring(0, currentNum.length - 1);
    		updateScreen(currentNum);
  	}else if (buttonPressed === "+/-") {
        currentNum = (parseFloat(currentNum) * -1).toString();
        console.log(currentNum);
      	updateScreen(currentNum);
  	}else if (buttonPressed === ".") {
        currentNum += ".";
        updateScreen(currentNum);
  	}else if (isNumber(buttonPressed)) {
        currentNum += buttonPressed;
        updateScreen(currentNum);
    }else if (isOperator(buttonPressed)) {
        //saves number on screen to prevNum
        prevNum = operate(prevNum, currentNum, operation);
        //resets currentNum
        currentNum = '';
        //saves its operation
        operation = buttonPressed;
        updateScreen(prevNum);
    }else if (buttonPressed === '=') {
        currentNum = operate(prevNum, currentNum, operation);
        //resets prevNum and operation
        prevNum = undefined;
        operation = undefined;
        updateScreen(currentNum);
    }
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
	
  if(x == undefined && operation == undefined){
    return parseFloat(y);
  }else{
    x = parseFloat(x);
    y = parseFloat(y);

    if (operation === '+') return x + y;
    if (operation === '-') return x - y;
    if (operation === '*') return x * y;
    if (operation === '/') return x / y;
  }
}