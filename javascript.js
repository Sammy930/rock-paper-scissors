const R = "rock", P = "paper", S = "scissors";

let humanScore = 0, computerScore = 0;


function getComputerChoice() {

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
    /* Plays a game of rock paper scissors consisting of 5 rounds */


    let play = true;    /* playing condition */ 

    while (play === true) {
        
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
