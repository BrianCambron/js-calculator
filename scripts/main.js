window.onload = function functionAlert(){
  alert("hello");
}
function pushNumber(event){
  alert(event.target.value);
}
const buttonElements = document.querySelectorAll('button.number');
buttonElements.forEach(function(button){
button.addEventListener ('click', pushNumber);
});
