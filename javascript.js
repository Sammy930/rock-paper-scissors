const R = "rock", P = "paper", S = "scissor";

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