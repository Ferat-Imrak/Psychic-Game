var computerChoice = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

var wins = 0;
var losses = 0;
var guesses = 9;
var yourguess = [];

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessText = document.getElementById("guesses-text");
var yourguessText = document.getElementById("yourguess-text");
var compGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

document.onkeyup = function (event) {
    var userGuess = event.key;

    if (userGuess === compGuess) {
        wins++;
        guesses = 9;
        yourguess = [];

    } else {
        if (yourguess.includes(userGuess)) { } else {
            guesses--;
            yourguess.push(userGuess);

        }
    }

    if (guesses === 0) {
        guesses++;
        losses++;
        yourguess = [];

    }


    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessText.textContent = "Guesses Left: " + guesses;
    yourguessText.textContent = "Guesses So Far: " + yourguess;
}
























