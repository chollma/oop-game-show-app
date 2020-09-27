/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases(); // What phrases do I have to choose from for the game?
        this.activePhrase = null; // What is the phrase selected for the current game
    };

    createPhrases() {
        const array = [
            { phrase: 'This is the first phrase' },
            { phrase: 'This is the second phrase' },
            { phrase: 'This is the third phrase' },
            { phrase: 'This is the fourth phrase' },
            { phrase: 'This is the fifth phrase' }
        ];
        return array;
    };

    getRandomPhrase() {
        const randomIndex = Math.floor(Math.random() * this.phrases.length);
        const randomPhrase = this.phrases[randomIndex];
        return randomPhrase;
    };

    startGame() {
        const overlay = document.getElementById('overlay'); // Hides the overlay
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase(); // Gets random phrase => sets active phrase
        new Phrase(this.activePhrase.phrase).addPhraseToDisplay();
    };

    handleInteraction(args) {
        if (new Phrase(this.activePhrase.phrase).checkLetter(args) === true) {

        } else {
            console.log('Bad guess. Try again');
        }
    };
}