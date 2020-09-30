/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.phrase.toLowerCase();
    };

    addPhraseToDisplay() {
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

    checkLetter(character) {
        if ((this.phrase).includes(character)) {
            return true;
        } else {
            return false;
        }
    }

    showMatchedLetter(letter) {
        const hidden = document.querySelectorAll('li.letter');
        for (let i = 0; i < hidden.length; i++) {
            if (hidden[i].className === 'hide letter ' + letter) {
                hidden[i].className = 'show letter ' + letter;
            }
        }
    }
};