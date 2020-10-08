console.log("I can do this!")

document.querySelector(".showRandS").addEventListener("click", function () {document.querySelector(".rulesAndScoring").classList.toggle("hidden") })

// toggle 
// move the RandS button outside of the DIV.
// create a new style

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
    checkPlayerScore: function () {
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
    
    document.querySelector(".userScore").innerHTML = `User: ${game.playerScore}`
    
    },
    
    checkCpuScore: function () {
        let a = parseInt(this.firstDice.getAttribute("value"))
        let b = parseInt(this.secondDice.getAttribute("value"))
        let c = parseInt(this.thirdDice.getAttribute("value"))
    // If triplets, add 100 points
        if (a === b && a === c) {
            game.cpuScore += 100
    // // Level 9000 = do all of below with one "else if"
        }  else if (a === b || b === c || a === c) {
            if (a === b) {
                game.cpuScore += a*10
                game.cpuScore += c  
            }
            else if (b === c) {
                game.cpuScore += b*10
                game.cpuScore += a
            }
            else {
                game.cpuScore += c*10
                game.cpuScore += b
            }
            }
        // Else add all three dice
        else (game.cpuScore += (a + b + c))
        
    document.querySelector(".cpuScore").innerHTML = `CPU: ${game.cpuScore}`
    },
    checkScores: function() {
        console.log(game)
        let cpu = game.cpuScore;
        let player = game.playerScore
        if(player >= 500){
            document.querySelector("button").style.visibility = "hidden"
            alert("User Won!");
        }
        if(cpu >= 500){
            document.querySelector("button").style.visibility = "hidden"
            alert("CPU Wins");
        }
        // Have score appear before the alert message
    }
}

// create a function that will allow each player to take a turn called "Run Turn" which will do below except checking the score 

function rollTheDice () {
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
}


    document.querySelector(".rollButton").addEventListener("click", function () {
        rollTheDice()
        setTimeout(function(){game.checkPlayerScore()}, 2000)
        setTimeout(function(){game.checkScores()}, 1000)
        // Hide the button
        document.querySelector(".rollButton").style.visibility = "hidden"    
        
        // set time interval for CPU to automatically go next
        // setTimeout(function(){rollTheDice()}, 3000)
        setTimeout(function(){
            rollTheDice();
            game.checkCpuScore();
            document.querySelector(".rollButton").style.visibility = "visible";
            game.checkScores()
        }, 2000)
        // reveal button after CpU Score is ran
    })

    // game.setFirstDice()
    // // Clear out the DIV (set inner HTMl to "")
    // let divOne = document.querySelector(".diceOne")
    // divOne.innerHTML = ""
    // // first store as a variable
    // let newDivOne = document.querySelector(".diceOne")
    // // Append game.firstDice to .diceOne
    // newDivOne.appendChild(game.firstDice)

    // game.setSecondDice()
    // let divTwo = document.querySelector(".diceTwo")
    // divTwo.innerHTML = ""
    // let newDivTwo = document.querySelector(".diceTwo")
    // newDivTwo.appendChild(game.secondDice)

    // game.setThirdDice()
    // let divThree = document.querySelector(".diceThree") 
    // divThree.innerHTML = ""
    // let newDivThree = document.querySelector(".diceThree")
    // newDivThree.appendChild(game.thirdDice)


// Stretch Goals


// Add an animation to the dice - a for loop that would change the src of the images


