/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js
 * 
 * Contains methods to create an array of phrase objects
 * select a random phrase from an array of objects -- getRandomPhrase(),
 * start the game with clean slate -- startGame(),
 * handle player interactions -- handleInteraction(),
 * check after each interaction if the player won the game -- checkForWin(),
 * remove a life is a player makes a wrong guess -- removeLife(),
 * and end the game if the player is out of lives -- gameOver().
 *  */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    };

    createPhrases() {
        const array = [
            { phrase: 'Live the life you have dreamed' },
            { phrase: 'Through struggle to the stars' },
            { phrase: 'The best way out is always through' },
            { phrase: 'The sky is the daily bread of the eyes' },
            { phrase: 'All truly great thoughts are conceived by walking' }
        ];
        return array;
    };

    getRandomPhrase() { // Generates a random number and accesses the phrase array with this index
        const randomIndex = Math.floor(Math.random() * this.phrases.length);
        const randomPhrase = this.phrases[randomIndex];
        return randomPhrase;
    };

    startGame() { // Selects a new random phrase
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        new Phrase(this.activePhrase).addPhraseToDisplay();
    };

    handleInteraction() { // Handles player interaction with on-screen keyboard 
        let active = new Phrase(this.activePhrase);
        if (selectedKey.disabled == false) {
            if (active.checkLetter(selectedKey.innerText) == true) {
                const letter = selectedKey.innerText;
                selectedKey.className = 'chosen';
                active.showMatchedLetter(letter);
                game.checkForWin();

            } else {
                selectedKey.disabled = true;
                selectedKey.className = 'wrong';
                this.removeLife();
            }

            if (this.checkForWin() === true) {
                this.gameOver(true);
            }
        }
    }

    checkForWin() { // Updates the CSS class to show letters on the board that match a player's selection
        const letters = document.querySelectorAll('li.letter');
        let hidden = [];
        for (let i = 0; i < letters.length; i++) {
            if (letters[i].className.includes('hide')) {
                hidden.push(letters[i]);
            }
        }
        if (hidden.length === 0 && this.missed < 5) {
            return true;
        } else {
            return false;
        }
    }
    removeLife() { // Updates heart image to simulate losing a life in the game
        this.missed += 1;
        const hearts = document.querySelectorAll('img');
        for (let i = 0; i < this.missed; i++) {
            hearts[i].src = 'images/lostHeart.png';
        }
        if (this.missed === 5) {
            this.gameOver(false);
        }
    }
    gameOver(arg) { // Resets the game, shows the overlay and updates the heading appropriately
        const ul = document.querySelector('ul');
        ul.innerHTML = '';
        const buttons = document.querySelectorAll('button')
        for (let i = 1; i < buttons.length; i++) {
            buttons[i].disabled = false;
            buttons[i].className = 'key';
        }
        const hearts = document.querySelectorAll('img');
        for (let i = 0; i < hearts.length; i++) {
            hearts[i].src = 'images/liveHeart.png';
        }
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
    }
}