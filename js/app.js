/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


// Constructors
const button = document.getElementById('btn__reset'); // Selector for start button
const key = document.getElementsByClassName('key'); // Selector for input keys 
let game = '';

// Event Listeners
button.addEventListener('click', () => { // Start button click
    game = new Game();
    game.startGame();
    game.getRandomPhrase();
});

for (let i = 0; i < key.length; i++) { // Keyboard key click
    key[i].addEventListener('click', () => {
        let letter = key[i];
        game.handleInteraction(letter);
        game.checkForWin();
    });
}