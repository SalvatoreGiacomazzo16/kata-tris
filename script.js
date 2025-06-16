const startButton = document.getElementById('start-button');
const startScreen = document.getElementById('start-screen');
const gameGrid = document.getElementById('game-grid');
const cells = document.querySelectorAll('.cell');
const playerText = document.getElementById('currentPlayer');
const winnerText = document.getElementById('winner');
const restartButton = document.getElementById('restart-button');

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

    //Stop the game if there's a winner

    if (checkWin(currentPlayer)) {
        winnerText.textContent = `${currentPlayer} WINS!`;

        cells.forEach(cell => cell.removeEventListener('click', handleCellClick));
        return;
    }

    //Draw checking
    if (checkDraw()) {
        winnerText.textContent = "DRAW";
        return;
    }



    // Draw handling

    function checkDraw() {
        return [...cells].every(cell => cell.textContent === 'X' || cell.textContent === 'O');
    }

}

//Winning conditions
const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


function checkWin(player) {
    for (let i = 0; i < winCombinations.length; i++) {
        const [a, b, c] = winCombinations[i];
        if (
            cells[a].textContent === player &&
            cells[b].textContent === player &&
            cells[c].textContent === player
        ) {
            return true;
        }
    }
    return false;
}
//Refresh button
restartButton.addEventListener('click', () => {
    location.reload();
});