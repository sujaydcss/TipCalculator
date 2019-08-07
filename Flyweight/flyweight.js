
class Calculate {
	constructor(billamt,tipPercent,numOfPeople) {
		this.billamt =  billamt;
		this.tipPercent = tipPercent;
		this.numOfPeople = numOfPeople;
		//calculation for tips
		this.tips = (this.billamt*this.tipPercent)/this.numOfPeople;
		this.tips = Math.round(this.tips*100)/100;
		this.tips = this.tips.toFixed(2);
	}

}

class CalculateFactory {
	constructor() {
		this.objs = [];
	}
	calculateTip(ba,tp,np){
		let obj = this.getObj(ba,tp,np);

		if (obj) {
			console.log("obj are already present");
			return obj;
		}
		else {
			console.log("Object doesn't exist, creating new one\n");
			var calc = new Calculate(ba,tp,np);
			this.objs.push(calc);
			console.log("objs are ");
			console.log(this.objs);
			return calc;
		}

	}
	getObj(ba,tp,np) {
		return this.objs.find(obj=>(obj.billamt===ba && obj.tipPercent===tp && obj.numOfPeople===np));
	}
}


const calculateFactory = new CalculateFactory();

function fatchValues() {
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
	
	
	var calc = calculateFactory.calculateTip(billAmt,tipPercent,numOfPeople);
	// console.log(calc);
	document.getElementById("tip").innerHTML = calc.tips;
}

document.getElementById("calculate").onclick = function () {
	fatchValues();
};