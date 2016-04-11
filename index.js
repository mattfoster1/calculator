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
	
	switch (arg.func) {
		case "plus":
		return JSON.parse(arg.val1) + JSON.parse(arg.val2);
		break;
	}
}

var fPress = function(fnc) {
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

//  bug - unable to chain and then tap equals