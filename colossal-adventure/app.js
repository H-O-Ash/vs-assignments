var readline = require('readline-sync');


console.log("WELCOME TO THE JUNGLE");
const name = readline.question("CAN I GET YOUR NAME?! ");
console.log('*********************************************');
console.log('##  HEY ' + name + " YOU'RE IN THE JUNGLE BABY!  ##");
console.log('*********************************************');

// Events and Variables

var health = 100;
var inventory = ("Sword, ")
const enemies = ["lion", "babboon", "Tiger", "Snake"]
var running = true;
// Game code 

GAME:
while (running) {
    console.log("########################################################")
    if (health < 1) {
        console.log("Uh oh looks like you died, better luck next time")
        break;
    }
    //variables to change
    var walk = readline.keyIn("Enter 'W' to walk or 'E' to end the game. You can also enter 'P' for your current details")
    const randEvent = Math.floor(Math.random() * 2)
    const randEnemy = Math.floor(Math.random() * 3)
    var enemiesHP = Math.floor(Math.random() * 76)
    var dealt = Math.floor(Math.random() * 50)
    var lostHP = Math.floor(Math.random() * 50)

    if (walk === 'w') {
        if (randEvent === 1) {
            var enemy = enemies[randEnemy]
            console.log("Oh no a wild " + enemy + " has appeared!")
            var operations = ["Attack", "Run"]
            ATTACK:
            while (enemiesHP > 0) {
                const input = readline.keyInSelect(operations, "What should we do now?  ")
                if (input === 0) {
                    attack()
                    if (dealt > 0) {
                        damageDealt()
                        if (health < 1) {
                            break;
                        }
                    }
                    else {
                        console.log("Well that didnt do anything")
                    }
                } 
                else {
                    var randRun = Math.floor(Math.random() * 2)
                    if (randRun === 0) {
                        console.log("You thought you could get away that easy?")
                    }
                    else {
                        console.log("Looks like you got away this time, you're lucky.")
                        continue GAME;
                    }
                }
            }

            if (enemiesHP < 1) {
                enemyDied()
                continue GAME;
            }
        }
        else {
            console.log("Nothing yet, we better keep moving");
        }
    } else if (walk === 'e') {
        endGame()
        break;
    } else if (walk === 'p') {
        inventory()
    }
    else {
        wrongAnswer()
        continue;
    }
    function inventory() {
        console.log("Name: " + name)
        console.log("Your current HP is: " + health)
        console.log("Inventory: " + inventory)
    }
    function endGame() {
        console.log("Chickening out already? Sucks to suck loser.");
    }
    function wrongAnswer() {
        console.log("Uhhh not sure how you messed that up, try again");
    }
    function attack() {
        console.log("Guess we're gonna see how tough he is")
        console.log("####    WACK!!   ####")
    }
    function damageDealt() {
        console.log("That was very effective! You did " + dealt + " damage!")
        enemiesHP -= dealt
        health -= lostHP
        console.log("looks like you took some damage you now have " + health + " health.")
        console.log("The " + enemy + " now has " + enemiesHP + " health.")
    }
    function enemyDied() {
        console.log("You defeated the " + enemy + " amazing work!");
        health += 20;
        console.log("For all your hard work, heres some extra health and a gift ")
        console.log(health + " health points were added alog with a special gift.")
        inventory += ("Giant Gem Stone");
    }
}