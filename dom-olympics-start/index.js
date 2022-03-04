const h1 = document.createElement("h1");
h1.textContent = "JavaScript Made This!!";
document.getElementById("header").appendChild(h1);
const h3 = document.createElement("h3");
h3.innerHTML = '<span class="name">Hunter</span> wrote the JavaScript';
document.getElementById("header").appendChild(h3);
var message = document.getElementsByClassName("message");

message[0].textContent = "Hey man!";
message[1].textContent = "Whats Up!";
message[2].textContent = "Just hanging out at home!";
message[3].textContent = "Oh man come over and watch the game!";

var messages = document.getElementsByClassName("messages");
var clearButton = document.getElementById("clear-button")
clearButton.addEventListener('click', function(){
    messages[0].textContent = "";
})
