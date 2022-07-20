console.log('Lodash is loaded:', typeof _ !== 'undefined');

function cardGame(players, number) {
  var ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  var value = ['11', '2', '3', '4', '5', '6', '7', '8', '9', '10', '10', '10', '10'];
  var suits = ['Heart', 'Diamond', 'Spade', 'Club'];
  var deck = [];

  for (var r = 0; r < ranks.length; r++) {
    for (var s = 0; s < suits.length; s++) {
      var card = {
        suit: suits[s],
        rank: ranks[r],
        value: value[r]
      };
      deck.push(card);
    }
  }

  var hand = [];
  var allPlayers = [];
  var shuffled = _.shuffle(deck);
  var playerCount = (players.length * number) - 1;

  for (var d = 0; d < playerCount; d = d + number) {
    hand.push(shuffled.slice(d, d + number));
  }

  for (var p = 0; p < players.length; p++) {
    var player = {
      name: players[p],
      cards: hand[p]
    };
    allPlayers.push(player);
    var sum = 0;
    allPlayers[p].cards.forEach(element => {
      sum += Number(element.value);
      return sum;
    });
    allPlayers[p].score = sum;
  }

  console.log(shuffled);
  console.log(allPlayers);

  var winner = allPlayers.reduce((prev, current) => {
    if (+prev.score > +current.score) {
      return prev;
    } else {
      return current;
    }
  });

  return `The winner is ${winner.name}!`;
}

cardGame(['Willy', 'Nilly', 'Dilly', 'Billy'], 6);
