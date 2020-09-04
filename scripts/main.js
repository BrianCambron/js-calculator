window.onload = function functionAlert(){
  alert("hello"); //<- alerts hello onload
}
function pushNumber(event){
  alert(event.target.value);
}
const buttonElements = document.querySelectorAll('button.number');
buttonElements.forEach(function(button){
button.addEventListener ('click', pushNumber);
});

function pushOperator(event){
alert(event.target.value);
}
const operatorElements = document.querySelectorAll('button.operator', 'button.clear');
const clearElement = document.querySelectorAll('button.clear')
operatorElements.forEach(function(operator) {
operator.addEventListener('click', pushOperator);
clearElement.forEach(function(clear){
clear.addEventListener('click', pushOperator);
})
});
