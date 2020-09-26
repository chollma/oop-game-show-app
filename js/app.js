/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = '';
const button = document.getElementById('btn__reset'); // Event listener for start button
button.addEventListener('click', () => {
    game = new Game().startGame();
});