const goomup = document.getElementById("goomup")
const goomdown = document.getElementById("goomdown")
const bobup = document.getElementById("bobup")
const bobdown = document.getElementById("bobdown")
const cheepup = document.getElementById("cheepup")
const cheepdown = document.getElementById("cheepdown")
const totalbutton = document.getElementById("totalbutton")
var cheepcounter = document.getElementById("cheeptot")
var cheepcount = Number(localStorage.getItem("cheeptot"))
var bobcounter = document.getElementById("bobtot")
var bobcount = Number(localStorage.getItem("bobtot"))
var goomcounter = document.getElementById("goomtot")
var goomcount = Number(localStorage.getItem("goomtot"))
var total = document.getElementById("total")
var totalcount = Number(localStorage.getItem("total"))
total.textContent = totalcount;
bobcounter.textContent = bobcount;
goomcounter.textContent = goomcount;
cheepcounter.textContent = cheepcount;

goomup.addEventListener("click", function(e){
    e.preventDefault();
    goomcount++;
    totalcount+= 5;
    localStorage.setItem("goomup", goomcount);
    goomcounter.textContent = goomcount;
    total.textContent = totalcount
})
goomdown.addEventListener("click", function(e){
    e.preventDefault();
    goomcount--;
    totalcount-= 5;
    localStorage.setItem("goomdown", goomcount);
    goomcounter.textContent = goomcount;
    total.textContent = totalcount
})
bobup.addEventListener("click", function(e){
    e.preventDefault();
    bobcount++;
    totalcount+= 7;
    localStorage.setItem("bobup", bobcount);
    bobcounter.textContent = bobcount;
    total.textContent = totalcount
})
bobdown.addEventListener("click", function(e){
    e.preventDefault();
    bobcount--;
    totalcount-= 7;
    localStorage.setItem("bobdown", bobcount);
    bobcounter.textContent = bobcount;
    total.textContent = totalcount
})
cheepup.addEventListener("click", function(e){
    e.preventDefault();
    cheepcount++;
    totalcount+= 11;
    localStorage.setItem("cheepup", cheepcount);
    cheepcounter.textContent = cheepcount;
    total.textContent = totalcount
})
cheepdown.addEventListener("click", function(e){
    e.preventDefault();
    cheepcount--;
    totalcount-= 11;
    localStorage.setItem("cheepdown", cheepcount);
    cheepcounter.textContent = cheepcount;
    total.textContent = totalcount
})
