//storing wins and losses in globals. 
var wins = 0; 
var losses = 0;

function initializeCrystal () {
    
    return Math.floor((Math.random() * 12 ) + 1)
    
}


function onLoad () {
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
 

    

 //onClick(arrCrystal, targetScore, playerScore);


function onClick (arrCrystal, targetScore, playerScore, gameOver) {


    console.log (arrCrystal);
    console.log (playerScore);
    console.log (targetScore);
 

    //assign event handlers to crystal HTML elements that increment the player score by the crystal's hidden value each time the crystal is clicked
  
    $("#c1").on( "click", function () {
            //increment score
            playerScore += arrCrystal[0];
            $("#playerscore").html("Score: " + playerScore)
            //check score
            reLoad(scoreCheck(playerScore, targetScore, gameOver));
        });

    $("#c2").on("click", function () {
            //increment score
            playerScore += arrCrystal[1];
            $("#playerscore").html("Score: " + playerScore)
            //check score
            reLoad(scoreCheck(playerScore, targetScore, gameOver));


        });

    $("#c3").on("click", function () {
            playerScore += arrCrystal[2];
            $("#playerscore").html("Score: " + playerScore)
            console.log(playerScore);
            reLoad(scoreCheck(playerScore, targetScore, gameOver));
            
        });

    $("#c4").on("click", function () {
            playerScore += arrCrystal[3];
            $("#playerscore").html("Score: " + playerScore)
            console.log(playerScore);
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
        gameOver = false;
        
    }
}



//initial load call
onLoad();

