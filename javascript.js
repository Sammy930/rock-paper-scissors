const R = "rock", P = "paper", S = "scissor";

let humanScore = 0, computerScore = 0;


function getComputerChoice() {
    // Generates a random integer between 0 and 8 and returns one of the string values (R/P/S) based on its value such that all choices have an equal probability to be returned


    let prob = Math.floor(Math.random()*9);

    if (prob >= 0 && prob <= 2) {
        return R;
    } else if (prob >= 3 && prob <= 5) {
        return P;
    } else {
        return S;
    };
}

function getHumanChoice() {
    // Takes input from the user and returns the matching choice

    while (true) {
        let choice = prompt("Enter your choice: ").toLowerCase();

        if (choice === "r" || choice === "rock") {
            return R;
        } else if (choice === "p" || choice === "paper") {
            return P;
        } else if (choice === "s" || choice === "scissor") {
            return S;
        } else {
            alert("That's not a valid choice, please try again");
        };
    }
}

function playRound(humanChoice, computerChoice) {
    // Play a round of rock paper scissors
    // Takes both the player's and the computer's choice and Increments the humanScore or computerScore variable based on the round winner


    let human = 0, computer = 0;  //local human and computer score variables to track the winner of each round

    if (humanChoice === computerChoice) {
    } else if (humanChoice === R) {
        if (computerChoice === P) {
            computerScore++;
            computer++;
        } else {
            humanScore++;
            human++;
        }
    } else if (humanChoice === P) {
        if (computerChoice === R) {
            humanScore++;
            human++;
        } else {
            computerScore++;
            computer++;
        }
    } else if (humanChoice === S) {
        if (computerChoice === R) {
            computerScore++;
            computer++;
        } else {
            humanScore++;
            human++;
        }
    }
                
    alert(`Player: ${humanChoice}\n-------------------------\nComputer: ${computerChoice}
        
        ${  human > computer ? "You win this round!" :  
            human < computer ? "Computer wins this round" : "It's a draw!"}`);     //display results
     
}

function playGame() {
    // Plays a game of rock paper scissors consisting of 5 rounds then displays the scores and the winner of the game


    let play = true;    // playing condition 

    while (play === true) {
        let i = 0;
        while (i < 5) {
            let humanchoice = getHumanChoice();
            let computerchoice = getComputerChoice();
            
            playRound(humanchoice, computerchoice);

            i++;
        }


        let message;    //message to be displayed depending on who won the game
        if (humanScore > computerScore) {
            message = "Player wins!"
        } else if (humanScore < computerScore) {
            message = "Computer wins :("
        } else {
            message = "Draw"
        };

        alert(`The score is: 
            Player: ${humanScore} | Computer: ${computerScore}
            
            ${message}`);

        while (true) {
        let p = prompt("Play again? (Y/N)").toLowerCase();     //Ask the player if they want to play another round and change the playing condition based on their input
        if (p === "n") {
            play = false;
            break;
        } else if (p === "y") {
            break;
        } else {
            alert("invalid input");
        };
    };
    }
}