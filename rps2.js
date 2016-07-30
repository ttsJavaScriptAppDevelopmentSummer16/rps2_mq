// This game isnt working at all***


// Define a hands array with the values 'rock', 'paper', and 'scissors';
var hands = ['rock', 'paper', 'scissors'];
var p1score = 0;
var p2score = 0;
// var winning = ('paper' > 'rock', 'rock' > 'scissors', 'scissors' > 'paper');

// Define a function called getHand() that returns a hand from the array using parseInt(Math.random()*10)%3
function getHand() {
  return hands(parseInt(Math.random()*10)%3);
}

// Define two objects for two players. Each player has name and getHand() properties.
var player1 = {
      name: 'Mariam',
      getHand()
    };

var player 2 = {
  name: 'Jess',
  getHand()
};

// Define a function called playRound() that
// Takes two player objects as arguments
// Gets hands from each
// Determines the winner
// Logs the hands played and name of the winner.
// If its a tie, log the hands played and "it's a tie".
// Returns the winner object (null if no winner)
function playRound(player1, player2) {
  return player1.getHand
  return player2.getHand
  if (player1.getHand === player2.getHand) {
    console.log ("Its a tie, no points and no winners.")
  } else if (player1.getHand === 'rock' && player2.getHand === 'scissors') {
    console.log ("Player 1 wins, Rock Beats Scissors");
  } else if (player1.getHand === 'paper' &&  player2.getHand === 'scissors') {
    console.log("Player 2 wins, Scissors Beat Paper");
  } else if (player1.getHand === 'rock' && player2.getHand === 'paper') {
    console.log("Player 2 wins, Paper Beats Rock");
  } else if (player1.getHand === 'scissors' && player2.getHand === 'paper') {
    console.log("Player 1 wins, Scissors beat Paper");
  } else if (player1.getHand === 'scissors' && player2.getHand = 'rock') {
    console.log("Player 2 Wins, Rock beats Scissors");
  } else if (player1.getHand === 'paper' && player2.getHand = 'rock') {
    console.log("Player 1 wins, Paper beats Rock");
  }
}

// Define a function called playGame() that takes arguments player1, player2, and playUntil.
// Play rounds until one of the players wins playUntil hands
// When one player has won enough games, return the winning player object
// Play a game to 5 wins
function playGame(player1, player2, playUntil) {
  for (var i = 0; i < 5; i++) {
    playUntil[i]
  }
}
