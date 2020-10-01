/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js
 * 
 * Contains methods to add selected phrase to the gameboard -- addPhraseToDisplay(),
 * Check if the user-selected letter is contained in the active phrase -- checkLetter(),
 * and display the matching letters on the gameboard -- showMatchedLetter(). */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.phrase.toLowerCase();
    };

    addPhraseToDisplay() { // Deconstructs the phrase object into an array of characters
        const chars = this.phrase.split('');
        const div = document.getElementById('phrase');
        for (let i = 0; i < chars.length; i++) {
            const li = document.createElement('li');
            li.innerText = chars[i];
            if (chars[i] != ' ') {
                li.className = 'hide letter ' + chars[i];
            } else {
                li.className = 'space';
            }
            div.firstElementChild.append(li);
        }
    };

    checkLetter(character) { // Checks to see if the active phrase contains the selected letter
        if ((this.phrase).includes(character)) {
            return true;
        } else {
            return false;
        }
    }

    showMatchedLetter(letter) { // Shows all the characters on the game board that match a players selection
        const hidden = document.querySelectorAll('li.letter');
        for (let i = 0; i < hidden.length; i++) {
            if (hidden[i].className === 'hide letter ' + letter) {
                hidden[i].className = 'show letter ' + letter;
            }
        }
    }
};