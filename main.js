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
        // let newPlayerScore = document.querySelector(game.firstDice.getAttribute("value"))
        // let a = parseInt(newPlayerScore)
        // console.log(a)
        // if (parseInt(this.firstDice.getAttribute("value"))) {
        //     console.log(parseInt(this.firstDice.getAttribute("value")))
        // }
        

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
        },
    
    // Else If pair of 6s, add 60 points, plus value of the third dice
    //     } else if (a === 6 && b === 6 || a === 6 && c === 6 || a === 6 && c === 6) {game.playerScore += 60 
            
    // // Else if pair of 5s, add 50 points, plus value of the third dice
    //     } else if (a === 5 && b === 5 || a === 5 && c === 5 || a === 5 && c === 5) {game.playerScore += 50

    // // Else if pair of 4s, add 40 points, plus value of the third dice
    //     } else if (a === 4 && b === 4 || b === 4 && c === 4 || a === 4 && c === 4) {game.playerScore += 40 

    // // Else if pair of 3s, add 30 points, plus value of the third dice
    //     } else if (a === 3 && b === 3 || b === 3 && c === 3 || a === 3 && c === 3) {game.playerScore += 30

    // // Else if pair of 2s, add 20 points, plus value of the third dice
    //     } else if (a === 2 && b === 2 || b === 2 && c === 2 || a === 2 && c === 2) {game.playerScore += 20

    // // Else if pair of 1s, add 10 points, plus value of the third dice
    //     } else if (a === 1 && b === 1 || b === 1 && c === 1 || a === 1 && c === 1) {game.playerScore += 10

    
    document.querySelector(".userScore").innerHTML = `User Score: ${game.playerScore}`
        document.querySelector(".cpuScore").innerHTML = `CPU Score: ${game.cpuScore}`
    

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







