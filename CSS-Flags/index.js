// var result = document.querySelectorAll("#list")
// console.log(result.length)

var result = document.querySelectorAll("ol#list > li")
console.log(Array.from(result))

for (var i = 0; i< result.length; i++){
    result[i].textContent = "** REDACTED **"
}