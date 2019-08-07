
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

function calculation(ba,tp,np) {
	console.log("Result from proxy");
	var cal = new Calculate(ba,tp,np);	
	return cal;
}

const cache = [];
const proxyCalculation = new Proxy(calculation, {
	apply(target,thisArg,args) {
		const ba = args[0],tp = args[1],np = args[2];
		console.log(ba+" "+tp+" "+np);
		let obj = cache.find(obj=>(obj.billamt===ba && obj.tipPercent===tp && obj.numOfPeople===np));
		
		if (obj) {
			console.log("Result from Original");
			return obj.tips;
		}
		else {
			var calc = Reflect.apply(target,thisArg,args);
			console.log(calc);
			cache.push(calc);
			return calc.tips;
		}
	},
});



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

	document.getElementById("tip").innerHTML = proxyCalculation(billAmt,tipPercent,numOfPeople);
}

document.getElementById("calculate").onclick = function () {
	fatchValues();
};