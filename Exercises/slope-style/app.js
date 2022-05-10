// function collectAnimals(...arr) {
//     console.log(arr)
// }

// collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
// // ["dog", "cat", "mouse", "jackolope", "platypus"]

////////////////////////////////////////

// function combineFruit(fruit, sweets, vegetables){
//     console.log({fruit, sweets, vegetables})
    
// }

// combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrot"])

///////////////////////////////////////

// function parseSentence({location, duration}){
//     return `We're going to have a good time in ${location} for ${duration}`
//   }
  
// parseSentence({
//     location: "Burly Idaho",
//     duration: "2 weeks"
//   });

///////////////////////////////////////

// function returnFirst(items){
//     const firstItem = {items}; /*change this line to be es6*/
//     return firstItem
// }

// console.log(returnFirst("porsche", "ford", "ferrari"))

///////////////////////////////////////

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr){
//     const firstFav = arr[0]
//     const secondFav = arr[1]
//     const thirdFav = arr[2]
    
//     return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav;
// }

// console.log(returnFavorites(favoriteActivities))

///////////////////////////////////////

// function combineAnimals() {
//     const all = [...realAnimals, ...magicalAnimals, ...mysteriousAnimals]
//     return all
// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// // ["dog", "cat", "mouse", "jackolope", "platypus"]

/////////////////////////////////////////

function populatePeople(names){
    return names.map(function(name){
        name = name.split(" ");
        const firstName = name[0]
        const lastName = name[1] 
        return {
            firstName: firstName,
            lastName: lastName
        }
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]
