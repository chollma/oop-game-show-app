/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = '';
const button = document.getElementById('btn__reset'); // Selector for start button
const key = document.getElementsByClassName('key'); // Selector for input keys
button.addEventListener('click', () => { // Event listener for start button click
    game = new Game();
    game.startGame();


});
for (let i = 0; i < key.length; i++) { // Event listener for keyboard click
    key[i].addEventListener('click', () => {
        let letter = key[i].innerText;
        game.handleInteraction(letter);
        console.log(letter);
    });
}