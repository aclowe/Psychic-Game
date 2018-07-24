//establish variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = []; 

//Choices for comptuer to pick from
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//user presses any letter to start
document.onkeyup = function(event) {
    
    // Determine which letter user pressed
    var userGuessCase = event.key;
    var userGuess = userGuessCase.toLowerCase()

    //Computer selects random letter from letterBank
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
    //If correct:
    if ((userGuess) === (computerGuess)) {
        //alert: "You Win"
        alert("You Win!");
        //Increase "wins" by 1
        wins++;
        //Reset *guessesLeft* to 9
        guessesLeft = 9;
        //Reset *guessesSoFar* array
        guessesSoFar.length = 0;
    }
    //If "guesses left" = 0
    else if (guessesLeft === 1){
        //alert: "You Lose!"
        alert("You Lose");
        //Increases losses by 1
        losses++;
        //Reset *guessesLeft* to 9
        guessesLeft = 9;
        //Reset *guessesSoFar* array
        guessesSoFar.length = 0;
    }
    //Or if user guess is incorrect
    else {
        //Increse *guessesLeft* by 1
        guessesLeft--;
        //Add user-inputed letter to *guessesSoFar*
        guessesSoFar.push(userGuess);
    }

    //Display counts in HTML    
    var html =
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses Left: " +  guessesLeft + "</p>" +
    "<p>Guesses So Far: " + guessesSoFar + "</p>"
    ;
    //Place the html into #game
    document.querySelector("#game").innerHTML = html;
}