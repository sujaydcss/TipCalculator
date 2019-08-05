var calculate = {
	billamt:0.0,
	tipPer:0.0,
	numOfPeople:0,
	tip:0.0,

	setValues : function(billAmt,tipPercent,numOfPeople) {
		this.billamt = billAmt;
		this.tipPer = tipPercent;
		this.numOfPeople = numOfPeople;
	},

	getTipByEach : function() {
		this.tip = (this.billamt*this.tipPer)/this.numOfPeople;
		this.tip = Math.round(this.tip*100)/100;
		this.tip = this.tip.toFixed(2);
		return this.tip;
	}
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
	
	var cal = Object.create(calculate);
	cal.setValues(billAmt,tipPercent,numOfPeople);
	document.getElementById("tip").innerHTML = cal.getTipByEach();
}

document.getElementById("calculate").onclick = function () {
	calculateTip();
};