const button = document.querySelector('button')! as HTMLButtonElement;
const input1 = document.getElementById('num1')! as HTMLInputElement;
const input2 = document.getElementById('num2')! as HTMLInputElement;

function add12(num1: number, num2: number) {
	return num1 + num2;
}

button.addEventListener('click', function () {
	console.log(add12(+input1.value, +input2.value));
});
