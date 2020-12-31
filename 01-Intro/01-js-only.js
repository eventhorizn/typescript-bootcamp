const buttonjs = document.querySelector("button");
const input1js = document.getElementById("num1");
const input2js = document.getElementById("num2");

function addJs(num1, num2) {
  return num1 + num2;
}

// So this is a potential way to fix
// But we don't even 'want' to pass strings into this
function addCheckJs(num1, num2) {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2;
  } else {
    return +num1 + +num2
  }
}

// input values are strings
// so we concat the numbers instead of adding
buttonjs.addEventListener("click", function () {
  console.log(addCheckJs(input1js.value, input2js.value));
});
