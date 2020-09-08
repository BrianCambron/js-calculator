// window.onload = function functionAlert(){
//   alert("hello"); //<- alerts hello onload
// }
let calculation = []; //<- empty array
console.log(calculation);

function pushNumber(event) {
  alert(event.target.value) //<- function to alert when a number is pushed
  calculation.push(event.target.value); //<- pushes number into empty array
  console.log(calculation);
}

const buttonElements = document.querySelectorAll('button.number');
buttonElements.forEach(function(button) {
  button.addEventListener('click', pushNumber, ); //<- for each function that every time a number is pressed you add an event listener to alert what button was pressed.
});

function pushOperator(event) {
  alert(event.target.value);
  calculation.push(event.target.value); //<- pushes operator into empty array
  console.log(calculation);
}
const operatorElements = document.querySelectorAll('button.operator');
operatorElements.forEach(function(operator) {
  operator.addEventListener('click', pushOperator); //<- for each function that every time an operator is pressed you add an event listener to alert what operator was pressed.
});
const equalsElement = document.querySelector('button.equal-sign');
const clearElement = document.querySelectorAll('button.clear')

function pushEqual(event) {
  // alert(event.target.value);
  let num1 = ''
  let num2 = ''
  let operator;
  let result;
  // console.log('calculation', calculation);
  for (let i = 0; i < calculation.length; i++) {
    if(['+','-','/','*'].includes(calculation[i])) {
      operator = calculation[i];
    } else if (operator) {
      num2 += calculation[i];
    } else {
      num1 += calculation[i];
    }
  }


  // console.log(num1, num2, operator);
  if (operator === '+') {
    result = parseFloat(num1) + parseFloat(num2);
  } else if (operator === '-') {
    result = parseFloat(num1) - parseFloat(num2);
  } else if (operator === '*') {
    result = parseFloat(num1) * parseFloat(num2);
  } else {
    result = parseFloat(num1) / parseFloat(num2);
  }
  alert(result);
}
equalsElement.addEventListener('click', pushEqual) //<- for each function that every time the equalsign is pressed you add an event listener to alert that the equal sign was pressed.

function pushClear(event) {
  alert(event.target.value);
  calculation.push(event.target.value) //<- pushes clear into the empty array
  console.log(calculation);
}
clearElement.forEach(function(clear) {
  clear.addEventListener('click', pushClear); //<- for each function that every time the clear button is pressed you add an event listener to alert the clear button was pressed.
});
