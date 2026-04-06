function add(a, b){
	return a + b;
}

function subs(a, b){
	return a - b;
}

function multiply(a, b){
	return a * b;
}

function division(a, b){
	if (b === 0) return "Error";
	return a / b;
}

function operate(a, operator, b){
	switch(operator){
		case "+": 
			return add(a, b);
		case "-":
			return subs(a, b);
		case "x":
			return multiply(a, b);
		case "/":
			return division(a, b);
		default:
			return null;
	}
}

let firstNum = "";
let secondNum = "";
let operator;
let isOperatorClicked;

function getBtnValue(){
	let display = document.querySelector(".display");
	let btn = document.querySelectorAll("button");

	btn.forEach((button) => {
		button.addEventListener("click", () => {
			let value = button.textContent;

			if (value === "Clear"){
				firstNum = "";
				secondNum = "";
				operator = null;
				isOperatorClicked = false;
				display.textContent = "";
			} else if (value === "+" || value === "-" || value === "x" || value === "/"){
				operator = value;
				isOperatorClicked = true;
			} else if (value === "="){
				let result = operate(+firstNum, operator, +secondNum);
				display.textContent = result;
				firstNum = result.toString();
				secondNum = "";
				operator = null;
				isOperatorClicked = false;
			} else {
				if (!isOperatorClicked){
					firstNum += value;
					display.textContent = firstNum;
				} else{
					secondNum += value;
					display.textContent = secondNum;
				}
			}
		})
	})
}

getBtnValue();