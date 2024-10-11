const R = "rock", P = "paper", S = "scissor";

let humanScore = 0, computerScore = 0;


function getComputerChoice() {
    // Generates a random integer between 0 and 8 and returns one of the string values (R, P, S) based on its value such that all choices have an equal probability


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


    let choice = prompt("Enter your choice: ").toLowerCase();

    if (choice === "r" || choice === "rock") {
        return R;
    } else if (choice === "p" || choice === "paper") {
        return P;
    } else if (choice === "s" || choice === "scissor") {
        return S;
    } else {
        console.log("That's not a valid choice.");
    };
}

function playRound(humanChoice, computerChoice) {
    // Play a round of rock paper scissors
    // Takes both the player's and the computer's choice and Increments the humanScore or computerScore variable based on the round winner


    if (humanChoice === computerChoice) {
        return;
    } else if (humanChoice === R) {
        if (computerChoice === P) {
            computerScore++;
        } else {
            humanScore++;
        }
    } else if (humanChoice === P) {
        if (computerChoice === R) {
            humanScore++;
        } else {
            computerScore++;
        }
    } else if (humanChoice === S) {
        if (computerChoice === R) {
            computerScore++;
        } else {
            humanScore++;
        }
    }

}