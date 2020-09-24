/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    };

    addPhraseToDisplay() {
        // It's easy to select a random phrase and print it, but now we need to take the random phrase, parse out individual characters and add them as indiv. list items
        const div = document.getElementById('phrase'); // select the phrase div to start adding elements of the phrase
        const li = document.createElement('li'); // create a list item
        li.className = 'hide letter '; // add a class name to the new list item
        div.firstElementChild.append(li); // add the list item with its class name to the div we've selected
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