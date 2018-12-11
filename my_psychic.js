var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 3;
var guessesSoFar = [];
var correctGuess = letters[Math.floor(Math.random() * letters.length)];
var recordedGuess = [];

document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    if (guessesSoFar.indexOf(userGuess) < 0 && letters.indexOf(userGuess) >= 0) {
        guessesSoFar[guessesSoFar.length] = userGuess;
        guessesLeft--;
    }

    if(userGuess === correctGuess) {
        alert("You Won!");
        wins++;
        guessesLeft = 3;
        guessesSoFar = [];
        correctGuess = letters[Math.floor(Math.random() * letters.length)];
        console.log("wins: " + wins + " losses: " + losses + " guesses left: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + correctGuess);
    }

    if(guessesLeft >= 0) {
        // losses++;
        //console.log("You Lost!");
        //correctGuess = letters[Math.floor(Math.random() * letters.length)];
        console.log("wins: " + wins + " losses: " + losses + " guesses left: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + correctGuess);
        document.getElementById("message").innerHTML = "";
    } // else {
    //     guessesLeft--;
    //     correctGuess = letters[Math.floor(Math.random() * letters.length)];
    //     console.log("wins: " + wins + " losses: " + losses + " guesses left: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + correctGuess);
    // }

    if (guessesLeft === 0) {
        document.getElementById("message").innerHTML = "You Lost!";
        losses++;
        guessesLeft = 3;
        guessesSoFar = [];
        correctGuess = letters[Math.floor(Math.random() * letters.length)];
        console.log("wins: " + wins + " losses: " + losses + " guesses left: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + correctGuess);
    }


    
    // recordedGuess = event.key;
    // guessesSoFar.push(recordedGuess);

      // else {
    //     losses++
    //     guessesLeft--
    // } if (recordedGuess!==correctGuess) {
    //     losses++
    //     guessesLeft--
    // } if (guessesLeft===0) {
    //     document.prompt("You have lost")
    // }


function showNumberOfWins() {
    document.getElementById("victories").innerHTML = wins;
}

function showRemainingGuesses() {
    var remainingGuesses = document.getElementById("remainingGuesses");
    remainingGuesses.innerHTML = guessesLeft;
}

function showLosses() {
    document.getElementById("defeats").innerHTML = losses;
}

function showGuesses() {
    document.getElementById("previousGuesses").innerHTML = guessesSoFar;
}

// function resetGame() {

//     guessesLeft = 3;
//     guessesSoFar = [];
// }
    showNumberOfWins();
    showRemainingGuesses();
    showLosses();
    showGuesses();
    //resetGame();
}