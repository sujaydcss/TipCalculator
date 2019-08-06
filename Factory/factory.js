class Calculate {
	constructor(options) {
		this.billamt = options.billamt;
		this.tipPercent = options.tipPercent;
		this.numOfPeople = options.numOfPeople;
	}
	getTipByEach() {
		var tips = (this.billamt*this.tipPercent)/this.numOfPeople;
		tips = Math.round(tips*100)/100;
		tips = tips.toFixed(2);
		return tips;
	}
}

class Calculation {}

Calculation.prototype.calc = function(options) {
	this.calClass = Calculate;
	return new this.calClass(options);	
};




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

	var calculation = new Calculation();
	var cal = new calculation.calc({
		billamt: billAmt,
		tipPercent: tipPercent,
		numOfPeople: numOfPeople
	});
	document.getElementById("tip").innerHTML = cal.getTipByEach();
}

document.getElementById("calculate").onclick = function () {
	calculateTip();
};