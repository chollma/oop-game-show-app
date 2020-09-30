/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        // takes an object > accesses it's value > converts string to lower case
        this.phrase = phrase.phrase.toLowerCase();
    };

    addPhraseToDisplay() {
        // split incoming phrase string into an array of its characters
        const chars = this.phrase.split('');
        // select the phrase div to start adding elements of the phrase
        const div = document.getElementById('phrase');
        // iterate through the characters building the list items in HTML
        for (let i = 0; i < chars.length; i++) {
            const li = document.createElement('li');
            li.innerText = chars[i];
            if (chars[i] != ' ') {
                li.className = 'hide letter ' + chars[i];
            } else {
                li.className = 'space';
            }
            // add the complete HTML to the page
            div.firstElementChild.append(li);
        }
    };

    checkLetter(character) {
        // incoming data is a single character
        // Check if the string includes this character
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