var readline = require('readline-sync');
class player{
    constructor(name, totalCoins= 1, status= 1, hasStar= false){
        this.playerName = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
        this.statuses = ["dead", "small", "big", "powered up"]
    }
    
    giveStar(){
        this.hasStar = true
    }
    gotPowerUp(){
        if(this.status < 3){
            this.status++
        } else{
            this.giveStar()
        }
    }
    gotHit(){
        if(this.hasStar === true){
            console.log("Your star saved you this time!")
            this.hasStar = false
        } else{
            this.status--
        }
    }
    addCoin(){
        this.totalCoins++
    }
    print(){
        console.log(`    Name: ${this.playerName}
    Status: ${this.statuses[this.status]}
    Coins: ${this.totalCoins}
    Do you have any stars? ${this.hasStar}`)
    }
    event(e){
        if(e === 0){
            this.gotHit()
        } else if(e === 1){
            this.gotPowerUp()
        } else if(e === 2){
            this.addCoin()
        }}
    
}

const Mario = new player("Mario", 1, 1, false)
const Luigi = new player("Luigi", 1, 1, false)
const players = ["Mario", "Luigi"]
const nameInput = readline.keyInSelect(players, `Please select a player
`)

const selected = nameInput === 1?Luigi: Mario
let gameTime = setInterval(function(){
    selected.print()
    const action = Math.floor(Math.random() * 3)
    selected.event(action)
    if(selected.status === 0){
        clearInterval(gameTime)
        console.log("Oh no! You'll get em next time!")
    } console.log(action)
}, 1000)