
class Calculate {
	constructor(billamt,tipPercent,numOfPeople) {
		this.billamt =  billamt;
		this.tipPercent = tipPercent;
		this.numOfPeople = numOfPeople;
	}
}

class CalculateFactory {
	calculateTip(ba,tp,np){
		let obj = new Calculate(ba,tp,np);
		this.validate(obj);
		return this.getTipsByEach(obj);
	}
	validate(obj) {
		if(obj.billamt=== "" || obj.tipPercent<0) {
			alert("Please enter valid input");
			return;
		}
		if (obj.numOfPeople === "" || obj.numOfPeople <=1) {
			obj.numOfPeople = 1;
			document.getElementById("each").innerHTML = "";
		}
		else {
			document.getElementById("each").innerHTML = "each";
		}
	}
	getTipsByEach(obj) {
		var tips = (obj.billamt*obj.tipPercent)/obj.numOfPeople;
		tips = Math.round(tips*100)/100;
		tips = tips.toFixed(2);
		return tips;
	}
}

function fatchValues() {
	var billAmt = document.getElementById("billamt").value;
	var tipPercent = document.getElementById("tipParcentage").value;
	var numOfPeople = document.getElementById("peopleamt").value;

	
	const calculateFactory = new CalculateFactory();
	document.getElementById("tip").innerHTML = calculateFactory.calculateTip(billAmt,tipPercent,numOfPeople);
}

document.getElementById("calculate").onclick = function () {
	fatchValues();
};