let initialGameState = {
	player1: { name: "Jack", score: 0, hand: [] },
	player2: { name: "Jill", score: 0, hand: [] },
	deck: [
		{value: 1, suit: "Hearts"},
		{value: 2, suit: "Clubs"},
		{value: 3, suit: "Spades"},
		{value: 4, suit: "Diamonds"},
		{value: 5, suit: "Hearts"},
		{value: 6, suit: "Clubs"},
		{value: 7, suit: "Spades"},
		{value: 8, suit: "Diamonds"}
	]
}

let game = {...initialGameState, currentPlayer: initialGameState.player1}

function switchTurn(gameState){
  return {
    ...gameState, 
    currentPlayer: game.player2
  }
}

function increaseScore(stateObj){
  return {
    ...stateObj, 
    NewScore: initialGameState.currentPlayer.score
  }
}

  // Functions to functionally manage this game's state:
// switchTurns() -> switches turns
// increaseScore() -> adds 1 point to the current player's score

// The hardest one:
// drawCard() -> moves a single card from the deck into the current player's hand

// Bonus:p
// shuffleDeck()
