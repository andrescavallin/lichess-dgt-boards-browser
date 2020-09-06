/**
 * REQUIRED MODULES
 */

/**
 * CONFIGURATION VALUES
 */
/**
 * CONFIGURATION VALUES
 */
var nconf = require('./bconf');
var verbose = Boolean(nconf.get('verbose'));; //Verbose on or off
const splitWords = Boolean(nconf.get('splitWords'));
speechSynthesisOn = Boolean(nconf.get('speechSynthesisOn'));; //Text To Speech on or off
/**
 * GLOBAL VATIABLES
 */
var lastText = '';

module.exports = {
    say: (text) => {
        //Check Voice is disables
        if (!speechSynthesisOn) return;
        //Check if the text is the same as the last one, if so, skip this play
        if (text == lastText) {
            if (verbose) console.log(colors.dim.cyan(`Text: '${text}' is the same as the last Text received.`));
            //return;
            //Don't return since with SAN this can be very common. Wee need to know the color of the player to prevent real duplicates
        }
        else
            lastText = text;

        //Split phrase to have fewer audio files
        //text.split(' ').forEach(word => {
        if (verbose) console.log('TTS - for text: ' + text);
        wordArray(text).forEach(word => {
            if (word.length > 0 && word != " ") {
                //window.speak(word);
                var utterThis = new SpeechSynthesisUtterance(word);
                var selectedOption = localStorage.getItem("voice"); //voiceSelect.selectedOptions[0].getAttribute('data-name');
                var availableVoices = speechSynthesis.getVoices();
                for (i = 0; i < availableVoices.length; i++) {
                    if (availableVoices[i].name === selectedOption) {
                        utterThis.voice = availableVoices[i];
                        break;
                    }
                }
                //utterThis.pitch = pitch.value;
                utterThis.rate = .60;
                speechSynthesis.speak(utterThis);                
            }
        });
    }
};

/**
 * Return true if the string contains at least one numeric character
 * @param {string} myString 
 */
function hasNumber(myString) {
    return /\d/.test(myString);
}

function wordArray(text) {
    var myArray = new Array;
    if (!splitWords) {
        //This will use more disk space but will sound much better
        //Just return a single item array with the whole text.
        myArray.push(text.trim());
        return myArray;
    }
    var wordArray = text.split(' ');
    var phrase = '';
    for (let i = 0; i < wordArray.length; i++) {
        //Check if has a number. If it has it must be its own word
        if (hasNumber(wordArray[i])) {
            //Push previos phrase into Array
            if (phrase != '') {
                myArray.push(phrase.trim());
            }
            //Push this move as separate prhase into Array
            myArray.push(wordArray[i]);
            //Clear prhase
            phrase = '';
        }
        else if (wordArray[i].length > 0 && wordArray[i] != ' ') {
            //Since this is not a square keep adding this to the prhase
            phrase += ' ' + wordArray[i];
        }
    }
    //Push last phrase into Array if any
    if (phrase != '') {
        myArray.push(phrase.trim());
    }
    return myArray;
}