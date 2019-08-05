class Calculate {
	constructor(billAmt,tipPercent,numOfPeople) {
		if(Calculate.exists) {
			alert("already one instances exists");
			return Calculate.instance;
		}
		this.tipByEach =  (billAmt*tipPercent)/numOfPeople;
		this.tipByEach = Math.round(this.tipByEach*100)/100;
		this.tipByEach = this.tipByEach.toFixed(2);
		Calculate.instance = this;
		Calculate.exists = true;

		return this;
	}
	getTipByEach() {
		return this.tipByEach;
	}
}

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
	
	var cal = new Calculate(billAmt,tipPercent,numOfPeople);
	document.getElementById("tip").innerHTML = cal.getTipByEach();
}

document.getElementById("calculate").onclick = function () {
	calculateTip();
};