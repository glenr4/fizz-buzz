$(document).ready(function(){
	for(var i=1; i < 101; i++){
		var text = "";
		if (i % 3 === 0){
			text = "fizz";
		};
		if (i % 5 === 0){
			text += "buzz";
		};
		if (text === ""){
			text = i;
		};
		$("#fizz-buzz").append("<p>" + text);
	};
});