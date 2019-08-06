var calculate = (function () { //private method and variables
	let billamt = 0.0,tipPercent = 0.0,numOfPeople = 0;
	var tips = 0.0;

	function calc() {
		tips =  (billamt*tipPercent)/numOfPeople;
		tips = Math.round(tips*100)/100;
		tips = tips.toFixed(2);
	}
	return { //public method and variables
		setValues:function(ba,tp,np) {
			console.log(`Seted the values`);
			billamt = ba;
			tipPercent = tp;
			numOfPeople = np;
		},
		getTipByEach: function() {
			calc();
			console.log(`getting the calculated Tips ${tips}`);
			return tips;
		}
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
	document.getElementById("tip").innerHTML = calculate.getTipByEach();
}

document.getElementById("calculate").onclick = function () {
	calculateTip();
};