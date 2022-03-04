var dj = document.getElementById("dj");
var body = document.getElementById("page");
dj.addEventListener('mouseover', function(){
    dj.style.backgroundColor = "blue";
})
dj.addEventListener('mousedown', function(){
    dj.style.backgroundColor = "red";
})
dj.addEventListener('mouseup', function(){
    dj.style.backgroundColor = "yellow";
})
dj.addEventListener('dblclick', function(){
    dj.style.backgroundColor = "green"
})
body.addEventListener('wheel', function(){
    dj.style.backgroundColor = "orange"
})
body.addEventListener('keypress', function(event) {
    if (event.key === 'b'){
        dj.style.backgroundColor = "blue";
    } else if (event.key === 'r'){
        dj.style.backgroundColor = "red";
    } else if (event.key === 'y'){
        dj.style.backgroundColor = "yellow";
    } else if (event.key === 'g'){
        dj.style.backgroundColor = "green";
    } else if (event.key === "o"){
        dj.style.backgroundColor = "orange";
    }
})