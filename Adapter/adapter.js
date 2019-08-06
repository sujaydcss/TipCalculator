
class Calculate {
	calc(billamt,tipPercent,numOfPeople) {

		var tips =  (billamt*tipPercent)/numOfPeople;
		tips = Math.round(tips*100)/100;
		tips = tips.toFixed(2);
		return tips;
	}
}

class  Adapter {
	getTipByEach(ba,tp,np) {
		var calculate = new Calculate();
		return calculate.calc(ba,tp,np);
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
	var adapter = new Adapter();
	document.getElementById("tip").innerHTML = adapter.getTipByEach(billAmt,tipPercent,numOfPeople);
}

document.getElementById("calculate").onclick = function () {
	calculateTip();
};