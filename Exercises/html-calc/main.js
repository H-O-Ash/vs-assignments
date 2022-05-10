const add = document.add

add.addEventListener("submit", function(event){
    event.preventDefault()
    const firstAdd = add.firstAdd.value
    const secondAdd = add.secondAdd.value
    const h3 = document.getElementById("addResult")
    h3.textContent = (Number(firstAdd) + Number(secondAdd))

})
sub.addEventListener("submit", function(event){
    event.preventDefault()
    const firstSub = sub.firstSub.value
    const secondSub = sub.secondSub.value
    const h3 = document.getElementById("subResult")
    h3.textContent = (Number(firstSub) - Number(secondSub))
})
mult.addEventListener("submit", function(event){
    event.preventDefault()
    const firstMult = mult.firstMult.value
    const secondMult = mult.secondMult.value
    const h3 = document.getElementById("multResult")
    h3.textContent = (Number(firstMult) * Number(secondMult))
})