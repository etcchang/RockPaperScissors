  var botScore = 0;
  var playerScore = 0;

// associate button presses with functions
// throwRock, throwPaper, throwScissors

document.getElementById('rock').onclick = throwRock;
document.getElementById('paper').onclick = throwPaper;
document.getElementById('scissors').onclick = throwScissors;

function throwRock() {
// use console log to confirm
  console.log('user threw rock');
  var playerThrow = 0;
// display player's throw
// document.getElementById('hScore').innerHTML = 0;
// get bot to throw
  var botThrowNumber =  getRobotsThrow();
// display bot's throw
// document.getElementById('cScore').innerHTML = botThrowNumber;
// determine outcome
  var gameOutcome = getGameOutcome(playerThrow, botThrowNumber);
// display game outcome
  document.getElementById('status').innerHTML = gameOutcome;
}

function throwPaper() {
  console.log('user threw paper');
  var playerThrow = 1;
// document.getElementById('hScore').innerHTML = 1;
  var botThrowNumber = getRobotsThrow();
// document.getElementById('cScore').innerHTML = botThrowNumber;
  var gameOutcome = getGameOutcome(playerThrow, botThrowNumber);
  document.getElementById('status').innerHTML = gameOutcome;
}

function throwScissors() {
  console.log('user threw scissors');
  var playerThrow = 2;
// document.getElementById('hScore').innerHTML = 2;
  var botThrowNumber =  getRobotsThrow();
// document.getElementById('cScore').innerHTML = botThrowNumber;
  var gameOutcome = getGameOutcome(playerThrow, botThrowNumber);
  document.getElementById('status').innerHTML = gameOutcome;
}

function updateScore() {
  document.getElementById('computerScore').innerHTML = botScore;
  document.getElementById('humanScore').innerHTML = playerScore;
}

// create a Function for robot's throw
// check in console eg: getRobotsThrow() to see if you get the random number (need to add () to run the function)
function getRobotsThrow() {
// javascript random number between 0-2
// Math.floor = round down
// Math.random = random number from 0 to less than 1
  return Math.floor(Math.random() * 3);
}

// Input: playerThrow and botThrow
// Output: win, lose or tie
function getGameOutcome(playerThrow, botThrow) {
  if (playerThrow === botThrow) {
    return 'tie';
  }
  else if ( (playerThrow === 0 && botThrow === 2) ||
            (playerThrow === 1 && botThrow === 0) ||
            (playerThrow === 2 && botThrow === 1) ) {

    return 'win'
  }
  else {
    return 'lose'
  }
}

// save this for later
// gameOutcome = 'Draw, you chose rock, robot chose rock';
// gameOutcome = 'You win, you chose rock, robot chose scissors';
// gameOutcome = 'You lose, you chose rock, robot chose paper';