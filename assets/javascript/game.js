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

randomNumber = randomNumberGen();
gem1 = gemNumberGen();
console.log(randomNumber);
console.log(gem1)