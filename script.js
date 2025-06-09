/* Start button behavior*/
const startButton = document.getElementById('start-button');
const gameGrid = document.getElementById('game-grid');
const startContainer = document.getElementById('start-container');

startButton.addEventListener('click', () => {
    startContainer.classList.add('d-none');
    gameGrid.classList.remove('d-none');
});