
class Calculate {
	constructor(billamt,tipPercent,numOfPeople) {
		this.billamt =  billamt;
		this.tipPercent = tipPercent;
		this.numOfPeople = numOfPeople;
	}
	getTipByEach() {
		var tips = (this.billamt*this.tipPercent)/this.numOfPeople;
		tips = Math.round(tips*100)/100;
		tips = tips.toFixed(2);
		return tips;
	}
}

function validate(argument) {
	if(argument.billAmt=== "" || argument.tipPercent<0) {
		alert("Please enter valid input");
		return;
	}
	if (argument.numOfPeople === "" || argument.numOfPeople <=1) {
		argument.numOfPeople = 1;
		document.getElementById("each").innerHTML = "";
	}
	else {
		document.getElementById("each").innerHTML = "each";
	}
	return argument;
}



function calculateTip() {
	var billAmt = document.getElementById("billamt").value;
	var tipPercent = document.getElementById("tipParcentage").value;
	var numOfPeople = document.getElementById("peopleamt").value;

	
	var calculate = new Calculate(billAmt,tipPercent,numOfPeople);
	calculate = validate(calculate);
	document.getElementById("tip").innerHTML = calculate.getTipByEach(billAmt,tipPercent,numOfPeople);
}

document.getElementById("calculate").onclick = function () {
	calculateTip();
};