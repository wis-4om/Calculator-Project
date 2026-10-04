let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let output = document.getElementById("output");
let input1 = document.getElementById("value1");
let input2 = document.getElementById("value2");

plus.addEventListener("mousedown", function (e) {
  output.innerText = `Output: ${parseInt(input1.value) + parseInt(input2.value)}`;
});
minus.addEventListener("mousedown", function (e) {
  output.innerText = `Output: ${parseInt(input1.value) - parseInt(input2.value)}`;
});
multiply.addEventListener("mousedown", function (e) {
  output.innerText = `Output: ${parseInt(input1.value) * parseInt(input2.value)}`;
});
divide.addEventListener("mousedown", function (e) {
  output.innerText = `Output: ${parseInt(input1.value) / parseInt(input2.value)}`;
});
