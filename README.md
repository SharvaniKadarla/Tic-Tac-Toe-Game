# Tic-Tac-Toe Game

A fully functional **Tic-Tac-Toe web game** built from scratch using **HTML, CSS, and JavaScript**. 
The game is deployed using **GitHub Pages** and includes custom styling, game logic, score tracking, and interactive features.

---

## 🎯 Objective

The objective was to design and implement a complete Tic-Tac-Toe game using **vanilla web technologies** (HTML, CSS, JavaScript), apply styling using Flexbox, implement game logic manually, and deploy the final application to GitHub Pages.

---

## ✨ Features

- Interactive 3×3 Tic-Tac-Toe board  
- Turn-based gameplay (Player X vs Player O)  
- Winner detection for all possible combinations  
- Draw detection  
- **Score tracking** for X wins, O wins, and draws  
- **Winner highlight animation**  
- **Emoji-based X and O symbols**  
- Reset game functionality  
- Responsive and centered layout  

---

## 🛠️ Tech Stack

- **HTML5** – Structure  
- **CSS3 (Flexbox)** – Styling & layout  
- **JavaScript (ES6)** – Game logic & interactivity  
- **GitHub Pages** – Deployment  

---
## 🚀 Getting Started (Local Setup)
1️⃣ Clone the repository
- `git clone https://github.com/SharvaniKadarla/Tic-Tac-Toe-Game.git`
- `cd Tic-Tac-Toe-Game`

2️⃣ Run a local server

3️⃣ Open in browser
- `http://localhost:8000`

---
#3 🧠 Game Logic Overview

- The game board is stored in a JavaScript array
- Game state tracks:
  - Current player
  - Game over status
  - Winner

- Functions include:
  - `initializeGame()` – resets the board and state
  - `renderBoard()` – updates UI based on game state
  - `checkWinner()` – checks all winning combinations
  - `cellClicked(index)` – handles player moves

---
## 🎨 Styling Overview
- Flexbox is used for:
  - Board layout
  - Cell alignment
  - Centering content
- Custom animations highlight the winning combination
- Emojis are used to visually represent players (❌ and ⭕)

---
## 🔧 Custom Modifications

The following enhancements were added beyond the base requirements:
- Score tracking for wins and draws
- Winner highlight animation
- Emoji-based player symbols
