const startButton = document.getElementById('start-button');
const startScreen = document.getElementById('start-screen');
const gameGrid = document.getElementById('game-grid');


startButton.addEventListener('click', () => {
    startScreen.classList.add('d-none');
    gameGrid.classList.remove('d-none');

});