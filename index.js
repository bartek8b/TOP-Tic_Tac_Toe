function createPlayer(name, marker) {
  const shots = [];
  return { name, marker, shots };
}

function createBoard() {
  const gameBoard = [null, null, null, null, null, null, null, null, null];
  return gameBoard;
}

function checkWinner(array, object) {
  if (
    (array[0] === object.marker &&
      array[1] === object.marker &&
      array[2] === object.marker) ||
    (array[3] === object.marker &&
      array[4] === object.marker &&
      array[5] === object.marker) ||
    (array[6] === object.marker &&
      array[7] === object.marker &&
      array[8] === object.marker) ||
    (array[6] === object.marker &&
      array[7] === object.marker &&
      array[8] === object.marker) ||
    (array[0] === object.marker &&
      array[3] === object.marker &&
      array[6] === object.marker) ||
    (array[1] === object.marker &&
      array[4] === object.marker &&
      array[7] === object.marker) ||
    (array[2] === object.marker &&
      array[5] === object.marker &&
      array[8] === object.marker) ||
    (array[0] === object.marker &&
      array[4] === object.marker &&
      array[8] === object.marker) ||
    (array[2] === object.marker &&
      array[4] === object.marker &&
      array[6] === object.marker)
  ) {
    console.log(`The winner is: ${object.name}!!`);
  }
}

function gamePlay(name1, name2) {
  const gameBoard = createBoard();
  let player1 = createPlayer(name1, "o");
  let player2 = createPlayer(name2, "x");
  let activePlayer = player1;

  const playRound = (index) => {
    activePlayer.shots.push(index);
    gameBoard[index] = activePlayer.marker;
    const winner = checkWinner(gameBoard, activePlayer);
    if (!winner) {
      activePlayer === player1
        ? (activePlayer = player2)
        : (activePlayer = player1);
    }
    else{
        // KOD DO RESETU LUB REWANZU
    }

    return { gameBoard};
  };

  return { gameBoard, playRound, activePlayer };
}

const game = gamePlay("BB", "cc");

console.log(game.playRound(0));
console.log(game.playRound(8));
console.log(game.playRound(1));
console.log(game.playRound(7));
console.log(game.playRound(2));
