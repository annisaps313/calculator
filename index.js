const add = (a, b) => {
	return a + b;
}

const substract = (a, b) => {
	return a - b;
}

const multiply = (a, b) => {
	return a * b;
}

const divide = (a, b) => {
	return a / b;
}

let showFirstNum;
let showOperation;
let showSecondNum;

function operate(showFirstNum, showOperation, showSecondNum){
	return add(showFirstNum, showSecondNum);
}

function getBtnValue(btnValue){
	const btn = document.querySelectorAll('button');
	btn.forEach((button) =>{
		button.addEventListener("click", ()=>{
			btnValue = button.value;
		})
	})
}