const startButton = document.getElementById('start-button');
const startScreen = document.getElementById('start-screen');
const gameGrid = document.getElementById('game-grid');
const singleCell = document.querySelectorAll('.cell');


//Start Button handling
startButton.addEventListener('click', () => {
    startScreen.classList.add('d-none');
    gameGrid.classList.remove('d-none');
});

//Players handling
const playerOne = 'X';
const playerTwo = 'O';
let currentPlayer = playerOne;