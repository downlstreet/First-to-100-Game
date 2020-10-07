console.log("I can do this!")

// The "Roll Dice" button needs to get image to replace the icons




let game = {

    playerScore: 0,
    cpuScore: 0,
    firstDice: "",
    secondDice: "",
    thirdDice: "",


// The images need to be assigned to dice values
    setFirstDice: function () {
            const dice1 = document.createElement("img")
            // get a random number between 1 and 6; make
            let randomNumber = Math.floor(Math.random() * 6) + 1
            dice1.setAttribute("src", `images/DiceFace${randomNumber}.png`)
            dice1.setAttribute("value", randomNumber)
            this.firstDice = dice1
            console.log(this.firstDice.getAttribute("value"))
    },

    setSecondDice: function () {
        const dice2 = document.createElement("img")
        let randomNumber = Math.floor(Math.random() * 6) + 1
        dice2.setAttribute("src", `images/DiceFace${randomNumber}.png`)
        dice2.setAttribute("value", randomNumber)
        this.secondDice = dice2
        // console.log(dice2)
    },

    setThirdDice: function () {
        const dice3 = document.createElement("img")
        let randomNumber = Math.floor(Math.random()* 6) + 1
        dice3.setAttribute("src", `images/DiceFace${randomNumber}.png`)
        dice3.setAttribute("value", randomNumber)
        this.thirdDice = dice3
        // console.log(dice3)
    },

    // The dice need to add up depending on the values
    checkScore: function () {
        let a = parseInt(this.firstDice.getAttribute("value"))
        let b = parseInt(this.secondDice.getAttribute("value"))
        let c = parseInt(this.thirdDice.getAttribute("value"))
    // If triplets, add 100 points
        if (a === b && a === c) {
            game.playerScore += 100
    // // Level 9000 = do all of below with one "else if"
        }  else if (a === b || b === c || a === c) {
            if (a === b) {
                game.playerScore += a*10
                game.playerScore += c  
            }
            else if (b === c) {
                game.playerScore += b*10
                game.playerScore += a
            }
            else {
                game.playerScore += c*10
                game.playerScore += b
            }
            }
        // Else add all three dice
        else (game.playerScore += (a + b + c))
    
    document.querySelector(".userScore").innerHTML = `User Score: ${game.playerScore}`
    document.querySelector(".cpuScore").innerHTML = `CPU Score: ${game.cpuScore}`
    }   
}
    document.querySelector("button").addEventListener("click", function () {
    game.setFirstDice()
    // Clear out the DIV (set inner HTMl to "")
    let divOne = document.querySelector(".diceOne")
    divOne.innerHTML = ""
    // first store as a variable
    let newDivOne = document.querySelector(".diceOne")
    // Append game.firstDice to .diceOne
    newDivOne.appendChild(game.firstDice)

    game.setSecondDice()
    let divTwo = document.querySelector(".diceTwo")
    divTwo.innerHTML = ""
    let newDivTwo = document.querySelector(".diceTwo")
    newDivTwo.appendChild(game.secondDice)

    game.setThirdDice()
    let divThree = document.querySelector(".diceThree") 
    divThree.innerHTML = ""
    let newDivThree = document.querySelector(".diceThree")
    newDivThree.appendChild(game.thirdDice)

    game.checkScore()

})





// CPU needs to go automatically

// Toggle rules and points sections