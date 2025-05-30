function createPlayer(name, marker) {
  const shots = [];
  return { name, marker, shots };
}

function createBoard() {
  const gameBoard = [null, null, null, null, null, null, null, null, null];
  return gameBoard;
}

function gamePlay(name1, name2) {
  const gameBoard = createBoard();
  const players = [null, null];
  let player1 = createPlayer(name1, "o");
  let player2 = createPlayer(name2, "x");
  players[0] = player1;
  players[1] = player2;
  let activePlayer = player1;

  const playRound = () => {
     
    activePlayer === player1 ? activePlayer = player2 : activePlayer = player1;
    return activePlayer.marker;
    
  }

  return { playRound, activePlayer };
}

const game = gamePlay("BB", "cc");

console.log(game.activePlayer.marker);
console.log(game.playRound());
console.log(game.playRound());
console.log(game.playRound());
console.log(game.playRound());
