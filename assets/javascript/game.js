// I am creating a list of letters for calling them.
var computerChoice = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//This is the counter for wins/losses.
var wins = 0;
var losses = 0;
// This is what we will use to count down.
var guesses = 9;
// This array will hold what we guess.
var yourguess = [];

// This variable will be randomly assigned one of the three letters
var compGuess = null;

var audio = document.getElementById("myAudio");

function playAudio () {
    audio.play();
}

// function that updates the gues to the browser.
function updateGuess() {
    document.querySelector("#guesses-text").innerHTML = guesses;
};

// function update letter to guess. 
function updateLattertoGuess() {
    compGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
};


// update guesses so far.
function updateYourGuess() {
    document.querySelector("#yourguess-text").innerHTML = yourguess.join(", ");
};

// reset function.
function reset() {
    guesses = 9; 
    yourguess = [];
    updateLattertoGuess();
    updateGuess();
    updateYourGuess();

}

// initialazing on document load. guess remaining and letter guess.
updateLattertoGuess();
updateGuess();


// when the user click the keyboard initialize the game.
document.onkeyup = function (event) {
    // when user types a letter user types guess reduced by one.
    guesses--;
    // making the letters lower case.
    var letter = String.fromCharCode(event.which);
    // adding the userguess to the array.
    yourguess.push(letter);

    updateGuess();
    updateYourGuess();


    
    if (letter === compGuess) {
        // If there is then we win and we'll update the HTML to display the win.
        wins++;
        playAudio();
        // When user wins it pops up.
        alert("Good Job!");
        document.querySelector("#wins-text").innerHTML = wins;
        // Then we will reset the game.
        reset();
    };
            
        
    // If we are out of guesses...
    if (guesses === 0) {
        // Then we will loss and we'll update the HTML to display the loss.
        losses++;
        document.querySelector("#losses-text").innerHTML = losses;
        // Then we will reset the game.
        reset();
    };


};
























