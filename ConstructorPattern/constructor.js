class Calculate {
	constructor(billAmt,tipPercent,numOfPeople) {. //constructor
		this.tipByEach =  (billAmt*tipPercent)/numOfPeople;
		this.tipByEach = Math.round(this.tipByEach*100)/100;
		this.tipByEach = this.tipByEach.toFixed(2);
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
	
	var cal = new Calculate(billAmt,tipPercent,numOfPeople); //object creation
	document.getElementById("tip").innerHTML = cal.getTipByEach();
}


document.getElementById("calculate").onclick = function () {
	calculateTip();
};