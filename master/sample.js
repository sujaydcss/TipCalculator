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
	
	var tipByEach =  (billAmt*tipPercent)/numOfPeople;
	tipByEach = Math.round(tipByEach*100)/100;
	tipByEach = tipByEach.toFixed(2);
	document.getElementById("tip").innerHTML = tipByEach;
}

// console.log(tipPercent);
document.getElementById("calculate").onclick = function () {
	calculateTip();
};