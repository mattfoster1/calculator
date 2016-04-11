//Task - add a decimal point

var func1;
var ans;

var arg = {
	val1: "",
	func: "",
	val2: "",
	state: 1,
	chain: 0,
}

var maths = function() {
	console.log("maths()___");
	switch (arg.func) {
		case "plus":
			return JSON.parse(arg.val1) + JSON.parse(arg.val2);
			break;
		case "minus":
			return JSON.parse(arg.val1) - JSON.parse(arg.val2);
			break;
		case "multiply":
			return JSON.parse(arg.val1) * JSON.parse(arg.val2);
			break;
		case "divide":
			return JSON.parse(arg.val1) / JSON.parse(arg.val2);
			break;
	}
}

var fPress = function(fnc) {
	console.log("fpress()___")
	if (arg.chain === 1) {
		equals();
	}

	arg.func = fnc;
	arg.val1 = arg.val2;
	arg.val2 = "";
	console.log(arg.func);
	// arg.state++;
	arg.chain++;

}

var nPress = function(num) {
	console.log("nPress()___")
		numStr = JSON.stringify(num);
		arg.val2 += numStr;
		// arg["val" + arg.state] += numStr;
		console.log("arg2 = " + arg.val2);

		// document.getElementById("numDisp").innerHTML = arg["val" + arg.state];
		document.getElementById("numDisp").innerHTML = arg.val2;
	// }
}

var equals = function() {
	ans = maths();
	document.getElementById("numDisp").innerHTML = ans;

	console.log("equals");
	console.log(arg.val2);

	arg.val1 = ans;
	arg.val2 = "";
	arg.chain = 0;
	// return;

}

var del = function() {
	
	if (arg.val2) {
		console.log("delete!")
		arg.val2 = arg.val2.slice(0,-1)
		// var foo = JSON.stringify(arg.val2);
		// foo = foo.slice(1, -2);
		// foo.pop();
		document.getElementById("numDisp").innerHTML = arg.val2;
	}
}

//  bug - unable to chain and then tap equals