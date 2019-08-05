var mySingleton = (function () {
	var instance;
	function init() {
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

		return { 
			getTipByEach: function () { 
				return tipByEach;
			}
		};
	};
	return {
		getInstance: function () { //global point of access
			if (this.instance) {
				alert("Already one instance exists");
				return this.instance;
			}
			this.instance = init();
			return this.instance;
		}
	};
})();

function calculateTip() {
	var singleton = mySingleton.getInstance();
	document.getElementById("tip").innerHTML = singleton.getTipByEach();
}


document.getElementById("calculate").onclick = function () {
	calculateTip();
};