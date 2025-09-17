console.log("Hello World");

// Game state variables
let board;
let currentPlayer;
let gameOver;
let winner;

// Initialize game
function initializeGame() {
  board = ["", "", "", "", "", "", "", "", ""]; // empty board
  currentPlayer = "X";
  gameOver = false;
  winner = null;
  renderBoard();
}

// Render board and status
function renderBoard() {
  const cells = document.getElementsByClassName("cell");

  for (let i = 0; i < board.length; i++) {
    cells[i].innerText = board[i];
  }

  const statusText = document.getElementById("status");
  if (gameOver) {
    statusText.innerText = winner ? `${winner} wins! 🎉` : "It's a tie!";
  } else {
    statusText.innerText = `Current Turn: ${currentPlayer}`;
  }
}

// Check for winner
function checkWinner() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
    [0, 4, 8], [2, 4, 6]              // diagonals
  ];

  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      gameOver = true;
      winner = board[a];
      return;
    }
  }

  if (!board.includes("")) {
    gameOver = true; // tie
  }
}

// Handle cell click
function cellClicked(index) {
  if (board[index] === "" && !gameOver) {
    board[index] = currentPlayer === "X" ? "❌" : "⭕"; // using emojis
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    checkWinner();
    renderBoard();
  }
}

// Start game on load
window.onload = initializeGame;
