var readlineSync = require('readline-sync');

var num1 = readlineSync.question("Please enter your first number ");
var num2 = readlineSync.question("Please enter your second number ");
var operations = ["add", "sub", "mul", "div"];
var selectOperation = readlineSync.keyInSelect(operations, "Please enter the operation to perform");


function addNum(num1, num2){
    console.log("The result is : " + (Number(num1) + Number(num2)));
}
function subNum(num1, num2){
    console.log("The result is : " + (Number(num1) - Number(num2)));
}
function mulNum(num1, num2){
    console.log("The result is : " + (Number(num1) * Number(num2)));
}
function divNum(num1, num2){
    console.log("The result is : " + (Number(num1) / Number(num2)));
}

if(selectOperation === 0){
    addNum(num1, num2);
}else if(selectOperation === 1){
    subNum(num1, num2)
}else if(selectOperation === 2){
    mulNum(num1, num2);
}else if(selectOperation === 3)
   divNum(num1, num2);