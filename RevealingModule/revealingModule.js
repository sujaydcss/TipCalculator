var calculate = (function () { //private method and variables
	let billamt = 0.0,tipPercent = 0.0,numOfPeople = 0;
	var tips = 0.0;

	function privateSetValues(ba,tp,np) {
		console.log(`Seted the values`);
		billamt = ba;
		tipPercent = tp;
		numOfPeople = np;
	}

	function calc() {
		tips =  (billamt*tipPercent)/numOfPeople;
		tips = Math.round(tips*100)/100;
		tips = tips.toFixed(2);
	}

	function getResult() {
		return tips;
	}


	return { //public method and variables
		setValues:privateSetValues,
		makeCalculation: calc,
		getTipByEach: getResult
	}
	
})();

function calculateTip() {
	var billAmt = document.getElementById("billamt").value;
	var tipPercent = document.getElementById("tipParcentage").value;
	var numOfPeople = document.getElementById("peopleamt").value;

	if(billAmt=== "" || tipPercent<0) {
		alert("Please enter valid input");
		return;
	}

	if (numOfPeople === "" || numOfPeople <=1) {
		numOfPeople = 1;
		document.getElementById("each").innerHTML = "";
	}
	else {
		document.getElementById("each").innerHTML = "each";
	}

	calculate.setValues(billAmt,tipPercent,numOfPeople);
	calculate.makeCalculation();
	document.getElementById("tip").innerHTML = calculate.getTipByEach();
}

document.getElementById("calculate").onclick = function () {
	calculateTip();
};