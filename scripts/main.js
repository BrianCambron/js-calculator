// window.onload = function functionAlert(){
//   alert("hello"); //<- alerts hello onload
// }
let calculation = [];
function pushNumber(event){
  alert(event.target.value);
}

const buttonElements = document.querySelectorAll('button.number');
const equalsElement = document.querySelectorAll('button.equal-sign');
console.log(calculation);
buttonElements.forEach(function(button){
button.addEventListener('click', pushNumber,);
button.addEventListener('click', function(){
  calculation.push(button.value);
  console.log(calculation);
})
equalsElement.forEach(function calculate(equalsign){
equalsign.addEventListener('click', pushNumber)
})
});

function pushOperator(event){
alert(event.target.value);
}
const operatorElements = document.querySelectorAll('button.operator');
operatorElements.forEach(function(operator) {
operator.addEventListener('click', pushOperator);
operator.addEventListener('click', function(){
  calculation.push(operator.value);
  console.log(calculation);
})
});
const clearElement = document.querySelectorAll('button.clear')
function pushClear(event){
alert(event.target.value);
}
clearElement.forEach(function(clear){
clear.addEventListener('click', pushClear);
clear.addEventListener('click', function(){
  calculation.push(clear.value);
  console.log(calculation);
})
});
