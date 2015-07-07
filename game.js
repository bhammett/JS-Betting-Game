var readlineSync = require('readline-sync');
var colors = require('colors');


var getGuess = function() {
  var number = parseInt(readlineSync.question("Choose a number between 1 and 10:".blue));
  while(number < 1 || number > 10) {
    number = parseInt(readlineSync.question("Choose a number between 1 and 10:".blue));
  }
  return number;
}

var getBet = function () {
  var bet = parseInt(readlineSync.question("Place a bet of 5 or 10 dollars:".blue));
  return bet;
}

var getRandom = function () {
  var random = Math.floor((Math.random() * 10) + 1);
  return random;
}


var loop = function(){ 
  var funds = 100;
  while(funds > 0){

    var bet = getBet();
    if(bet > funds) {
      console.log(colors.red("You can't afford that bet! You have " + funds));
      continue;
    }

    if(bet == 5 || bet == 10) {
      console.log(colors.cyan("You bet " + bet + " dollars"));
    }
    else {
      console.log(colors.red("Your bet must be 5 or 10 dollars"));
      continue;
    }
    
    var number = getGuess();

    if((number >= 1) && (number <= 10)){
      console.log(colors.blue("You chose number " + number));
    }
    else {
      console.log(colors.yellow("You must chose a number must be between 1 and 10"));
      var number = parseInt(readlineSync.question("Choose a number between 1 and 10:".cyan));
    }

   
    var random = getRandom();

    if (number === random){
      funds += bet;
      console.log("The number was " + random + ", You chose: " + number);
      console.log(colors.rainbow("You won! You now have " + funds + " dollars"));
    }
    else if ((number + 1) === random){
      console.log("The number was " + random + ", You chose: " + number);
      console.log(colors.green("Close! You still have " + funds + " dollars"));

    }
    else if ((number - 1) === random){
      console.log("The number was " + random + ", You chose: " + number);
      console.log(colors.green("Close! You still have " + funds + " dollars"));
    }
    else {
      funds -= bet;
      console.log("The number was " + random + ", You chose: " + number);
      console.log(colors.bold.red("Sorry! You now have " + funds + " dollars"));
    }
  }
}
loop();