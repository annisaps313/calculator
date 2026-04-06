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
	if b === 0 return "Error";
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