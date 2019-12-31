//there is a target number generated at the start of each game
//there are four crystals
//each crystal has a randomly assigned numeric value that is hidden from the player
//clicking the crystal increments the player score by the crystal's value
//the player score is visible
//the player has to hit the target number without going over


var targetNumber;

var playerScore;

var wins = 0;

var losses = 0;

var inPlay = false;

var c1val;
var c2val;
var c3val;
var c4val;


function runGame(){
//set inPlay to True
inPlay = true;

//set playerScore to zero
playerScore = 0;

//pick a random number and assign it to targetNumber
targetNumber = Math.floor((Math.random() * 120 ) + 19);

console.log(targetNumber);

    

//pull the 4 crystal HTML elements and assign them events that increment playerScore by a random value between 1 and 12
c1val = Math.floor((Math.random() * 12 ) + 1);
c2val = Math.floor((Math.random() * 12 ) + 1);
c3val = Math.floor((Math.random() * 12 ) + 1);
c4val = Math.floor((Math.random() * 12 ) + 1);


    console.log(c1val);
    console.log(c2val);
    console.log(c3val);
    console.log(c4val);

//each time a crystal is clicked, check playerScore against targetNumber
};


//function for checking score against number

function checkGuess (playerScore, targetNumber, inPlay) {

    if (inPlay == true && playerScore < targetNumber) {
        console.log(playerScore);
        return inPlay;
    }

    else if (inPlay == true && playerScore > targetNumber){
        losses ++;
        console.log(losses);
        inPlay = false;
        return inPlay;

    }

    else if (inPlay == true && playerScore == targetNumber) {
        wins++;
        console.log(wins);
        inPlay = false;
        return inPlay
    }

};



//actually do the code
$("newgame").click(runGame());
$(".crystal").click(checkGuess());


$("c1").click(playerScore + c1val);
$("c2").click(playerScore + c2val);
$("c3").click(playerScore + c3val);
$("c4").click(playerScore + c4val);



    

