//storing wins and losses in globals. 
var wins = 0; 
var losses = 0;

function initializeCrystal () {
    
    return Math.floor((Math.random() * 12 ) + 1)
    
}


function onLoad () {
    console.log ("onload hit")
    

    
    
    //intialize yer dang variables
    var gameOver = false

    //make crystal array 
    var arrCrystal = [initializeCrystal(), initializeCrystal(), initializeCrystal(), initializeCrystal()];

    //pick random target
    var targetScore = Math.floor((Math.random() * 120 ) + 19);
    console.log (targetScore);

    //display target
    $("#targetscore").text("Target: " + targetScore);
    

    

    //set and display player score
    var playerScore = 0;
    $("#playerscore").text("Score: " + playerScore);

    //call the gameplay loop, which calls the click event handlers
    gamePlay(arrCrystal, targetScore, playerScore, gameOver);
    }
 

    
function onClick (arrCrystal, targetScore, playerScore, gameOver) {
    
    //get rid of event listeners, in case we're reloading (took me way too long to figure this out)
    $(".crystal").off()

    console.log (arrCrystal);
    console.log (playerScore);
    console.log (targetScore);
 

    //assign event handlers to crystal HTML elements that increment the player score by the crystal's hidden value each time the crystal is clicked
  
    $("#c1").click( function c1click () {
            //increment score
            playerScore += arrCrystal[0];
            $("#playerscore").html("Score: " + playerScore);
            console.log (arrCrystal);
            console.log (playerScore);
            console.log (targetScore);
            //check score
            reLoad(scoreCheck(playerScore, targetScore, gameOver));
            //check if we need to start over
            
        });

    $("#c2").click( function c2click () {

            playerScore += arrCrystal[1];
            $("#playerscore").html("Score: " + playerScore)
            console.log (arrCrystal);
            console.log (playerScore);
            console.log (targetScore);
            reLoad(scoreCheck(playerScore, targetScore, gameOver));
            


        });

    $("#c3").click( function c3click () {
            playerScore += arrCrystal[2];
            $("#playerscore").html("Score: " + playerScore)
            console.log (arrCrystal);
            console.log (playerScore);
            console.log (targetScore);
            
            reLoad(scoreCheck(playerScore, targetScore, gameOver));
            
            
        });

    $("#c4").click( function c4click () {
            playerScore += arrCrystal[3];
            $("#playerscore").html("Score: " + playerScore)
            console.log (arrCrystal);
            console.log (playerScore);
            console.log (targetScore);

            reLoad(scoreCheck(playerScore, targetScore, gameOver));
            
            
        });    



    }









//main gameplay loop
    
function gamePlay(arrCrystal, targetScore, playerScore, gameOver)  {

    //call the onclick function, which returns player score
    onClick(arrCrystal, targetScore, playerScore, gameOver);


}





function reLoad(gameOver) {
    //if the game ends, start a new one
    if (gameOver == true){
        console.log("reload hit");
        onLoad();
    }

    else {
        return gameOver = false
    }
}




function scoreCheck (playerScore, targetScore){

    console.log(playerScore)
    console.log(targetScore)

    if (playerScore > targetScore) {
        losses++;
        $("#losses").html("Losses: " + losses)
        console.log("we lost")
        console.log(losses)
        return gameOver = true;
       
    }
    
    else if (playerScore == targetScore) {
        wins++;
        $("#wins").html("Wins: " + wins);
        console.log("we won");
        console.log(wins);
        return gameOver = true;
        
    
    }
    
    else if (playerScore < targetScore) {
        console.log("still playing");
        return gameOver = false;
    }
}



//initial load call
onLoad();

