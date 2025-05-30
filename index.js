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
  let player1 = createPlayer(name1, "o");
  let player2 = createPlayer(name2, "x");
  let activePlayer = player1;

  const playRound = (index) => {
    gameBoard[index] = activePlayer.marker;
    activePlayer === player1 ? activePlayer = player2 : activePlayer = player1;
    return gameBoard;    
  }

  return { gameBoard, playRound, activePlayer };
}

const game = gamePlay("BB", "cc");


console.log(game.playRound(0));
console.log(game.playRound(8));
console.log(game.playRound(1));
console.log(game.playRound(7));
console.log(game.playRound(2));
console.log(game.playRound(4));