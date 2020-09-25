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
        for (let i = 0; i < chars.length; i++) {
            const li = document.createElement('li');
            li.innerText = chars[i];
            if (chars[i] != " ") {
                li.className = 'hide letter ' + chars[i];
            } else {
                li.className = 'space';
            }
            div.firstElementChild.append(li);
        }
    };
}


//	<div id="phrase" class="section">
//<ul></ul>
//</div>

/*
<div id="phrase" class="section">
    <ul>
        <li class="hide letter h">h</li>
        <li class="hide letter o">o</li>
        <li class="hide letter w">w</li>
        <li class="space"> </li>
        <li class="hide letter a">a</li>
        <li class="hide letter r">r</li>
        <li class="hide letter e">e</li>
        <li class="space"> </li>
        <li class="hide letter y">y</li>
        <li class="hide letter o">o</li>
        <li class="hide letter u">u</li>
    </ul>
</div>*/