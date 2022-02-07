/* eslint-disable no-unused-vars */
console.log('Lodash is loaded:', typeof _ !== 'undefined');

/*
-define a function called highestNumber with 2 parameters numberOfPlayers and cardsPerPlayer
  -create a variable named cardPoints and assign it the value of 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11 in an array literal
  -create a variable named deck and assign it the value of an empty array literal
  -create a variable named players and assign it the value of an array literal
  -create a for loop that:
  a. assigns the value of 1 to l
  b. executes code block if l is less than numberOfPlayers + 1
  c. l++
    -call the push method of players with an object with the property name and a value of
    a. the template literal `player ${l}`, property hand with the value of an array literal as it's value,
    b. property stillIn with the boolean value of true, and the property score with the value of 0
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
-return playGame function with players, deck, and cardsPerPlayer as it's arguments

-create a function named serve with player, deck, and cardsPerPlayer as it's parameters
  -create a for loop that:
  a. assigns the value of 0 to m
  b. executes code block if m is less than cardsPerPlayer
  c. m++
    -call the push method of the hand property of player with deck[m]
    -assign the value of the rank property of the deck object + the score property of
    a. the player object to the score property of the player object
  -call the splice method of deck with 0 and cardsPerPlayer as it's arguments

-create a function named playGame with players, deck, cardsPerPlayer as it's parameters
  -call the _.shuffle method with deck as it's argument and assign its value to a variable named shuffledDeck
  -create a variable named scoreBoard and assign it the value of an empty array literal
  -create a variable named winnerCounter and assign it the value of 0
  -create a variable named winnerArr and assign it the value of an empty array literal
  -create a for looop that:
    a. assigns the value of 0 to j
    b. execute code block if j is less than players.length
    c. j++
    -assign the value of 0 to the score property of players at index j
    -assign the value of an empty array literal to the property hand of the object players at index j
    -if the stillIn property of players at index j is strictly equal to true:
      call the serve function with players at index j, shuffledDeck, and cardsPerPlayer as it's arguments
    -call the push method of scoreBoard with the propterty score of the players object at index j as it's argument
  -call the sort method of scoreBoard with an ananymous function as it's argument
  -create a for loop that:
  a. assigns the value of 0 to k
  b. executes code block if k is less than the length method of players
  c. k++
    -if the score property of the players object at index k is strictly equal to scoreBoard at the index of the length
    a. property of scoreBoard - 1:
      increment winnerCounter by 1
      call the push method of winnerArr with players at index k as it's argument
    -else:
      assign the boolean false to the stillIn property of players at index k
  -if winnerCounter is greater than 1:
    return the playGame function with winnerArr as it's argument
  -create a variable named winner and assign it the value of the template literal string
  a. the name property of winnerArr at index 0 'is the winner with' the score property of winnerArr at index 0 'points!'
  -return winner
*/
function highestNumber(numberOfPlayers, cardsPerPlayer) {
  var cardPoints = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
  var deck = [];
  var players = [];

  for (var l = 1; l < numberOfPlayers + 1; l++) {
    players.push({
      name: `player ${l}`,
      hand: [],
      stillIn: true,
      score: 0
    });
  }

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
  return playGame(players, deck, cardsPerPlayer);
}

function serve(player, deck, cardsPerPlayer) {
  for (var m = 0; m < cardsPerPlayer; m++) {
    player.hand.push(deck[m]);
    player.score += deck[m].rank;
  }
  deck.splice(0, cardsPerPlayer);
}

function playGame(players, deck, cardsPerPlayer) {
  var shuffledDeck = _.shuffle(deck);
  var scoreBoard = [];
  var winnerCounter = 0;
  var winnerArr = [];
  for (var j = 0; j < players.length; j++) {
    players[j].score = 0;
    players[j].hand = [];
    if (players[j].stillIn === true) {
      serve(players[j], shuffledDeck, cardsPerPlayer);
    }
    scoreBoard.push(players[j].score);
  }
  scoreBoard.sort(function (a, b) { return a - b; });
  for (var k = 0; k < players.length; k++) {
    if (players[k].score === scoreBoard[scoreBoard.length - 1]) {
      winnerCounter++;
      winnerArr.push(players[k]);
    } else {
      players[k].stillIn = false;
    }
  }
  if (winnerCounter > 1) {
    return playGame(winnerArr, deck, cardsPerPlayer);
  }

  var winner = `${winnerArr[0].name} is the winner with ${winnerArr[0].score} points!`;
  return winner;
}
