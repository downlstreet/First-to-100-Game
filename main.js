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
    
    document.querySelector(".userScore").innerHTML = `User Score: ${game.playerScore}`
    
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
        
    document.querySelector(".cpuScore").innerHTML = `CPU Score: ${game.cpuScore}`
    },
    checkScore: function() {
        console.log(game)
        let cpu = game.cpuScore;
        let player = game.playerScore
        if(player > 20){
            document.querySelector("button").style.visibility = "hidden"
            alert("player Won!");
        }
        if(cpu > 20){
            document.querySelector("button").style.visibility = "hidden"
            alert("player CPU!");
        }
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


    document.querySelector("button").addEventListener("click", function () {
        rollTheDice()
        game.checkPlayerScore()
        console.log(game, "#135")
        game.checkScore()
        // Hide the button
        document.querySelector("button").style.visibility = "hidden"
        
        // set time out
        
        
        // setTimeout(function(){rollTheDice()}, 3000)
        setTimeout(function(){
            rollTheDice();
            game.checkCpuScore();
            document.querySelector("button").style.visibility = "visible";
            game.checkScore()
        }, 1000)
        // reveal button after CpU Score is ran
    })

    // stop the game when a winner gets to 500
    // Pop ups for player wins vs CPU wins



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

    
    
    
    // set time interval for CPU to automatically go next 
    // call a function to make the CPU run it's turn

    // run the above function to 
    





// Toggle rules and points sections
// Add an animation to the dice -a for loop that would change the src of the images 
// Change font size of icons to make bigger - 
// 