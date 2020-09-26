/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {

        this.phrase = phrase.toLowerCase();
    };

    addPhraseToDisplay() {
        const chars = this.phrase.split(''); // split incoming phrase string into an array of its characters
        const div = document.getElementById('phrase'); // select the phrase div to start adding elements of the phrase
        for (let i = 0; i < chars.length; i++) { // iterate through the characters building the list items in HTML
            const li = document.createElement('li');
            li.innerText = chars[i];
            if (chars[i] != " ") {
                li.className = 'hide letter ' + chars[i];
            } else {
                li.className = 'space';
            }
            div.firstElementChild.append(li); // add the complete HTML to the page
        }
    };

    checkLetter(selected) {

    }
}