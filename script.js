const startButton = document.getElementById('start-button');
const startScreen = document.getElementById('start-screen');
const gameGrid = document.getElementById('game-grid');
const cells = document.querySelectorAll('.cell');
const playerText = document.getElementById('currentPlayer');
const winnerText = document.getElementById('winner');


//Start Button handling
startButton.addEventListener('click', () => {
    startScreen.classList.add('d-none');
    gameGrid.classList.remove('d-none');
});

//Players handling
const playerOne = 'X';
const playerTwo = 'O';
let currentPlayer = playerOne;


// Mark on grid handling
cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

function handleCellClick(event) {
    const cell = event.target;

    //Stop cell if already marked
    if (cell.textContent === 'X' || cell.textContent === 'O') {
        return;
    }

    cell.textContent = currentPlayer;

    //Change player
    if (currentPlayer === 'O') {
        currentPlayer = 'X';
    } else {
        currentPlayer = 'O';
    }
    //Turn for player on screen
    playerText.textContent = 'Turn for : ' + currentPlayer;
}
