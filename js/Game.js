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
            this.removeLife();
        }


    };

    checkForWin() {
        const letters = document.querySelectorAll('li.letter');
        let hidden = [];
        for (let i = 0; i < letters.length; i++) {
            if (letters[i].className.includes('hide')) {
                hidden.push(letters[i]);
            }
        }
        if (hidden.length === 0 && this.missed < 5) {
            console.log('you won!')
            this.gameOver(true);
        }
    }
    removeLife() {
        this.missed += 1;
        console.log('Bad guess. Life Removed');
        const hearts = document.querySelectorAll('img');
        for (let i = 0; i < this.missed; i++) {
            hearts[i].src = 'images/lostHeart.png';
        }
        if (this.missed === 5) {
            this.gameOver(false);
        }
    }
    gameOver(arg) {
        const overlay = document.getElementById('overlay');
        const title = document.getElementById('game-over-message');
        overlay.style.display = '';
        if (arg) {
            overlay.className = 'win';
            title.innerHTML = 'You won!'
        } else {
            overlay.className = 'lose';
            title.innerHTML = 'You are out of lives. Try again!'
        }
        // update the h1 
        // replate overlay css class with win or lose
    }
}