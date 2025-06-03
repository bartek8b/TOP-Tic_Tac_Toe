// FUNCTIONALITY

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
    return true;
  } else {
    return false;
  }
}

function gamePlay(name1, name2) {
  const gameBoard = createBoard();
  let player1 = createPlayer(name1, "o");
  let player2 = createPlayer(name2, "x");
  let activePlayer = player1;

  const getBoard = () => [...gameBoard];
  const getActivePlayer = () => activePlayer;
  const getPlayer1 = () => player1;
  const getPlayer2 = () => player2;

  const playRound = (index) => {
    if (!gameBoard[index]) {
      activePlayer.shots.push(index);
      gameBoard[index] = activePlayer.marker;
      const winner = checkWinner(gameBoard, activePlayer);
      if (!winner) {
        if (!gameBoard.includes(null)) {
          // REMIS !!!
          console.log(`DRAW !!`);

          //REMATCH SET
          game = gamePlay(player2.name, player1.name);
        } else {
          activePlayer === player1
            ? (activePlayer = player2)
            : (activePlayer = player1);
        }
      } else {
        // WINNER !!!
        console.log(`The winner is ${activePlayer.name}!!`);

        //REMATCH SET
        game = gamePlay(player2.name, player1.name);
      }
    }
  };

  return { playRound, getBoard, getActivePlayer, getPlayer1, getPlayer2 };
}

// INIT

function init() {
  const dialog = document.querySelector("dialog");
  const submitBtn = document.querySelector("#submit");
  const newGameBtn = document.querySelector("#new-game");
  const rematchBtn = document.querySelector("#rematch");
  const grid = document.querySelector(".grid-container");

  dialog.showModal();

  let game;
  let name1;
  let name2;

  submitBtn.addEventListener("click", () => {
    name1 = document.querySelector('input[name="player1"]').value;
    name2 = document.querySelector('input[name="player2"]').value;
    game = gamePlay(name1, name2);
    createGrid(9);
    screenControler(game);
  });

  newGameBtn.addEventListener("click", () => {
    dialog.showModal();
    document.querySelector('input[name="player1"]').value = "";
    document.querySelector('input[name="player2"]').value = "";
  });

  rematchBtn.addEventListener("click", () => {
    const rev1 = game.getPlayer1();
    const rev2 = game.getPlayer2();
    game = gamePlay(rev2.name, rev1.name);
    createGrid(9);
    screenControler(game);
  });

  grid.addEventListener("click", (event) => {
    const cell = event.target.closest(".available");
    const id = cell.getAttribute("data-id");
    game.playRound(id);
    cell.classList.remove("available");
    console.log(game.getBoard());
  })
}

// U I

function screenControler(object) {
  const displayMsg = document.querySelector("#display-message");
  const player1 = object.getPlayer1();
  const player2 = object.getPlayer2();

  displayMsg.textContent = `${player1.name} vs. ${player2.name}`;
}

function createGrid(n) {
  const container = document.querySelector(".grid-container");
  container.textContent = "";
  for (let i = 0; i < n; i++) {
    const cell = document.createElement("button");
    cell.setAttribute("data-id", i);
    cell.classList.add("available");
    container.appendChild(cell);
  }
}

init();

// let game = gamePlay("Bartonili", "Rival");

// console.log(game.playRound(8));
// console.log(game.playRound(5));
// console.log(game.playRound(2));
// console.log(game.playRound(4));
// console.log(game.playRound(3));
// console.log(game.playRound(1));
// console.log(game.playRound(7));
// console.log(game.playRound(0));
// console.log(game.playRound(6));

// console.log(game.playRound(8));
// console.log(game.playRound(5));
// console.log(game.playRound(2));
// console.log(game.playRound(4));
// console.log(game.playRound(3));
// console.log(game.playRound(1));
// console.log(game.playRound(7));
// console.log(game.playRound(0));
// console.log(game.playRound(6));

// console.log(game.playRound(8));
// console.log(game.playRound(5));
// console.log(game.playRound(2));
// console.log(game.playRound(4));
// console.log(game.playRound(3));
// console.log(game.playRound(1));
// console.log(game.playRound(7));
// console.log(game.playRound(0));
// console.log(game.playRound(6));

// console.log(game.playRound(8));
// console.log(game.playRound(5));
// console.log(game.playRound(2));
// console.log(game.playRound(4));
// console.log(game.playRound(3));
// console.log(game.playRound(1));
// console.log(game.playRound(7));
// console.log(game.playRound(6));
// console.log(game.playRound(0));
