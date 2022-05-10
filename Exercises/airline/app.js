const form = document.passengerForm
const sub = document.getElementById("submit")
var requests = document.getElementsByClassName("requests")
var first = document.getElementById('firstName')
var last = document.getElementById('lastName')
var age = document.getElementById("age")
var gender = form.gender.value

var request




// var age = document.age


// requests

sub.addEventListener("click", function(e){
    e.preventDefault();
    const checkInputs = []
    for(let i = 0; i < form.request.length; i++){
        if(form.request[i].checked){
            checkInputs.push(form.request[i].value)
        }
    }
    // message += "Gender: " + Array.from(gender.value)
    alert("First: " + first.value + '\n' + "Last: " + last.value + '\n' + "Age: " + age.value + '\n' + "Location: " + form.location.value + '\n' + "Gender: " + form.gender.value + '\n' + "Special Requests: " + checkInputs)

})
