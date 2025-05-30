function createPlayer(name, marker) {
  const shots = [];
  return { name, marker, shots };
}

function gameBoard() {
  const gameBoard = [null, null, null, null, null, null, null, null, null];
  return gameBoard;
}

function gamePlay(name1, name2) {
  const board = gameBoard();
  const players = [null, null];
  const player1 = createPlayer(name1, "o");
  const player2 = createPlayer(name2, "x");
  players[0] = player1;
  players[1] = player2;
  return { players, board };
}

console.log(gamePlay("BB", "cc"));
