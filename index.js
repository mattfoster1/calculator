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

var n = 0;
var hh;
var ww;
var contScal;
var featCont = document.getElementsByClassName("featCont");

var id11;
var showFeatures = function() {
	interval1 = setInterval(feat, 20);
	console.log("click");
	document.getElementById("feat1").style.height = "0px";
	document.getElementById("feat1").style.width = "0px";
	document.getElementById("feat1").style.display = "block";
}



var feat = function() {
	hh = document.getElementById("feat1").style.height;
	ww = document.getElementById("feat1").style.width;
	ll = document.getElementById("feat1").left;
	

	if (document.getElementById("feat1").style.height >= "80%" || document.getElementById("feat1").style.width >= "70%") {
		clearInterval(interval1);
		
	} else {
		document.getElementById("feat1").style.height = parseInt(hh) + 5 + "%";
		document.getElementById("feat1").style.width = parseInt(ww) + 5 + "%";
		
		n++;
	}
	if (document.getElementById("feat1").style.height >= "30%" || document.getElementById("feat1").style.width >= "30%") {
		for (n=0; n < featCont.length; n++) {
			featCont[n].style.display = "block";
			// console.log("op = " + featCont[n].style.display);
		}
	}
}

var hideFeat = function() {
	interval2 = setInterval(hideFeat2, 5);
	console.log("close clicked");
	console.log("close___");

}

var hideFeat2 = function() {
	hh = document.getElementById("feat1").style.height;
	ww = document.getElementById("feat1").style.width;


	if (document.getElementById("feat1").style.height <= "0%" || document.getElementById("feat1").style.width <= "0%") {
	document.getElementById("feat1").style.display = "none";
	clearInterval(interval2);
	// console.log("interval2 cleared");
		
	} else {
		document.getElementById("feat1").style.height = parseInt(hh) - 2 + "%";
		document.getElementById("feat1").style.width = parseInt(ww) - 2 + "%";

		n++;
		// console.log("else");
	}
		//hides feat content when page gets too small
	if (document.getElementById("feat1").style.height <= "30%" || document.getElementById("feat1").style.width <= "30%") {
		for (n=0; n < featCont.length; n++) {
			featCont[n].style.display = "none";
			// console.log("op = " + featCont[n].style.display);
		}
	}

	
	
}