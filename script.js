function greetUser() {
 let name = prompt("What is your name?");
 if (name) {
 document.getElementById("greeting").innerHTML = "Hello, " + name + 
"!";
	}	
}
function changeBackgroundColor() {
 document.body.style.backgroundColor = "lightblue";
 }
 function calculate() {
 let num1 = parseFloat(prompt("Enter first number:"));
 let num2 = parseFloat(prompt("Enter second number:"));
if (!isNaN(num1) && !isNaN(num2)) {
 document.getElementById("result").innerHTML = `
 Sum: ${num1 + num2} <br>
 Difference: ${num1 - num2} <br>
 Product: ${num1 * num2} <br>
 Quotient: ${num2 !== 0 ? num1 / num2 : "Cannot divide by zero"}
 `;
 }
 }
 function startCountdown() {
 let count = 10;
 let timer = setInterval(function() {
 document.getElementById("timer").innerHTML = count;
 count--;
 if (count < 0) {
 clearInterval(timer);
 document.getElementById("timer").innerHTML = "Time's up!";
 }
 }, 1000);
 }
 function validateForm() {
 let name = document.getElementById("name").value;
 if (name === "") {
 document.getElementById("error").innerHTML = "Name is required!";
 return false;
 }
 return true;
 }
 function addTask() {
 let task = document.getElementById("taskInput").value;
 if (task) {
 let li = document.createElement("li");
 li.textContent = task;
 document.getElementById("taskList").appendChild(li);
 document.getElementById("taskInput").value = "";
 }
 }
