

function initializeCrystal () {
    
    return Math.floor((Math.random() * 12 ) + 1)
    
}


function onLoad () {

    //make crystal array 
    var arrCrystal = [initializeCrystal(), initializeCrystal(), initializeCrystal(), initializeCrystal()];
    console.log (arrCrystal);


    //pick random target
    var targetScore = Math.floor((Math.random() * 120 ) + 19);
    console.log (targetScore);

    //display target
    $("#targetnumber").text("Target: " + targetScore);
    
    var playerScore = 0;

    //display player scores
    $("#playerscore").text("Score: " + playerScore);


    //assign event handlers to crystal HTML elements
    $("#c1").click(playerScore += arrCrystal[0]);


}

function onClick() {



}


onLoad();
onClick();
