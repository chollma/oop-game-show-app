/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [ // What phrases do I have to choose from for the game?
            { phrase: 'I took a walk in the woods and came out taller than the trees' },
            { phrase: 'All good things are wild and free' },
            { phrase: 'In every walk with nature one receives far more than he seeks' },
            { phrase: 'The human spirit needs places where nature has not been rearranged by the hand of man' },
            { phrase: 'I go to nature every day for inspiration in the days work' }

        ];
        this.activePhrase = null; // What is the phrase selected for the current game
    };

    getRandomPhrase() {
        // Select a random phrase from the phrases property
        let randomIndex = Math.floor(Math.random() * this.phrases.length); // If the phrases array has more phrases added, this should still work!
        const randomPhrase = this.phrases[randomIndex];
        return randomPhrase;
    };
}