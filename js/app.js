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
const keys = document.querySelectorAll('button.key');

let game = '';

// Event Listeners
button.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', () => {
        selectedKey = keys[i];
        console.log(selectedKey);
        game.handleInteraction();
    });

}

document.addEventListener('keydown', (event) => {
    let pressed = `${event.key}`
    selectedKey = Array.from(keys).find(key => key.innerHTML === pressed);
    game.handleInteraction();
});