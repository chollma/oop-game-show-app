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

    startGame() {
        const overlay = document.getElementById('overlay'); // Hides the overlay
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase(); // Gets random phrase => sets active phrase
        new Phrase(this.activePhrase.phrase).addPhraseToDisplay();

    }

    handleInteraction() {
        const key = document.getElementsByClassName('key');
        for (let i = 0; i < key.length; i++) {
            key[i].addEventListener('click', () => {
                console.log(key[i].innerText);

            });

        }

        // ● The clicked/chosen letter must be captured.
        // ● The clicked letter must be checked against the phrase for a match.
        // ● If there’s a match, the letter must be displayed on screen instead of the placeholder.
        //  ● If there’s no match, the game must remove a life from the scoreboard.
        // ● The game should check if the player has won the game by revealing all of the letters in
        // the phrase or if the game is lost because the player is out of lives.
        //  ● If the game is won or lost, a message should be displayed on screen.

    }
}