/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


// Constructors
const button = document.getElementById('btn__reset');
const key = document.querySelectorAll('button.key');
let game = '';

// Event Listeners
button.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

for (let i = 0; i < key.length; i++) {
    key[i].addEventListener('click', () => {
        selectedKey = key[i];
        game.handleInteraction();
    });
}