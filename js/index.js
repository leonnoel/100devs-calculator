let button = document.querySelectorAll(".button");
let calInput = document.querySelector(".calInput");
let submitButton = document.querySelector(".submitButton");
let buttonAC = document.querySelector(".buttonAC");

for (let index = 0; index < button.length; index++) {
	button[index].addEventListener("click", (e) => {
		let value = e.target.value;
		calculator.parseInput(value);
	});
}

const calculator = {
	displayText: "0",
	symbol: ["*", "/", "+", "-"],
	parseInput(value) {
		switch (value) {
			case "=":
				this.calcAnswer(this.displayText);
				break;
			case "AC":
				this.clearAll();
				break;
			case ".":
				if (this.displayText == 0) {
					this.addText("0.");
				} else {
					this.addText(value);
				}
				break;
			default:
				this.addText(value);
				break;
		}
	},

	addText(value) {
		if (this.displayText === "0") {
			this.displayText = "";
		}
		if (
			!this.symbol.includes(this.displayText[this.displayText.length - 1]) ||
			!this.symbol.includes(value)
		) {
			this.displayText += value;
			console.log(this.displayText);
			this.outputText(this.displayText);
		}
	},
	outputText(text) {
		calInput.value = text;
	},
	calcAnswer(equation) {
		this.displayText = "";
		let result = eval(equation);
		this.outputText(result);
	},
	clearAll() {
		this.displayText = "0";
		this.outputText(this.displayText);
	},
};

//Without Using Objects

// let ans = "";
// let symbol = ["*", "/", "+", "-"];
// for (let index = 0; index < button.length; index++) {
// 	button[index].addEventListener("click", (e) => {
// 		if (
// 			!symbol.includes(ans[ans.length - 1]) ||
// 			!symbol.includes(e.target.value)
// 		) {
// 			ans = ans += e.target.value;
// 			calInput.value = ans;
// 		}
// 	});
// }

// submitButton.addEventListener("click", (e) => {
// 	ans = eval(ans);
// 	console.log("final ans:", ans);
// 	calInput.value = ans;
// });

// buttonAC.addEventListener("click", () => {
// 	ans = "";
// 	calInput.value = ans;
// });

// function solveSingle(arr) {
// 	// console.log(arr);
// 	arr = arr.slice();
// 	// console.log("After Slice: ", arr);
// 	while (arr.length - 1) {
// 		// console.log("inside while");
// 		if (arr[1] === "*") arr[0] = arr[0] * arr[2];
// 		if (arr[1] === "-") arr[0] = arr[0] - arr[2];
// 		if (arr[1] === "+") arr[0] = +arr[0] + +arr[2];
// 		if (arr[1] === "/") arr[0] = arr[0] / arr[2];
// 		// console.log(arr);
// 		arr.splice(1, 1);
// 		// console.log(arr);
// 		arr.splice(1, 1);
// 	}
// 	return arr[0];
// }

// function solve(eq) {
// 	let res = eq.split(/(\+|-)/g).map((x) =>
// 		x
// 			.trim()
// 			.split(/(\*|\/)/g)
// 			.map((a) => a.trim())
// 	);
// 	console.log(res);
// 	res = res.map((x) => {
// 		console.log(x);
// 		return solveSingle(x);
// 	}); //evaluating nested * and  / operations.

// 	return solveSingle(res); //at last evaluating + and -
// }
// console.log(solve("22+23-17*2"));
