$(document).ready(function(){

	var input = $("#user-input");


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

	console.log(add(1,2));


});