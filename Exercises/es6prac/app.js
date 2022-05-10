// const name = "John"
// const age = 101

// function runForLoop(pets) {
//     let petObjects = []
//     for (let i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])

/////////////////////////////////////////

// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map((carrot) => {
//         return { type: "carrot", name: carrot }
//     })
// }
// console.log(mapVegetables(carrots))

//////////////////////////////////////////

// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// function filterForFriendly(arr) {
//     return arr.filter((person) => {
//         return person.friendly
//     })
// }
// console.log(filterForFriendly(people))

///////////////////////////////////////

// var doMathSum = (a, b) => {
//     return a + b
// }

// var produceProduct = (a, b) => {
//     return a * b
// }
// console.log(doMathSum(1, 3))

///////////////////////////////////////

// const person = {fName: "Jane", lName: "Doe", age: 100}

// function printString(arr){
//     return (`Hi ${arr.fName} ${arr.lName}, how does it feel to be ${arr.age}?`)
// }

// console.log(printString(person))
///////////////////////////////////////

// const animals = [
//     {
//         type: "dog",
//         name: "theodore"
//     },
//     {
//         type: "cat",
//         name: "whiskers"
//     },
//     {
//         type: "pig",
//         name: "piglette"
//     },
//     {
//         type: "dog",
//         name: "sparky"
//     }
//  ];
 
//  function filterForDogs(arr) {
     
//     return arr.filter(animal => animal.type === "dog" ? true : false)
//  }
//  console.log(filterForDogs(animals))

////////////////////////////////////////

// const person = {name: "Janice", age: 100, location: "Hawaii"}
// const person2 = {name: "Frank", age: 99, location: "London"}

// function printOut(arr) {
    // return (`Hi ${arr.name}!

// Welcome to ${arr.location}.

// I hope you enjoy your stay. Please ask the president of ${arr.location} if you need anything.`)
// }
// console.log(printOut(person2))