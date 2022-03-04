var readlineSync = require('readline-sync');

var operations = ["Put hand in hole", "Find the key"];
var selectOperation = readlineSync.keyInSelect(operations, "We're stuck in this room! What should we do!?");

function kill(){
    console.log("You're dead!")
}
function findKey(){
    console.log("You have found the key!");
    var readlineSync= require('readline-sync');
    var operations = ["Lets get out of here", "Put hand in the hole"];
    var selectOperation = readlineSync.keyInSelect(operations, "What now?")
    if(selectOperation === 0){
        console.log("We made it out!")
    }else if(selectOperation === 1){
        console.log("You're dead!")
    }
}

if(selectOperation === 0){
    kill()
}else if(selectOperation === 1){
    findKey()
}