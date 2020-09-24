/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }
    createPhrases() {
        const phrases = [
            { phrase: 'This is the first phrase' },
            { phrase: 'This is the second phrase' },
            { phrase: 'This is the third phrase' },
            { phrase: 'This is the fourth phrase' },
            { phrase: 'This is the fifth phrase' }
        ];
        return phrases;
    };

    randomPhrase() {
        // Create a random number
        // Select a random phrase by this random number
        // Return the random phrase object
    };
}