var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

var noVeg = vegetables.pop()
console.log(vegetables) 

var noFirst = fruit.shift()
console.log(fruit)

var fruitInd = fruit.indexOf("orange")
console.log(fruitInd)

var addNum = fruit.push(fruitInd)
console.log(fruit)

var vegLength = vegetables.length
console.log(vegLength)

var addVeg = vegetables.push(vegLength)
console.log(vegetables)

var foods = fruit.concat(vegetables)
console.log(foods)

var remFoods = foods.splice(4, 2)
console.log(foods)

var revFoods = foods.reverse()
console.log(foods)

var stringFoods = JSON.stringify(foods)
console.log(stringFoods)