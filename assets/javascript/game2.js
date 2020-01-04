var wins = 0; 
var losses = 0;

function initializeCrystal () {
    
    return Math.floor((Math.random() * 12 ) + 1)
    
}


function onLoad () {


    //make crystal array 
    var arrCrystal = [initializeCrystal(), initializeCrystal(), initializeCrystal(), initializeCrystal()];

    //pick random target
    var targetScore = Math.floor((Math.random() * 120 ) + 19);
    console.log (targetScore);

    //display target
    $("#targetscore").text("Target: " + targetScore);
    
    var playerScore = 0;

    //display player scores
    $("#playerscore").text("Score: " + playerScore);


    console.log(arrCrystal[0])
    console.log(arrCrystal[1])
    console.log(arrCrystal[2])
    console.log(arrCrystal[3])

 onClick(arrCrystal, targetScore, playerScore);
}

function onClick (arrCrystal, targetScore, playerScore) {
    do {
    console.log (arrCrystal);
    console.log (playerScore);
    console.log (targetScore);
 

    //assign event handlers to crystal HTML elements that increment the player score by the crystal's hidden value each time the crystal is clicked
  
    $("#c1").on( "click", function () {
            playerScore += arrCrystal[0]
            $("#playerscore").html("Score: " + playerScore)
            console.log(playerScore);
            return playerScore
        });

    $("#c2").on("click", function () {
            playerScore += arrCrystal[1]
            $("#playerscore").html("Score: " + playerScore)
            console.log(playerScore);   
            return playerScore
        });

    $("#c3").on("click", function () {
            playerScore += arrCrystal[2]
            $("#playerscore").html("Score: " + playerScore)
            console.log(playerScore);
            return playerScore
            
        });

    $("#c4").on("click", function () {
            playerScore += arrCrystal[3]
            $("#playerscore").html("Score: " + playerScore)
            console.log(playerScore);
            return playerScore
        });




    console.log($(".crystal"))
    console.log(playerScore)

    //main gameplay loop
    var gameOver = false;
    
        if (playerScore > targetScore) {
            losses++;
            $("#losses").html("Losses: " + losses)
            return gameOver = true;
        }

        else if (playerScore === targetScore) {
            wins++;
            $("#wins").html("Wins: " + wins)
            return gameOver = true

        }

        else if (playerScore < targetScore) {
            return gameOver = false
        }
        console.log(gameOver, playerScore, targetScore)


        
    }
    while (gameOver == false);


    console.log (wins)
    console.log (losses)
 
   

};
onLoad();















