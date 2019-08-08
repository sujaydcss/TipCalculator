
class Calculate {
	constructor(billamt,tipPercent,numOfPeople) {
		this.billamt =  billamt;
		this.tipPercent = tipPercent;
		this.numOfPeople = numOfPeople;
		return this;
	}

	validate() {
		if(this.billAmt=== "" || this.tipPercent<0) {
			alert("Please enter valid input");
			return ;
		}
		if (this.numOfPeople === "" || this.numOfPeople <=1) {
			this.numOfPeople = 1;
			document.getElementById("each").innerHTML = "";
		}
		else {
			document.getElementById("each").innerHTML = "each";
		}
		return this;
	}

	calculation() {
		this.tips = (this.billamt*this.tipPercent)/this.numOfPeople;
		this.tips = Math.round(this.tips*100)/100;
		this.tips = this.tips.toFixed(2);
		return this;
	}
}


class Command {
	constructor(calc) {
		this.calc = calc;
	}
	execute(command) {
		return this.calc[command]();
	}
}

function fatchValues() {
	var billAmt = document.getElementById("billamt").value;
	var tipPercent = document.getElementById("tipParcentage").value;
	var numOfPeople = document.getElementById("peopleamt").value;

	var calc = new Calculate(billAmt,tipPercent,numOfPeople);
	const cmd = new Command(calc);
	calc = cmd.execute('validate');
	calc = cmd.execute('calculation');
	document.getElementById("tip").innerHTML = calc.tips;
}

document.getElementById("calculate").onclick = function () {
	fatchValues();
};