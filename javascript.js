const R = "rock", P = "paper", S = "scissors";

let humanScore = 0, computerScore = 0;


function getComputerChoice() {
    /* Generates a random integer between 0 and 8 and returns one of the string 
    values (R/P/S) based on its value such that all choices have an equal probability 
    to be returned */


    let prob = Math.floor(Math.random()*3);

    if (prob === 0) {
        return R;
    } else if (prob === 1) {
        return P;
    } else {
        return S;
    };

}

function getHumanChoice() {
    /* Takes input from the user and returns the matching choice */


    while (true) {
        let choice = prompt("Enter your choice: ").toLowerCase();

        if (choice === "r" || choice === "rock") {
            return R;
        } else if (choice === "p" || choice === "paper") {
            return P;
        } else if (choice === "s" || choice === "scissors") {
            return S;
        } else {
            alert("That's not a valid choice, please try again");
        };
    }

}

function playRound(humanChoice, computerChoice) {
    /* Play a round of rock paper scissors */
    /* Takes both the player's and the computer's choice and Increments the 
    humanScore or computerScore variable based on the round winner */


    let humanScoreLocal = 0, computerScoreLocal = 0;
    /* local score variables to track the winner of each round */


    if (humanChoice === computerChoice) {
    } else if (humanChoice === R) {
        if (computerChoice === P) {
            computerScore++;
            computerScoreLocal++;
        } else {
            humanScore++;
            humanScoreLocal++;
        }
    } else if (humanChoice === P) {
        if (computerChoice === R) {
            humanScore++;
            humanScoreLocal++;
        } else {
            computerScore++;
            computerScoreLocal++;
        }
    } else if (humanChoice === S) {
        if (computerChoice === R) {
            computerScore++;
            computerScoreLocal++;
        } else {
            humanScore++;
            humanScoreLocal++;
        }
    }

    
    /* display results */
    alert(`Player: ${humanChoice}\n---------------------------\nComputer: ${computerChoice}
        
        ${humanScoreLocal > computerScoreLocal ? "You win this round!" :
          humanScoreLocal < computerScoreLocal ? "Computer wins this round" : "It's a draw!"}`);
        
}

function playGame() {
    /* Plays a game of rock paper scissors consisting of 5 rounds then displays
    the scores and the winner of the game */


    let play = true;    /* playing condition */ 

    while (play === true) {

        /* Play 5 rounds */
        let i = 0;
        while (i < 5) {
            let humanchoice = getHumanChoice();
            let computerchoice = getComputerChoice();            
            playRound(humanchoice, computerchoice);
            i++;
        }


        /* Display results */
        alert(`The score is: 
            Player: ${humanScore} | Computer: ${computerScore}
            
            ${  humanScore > computerScore ? "Player wins!!" :  
                humanScore < computerScore ? "Computer wins :(" : "Draw"}`);    


        /* Ask the player if they want to play another round and change the 
        playing condition based on their input */
        while (true) {
        let p = prompt("Play again? (Y/N)").toLowerCase();
        if (p === "n" || p === "no") {
            play = false;
            break;
        } else if (p === "y" || p === "yes") {
            humanScore = 0;
            computerScore = 0;
            break;
        } else {
            alert("invalid input");
        };
    };

    }

}


alert(`Welcome to this simple game of rock-paper-scissors
    
To enter your choice either type (rock/paper/scissors) 
or simply (r/p/s)
    
Enjoy :)`);


playGame();     /* Game starts */