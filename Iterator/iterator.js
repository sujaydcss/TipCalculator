
// class Calculate {
// 	constructor(billamt,tipPercent,numOfPeople) {
// 		this._billamt =  billamt;
// 		this._tipPercent = tipPercent;
// 		this._numOfPeople = numOfPeople;
// 		this._tips = 0.0;
// 	}

// 	validateParameter() {
// 		return this.validate();
// 	}

// 	calculation() {
// 		return this.makeCalculation();
// 	}
// 	getTipsByEach() {
// 		return this._tips;
// 	}
// }


// class Calculation extends Calculate {
// 	constructor(billamt,tipPercent,numOfPeople) {
// 		super(billamt,tipPercent,numOfPeople);
// 	}
	
// 	makeCalculation() {
// 		console.log(this._billamt+","+this._tipPercent+","+this._numOfPeople);
// 		this._tips = (this._billamt*this._tipPercent)/this._numOfPeople;
// 		this._tips = Math.round(this._tips*100)/100;
// 		this._tips = this._tips.toFixed(2);
// 		console.log(this._tips);
// 		return this;
// 	}
// }

function fatchValues() {
	var billAmt = document.getElementById("billamt").value;
	var tipPercent = document.getElementById("tipParcentage").value;
	var numOfPeople = document.getElementById("peopleamt").value;
	
	if(this._billAmt=== "" || this._tipPercent<0) {
		alert("Please enter valid input");
		return ;
	}
	if(this._numOfPeople === "" || this._numOfPeople <=1) {
		this._numOfPeople = 1;
		document.getElementById("each").innerHTML = "";
	}
	else {
		document.getElementById("each").innerHTML = "each";
	}

	var values = [billAmt,tipPercent,numOfPeople];
	console.log(values);

	// const calc = new Calculation(billAmt,tipPercent,numOfPeople);
	// calc.validateParameter().calculation();
	// document.getElementById("tip").innerHTML = calc._tips;
}

document.getElementById("calculate").onclick = function () {
	fatchValues();
};