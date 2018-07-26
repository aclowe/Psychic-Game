//establish variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = []; 

//Choices for comptuer to pick from
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Computer selects random letter from letterBank
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log("computerGuess:" + computerGuess);

//user presses any letter to start
document.onkeyup = function(event) {
    
    // Determine which letter user pressed
    var userGuessCase = event.key;
    var userGuess = userGuessCase.toLowerCase();
    console.log("userGuess: " + userGuess);
    
    //If correct:
    if ((userGuess) === (computerGuess)) {
        //alert: "You Win"
        alert("You Win!");
        console.log ("win");
        //Increase "wins" by 1
        wins++;
        console.log ("wins: " + wins);
        //Reset *guessesLeft* to 9
        guessesLeft = 9;
        console.log("guesesLeft " + guessesLeft);
        //Reset *guessesSoFar* array
        guessesSoFar.length = 0;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log("computerGuess:" + computerGuess);

    }
    //If "guesses left" = 0
    else if (guessesLeft === 1){
        //alert: "You Lose!"
        alert("You Lose");
        console.log ("loose");
        //Increases losses by 1
        losses++;
        console.log ("losses: " + losses);
        //Reset *guessesLeft* to 9
        guessesLeft = 9;
        console.log("guessesLeft: " + guessesLeft)
        //Reset *guessesSoFar* array
        guessesSoFar.length = 0;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log("computerGuess:" + computerGuess);
    }
    //Or if user guess is incorrect
    else {
        //Increse *guessesLeft* by 1
        guessesLeft--;
        console.log("guessesLeft: " + guessesLeft)
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