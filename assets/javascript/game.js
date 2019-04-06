// Variables
var gem1 = 0
    gem2 = 0
    gem3 = 0
    gem4 = 0
    randomNumber = 0
    score = 0
    wins = 0
    losses = 0

// Functions
function randomNumberGen() {
    var i;
    var x = Math.floor((Math.random() * 120) + 19);
   return x;
};

function gemNumberGen() {
    var x = Math.floor((Math.random() * 12) + 1);
     return x;
};

function reset() {
    score = 0;
    randomNumber = randomNumberGen();
    gem1 = gemNumberGen();
    gem2 = gemNumberGen();
    gem3 = gemNumberGen();
    gem4 = gemNumberGen();
    console.log("reset");
    console.log(gem1,gem2,gem3,gem4);
};

// Value generators
randomNumber = randomNumberGen();
gem1 = gemNumberGen();
gem2 = gemNumberGen();
gem3 = gemNumberGen();
gem4 = gemNumberGen();

// Need an if statement declaring that none of the gems will repeat in value. 
// 1:2-3-4;
// 2:3-4; 
// 3:4
if ((gem1 === gem2) || (gem1 === gem3) || (gem1 === gem4)){
    console.log(gem1,gem2,gem3,gem4);
    gemNumberGen()
} else if ((gem2 === gem3) || (gem2 === gem4)) {
    console.log(gem2,gem3,gem4);
    gemNumberGen()
} else if (gem3 === gem4) {
    console.log(gem3,gem4);
    gemNumberGen()
} else {console.log(gem1,gem2,gem3,gem4)};

// Buttons
$("#crystal1").click(function() {
    score = gem1 + score;
    console.log(score)
});

$("#crystal2").click(function() {
    score = gem2 + score;
    console.log(score)
});

$("#crystal3").click(function() {
    score = gem3 + score;
    console.log(score)
});

$("#crystal4").click(function() {
    score = gem4 + score;
    console.log(score)
});

// Game conditions
$(document).click( function(){
if (randomNumber == score) {
    wins++;
    reset();
    console.log("win")
} else if (randomNumber < score) {
    losses++;
    reset();
    console.log("lose")
} else {gameOver = false; console.log("notDone")}
;
// Value display
$("#randomNumberText").text(randomNumber);
$("#scoreText").text(score);
$("#winsText").text(wins);
$("#lossesText").text(losses);}
);
