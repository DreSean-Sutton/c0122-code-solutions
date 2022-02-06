/* eslint-disable no-unused-vars */
console.log('Lodash is loaded:', typeof _ !== 'undefined');

/*
-create a variable named cardPoints and assign it the value of 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11 in an array literal
-create a variable named deck and assign it the value of an empty array literal
-create a variable named players and assign it an array literal with the objects name: 'player-1', hand: empty array literal
a. name: 'player-2', hand: empty array literal
b. name: 'player-3', hand: empty array literal
c. name: 'player-4', hand: empty array literal
-create a for loop that:
a. assigns the value of 0 to i
b. executes code block if i is less than cardPoints.length
c. i++
  -create an object variable named spadeCards and assign it the value of the property rank with a value of cardPoints at index i
  a. and the property suit with a value of 'spades'
  -create an object variable named heartCards and assign it the value of the property rank with a value of cardPoints at index i
  a. and the property suit with a value of 'hearts'
  -create an object variable named clubCards and assign it the value of the property rank with a value of cardPoints at index i
  a. and the property suit with a value of 'clubs'
  -create an object variable named diamondCards and assign it the value of the property rank with a value of cardPoints at index i
  a. and the property suit with a value of 'diamonds'
  -call the push method of deck with diamondCards, heartCards, clubCards, and spadeCards at it's arguments
-call the _.shuffle method with deck as it's argument
*/
var cardPoints = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];

var deck = [];

var players = [{
  name: 'player-1',
  hand: [],
  stillIn: true
},
{
  name: 'player-2',
  hand: [],
  stillIn: true
},
{
  name: 'player-3',
  hand: [],
  stillIn: true
},
{
  name: 'player-4',
  hand: [],
  stillIn: true
}];

for (var i = 0; i < cardPoints.length; i++) {

  var spadeCards = {
    rank: cardPoints[i],
    suit: 'spades'
  };

  var heartCards = {
    rank: cardPoints[i],
    suit: 'hearts'
  };

  var clubCards = {
    rank: cardPoints[i],
    suit: 'clubs'
  };

  var diamondCards = {
    rank: cardPoints[i],
    suit: 'diamonds'
  };

  deck.push(diamondCards, heartCards, clubCards, spadeCards);
}

var shuffledDeck = _.shuffle(deck);
playGame(players);

function playGame(players) {
  var scoreBoard = [];
  var winnerCounter = 0;
  for (var j = 0; j < players.length; j++) {
    players[j].hand = [];
    if (players[j].stillIn === true) {
      serve(players[j], shuffledDeck);
    }
    scoreBoard.push(players[j].score);
  }
  scoreBoard.sort(function (a, b) { return a - b; });
  console.log(scoreBoard);
  // if tie call shuffle()
}

function serve(player, deck) {
  player.hand.push(deck[0], deck[1]);
  player.score = player.hand[0].rank + player.hand[1].rank;
  deck.splice(0, 2);
}
