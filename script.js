const startButton = document.getElementById('start-button');
const startScreen = document.getElementById('start-screen');
const gameGrid = document.getElementById('game-grid');
const singleCell = document.querySelector('.cell');



startButton.addEventListener('click', () => {
    startScreen.classList.add('d-none');
    gameGrid.classList.remove('d-none');

});