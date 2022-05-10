const clicker = document.getElementById('clicker');
var counter = document.getElementById('clickCount');
var count = localStorage.getItem("clicker");
counter.textContent = count;

clicker.addEventListener("click", function(e){
    e.preventDefault()
    count++;
    localStorage.setItem("clicker", count);
    counter.textContent = count;
    
})