/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const button = document.getElementById('btn__reset'); // Event listener for start button
button.addEventListener('click', () => { console.log('The reset button was hit') });

/*const game = new Game();
//game.phrases.forEach((phrase, index) => {
//  console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
//});*/



/*const logPhrase = (phrase) => {
    console.log(`Phrase - phrase: `, phrase.phrase);
};
const game = new Game();
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());*/

/*const game = new Game();
const randomPhrase = game.getRandomPhrase();
const phrase = new Phrase(randomPhrase.phrase);
phrase.addPhraseToDisplay();*/

const game = new Game();
game.startGame();
//console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);