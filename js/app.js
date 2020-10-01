/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js 
 * 
 * Creates a new game object and contains code that handles
 * event listeners for player interaction with the start 
 * button and on-screen keyboard.
 * */




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