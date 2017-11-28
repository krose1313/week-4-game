

var computerRandomNumber = 0
var winCount = 0;
var loseCount = 0;
var userTotalScore = 0;
var blueGemChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var pinkGemChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var rubyGemChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var rainbowGemChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);

startGame();

//these on click functions generate random numbers for each of the gems and add the gem's number to the users total score//

$("#blue").on("click", function(){
	userTotalScore = userTotalScore + blueGemChoice;
	$("#p-current-score-counter").text(userTotalScore);
	ruleOfGame();
});

$("#pink").on("click", function(){
	userTotalScore = userTotalScore + pinkGemChoice;
	$("#p-current-score-counter").text(userTotalScore);
	ruleOfGame();
});

$("#ruby").on("click", function(){
	userTotalScore = userTotalScore + rubyGemChoice;
	$("#p-current-score-counter").text(userTotalScore);
	ruleOfGame();
});

$("#rainbow").on("click", function(){
	userTotalScore = userTotalScore + rainbowGemChoice;
	$("#p-current-score-counter").text(userTotalScore);
	ruleOfGame();
});


//this generates a random number for the user to shoot towards//
function startGame(){
	computerRandomNumber = Math.floor(Math.random()*(120 - 19 + 1) + 19);
	userTotalScore = 0;
	rescrambleCrystalValues();
	updateDisplay();
}

function ruleOfGame(){
	updateDisplay();
	$("#p-win-or-lose").html("<br>");
	if(userTotalScore === computerRandomNumber){
		winCount++;
		$("#p-win-counter").text(winCount);
		console.log(winCount);
		$("#p-win-or-lose").text("You win!");
		startGame();
	}	else if(userTotalScore > computerRandomNumber){
		loseCount++;
		$("#p-loss-counter").text(loseCount);
		console.log(loseCount);
		$("#p-win-or-lose").text("You lose!");
		startGame();
	}
};

function rescrambleCrystalValues(){
	blueGemChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	pinkGemChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	rubyGemChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	rainbowGemChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
}

function updateDisplay (){
	$("#random-number").text(computerRandomNumber);
	$("#p-current-score-counter").text(userTotalScore);
	$("#p-win-counter").text("Wins: " + winCount);
	$("#p-loss-counter").text("Loses: " + loseCount);

}










