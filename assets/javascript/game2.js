

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
  
    $(".crystal").on( "click", function () {
        if ($(".crystal").attr("#id") == "#c1") {
            playerScore += arrCrystal[0]
            console.log(playerScore);
            return playerScore
        }

        else if ($(".crystal").attr("#id") == "#c2") {
            playerScore += arrCrystal[1]
            console.log(playerScore);
            return playerScore
        }
        else if ($(".crystal").attr("#id") == "#c3") {
            playerScore += arrCrystal[2]
            console.log(playerScore);
            return playerScore
            
        }
        else if ($(".crystal").attr("#id") == "#c4") {
            playerScore += arrCrystal[3]
            console.log(playerScore);
            return playerScore
        }

    });
    
    console.log($(".crystal"))
    console.log(playerScore)

    //main gameplay loop
    var gameOver = false;
    
        if (playerScore > targetScore) {
            losses++;
           
            return gameOver = true;
        }

        else if (playerScore === targetScore) {
            wins++;
            return gameOver = true

        }

        else if (playerScore < targetScore) {
            return gameOver = false
        }
        console.log(gameOver, playerScore, targetScore)


        
    }
    while (gameOver == false);
 
   

};
onLoad();















