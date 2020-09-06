/**
 * CONFIGURATION VALUES
 */

const defaultValues =
{
    "baseURL": "https://lichess.org",
    "personalToken": "",
    "liveChessURL": "ws://localhost:1982/api/v1.0",
    "verbose": true,
    "announceAllMoves": false,
    "announceMoveFormat": "san",
    "splitWords": false,
    "voice": "Allison",
    "availableVoices": {
        "Allison": "en-US_AllisonV3Voice",
        "Michael": "en-US_MichaelV3Voice",
        "Sofia": "es-LA_SofiaV3Voice",
        "Enrique": "es-ES_EnriqueV3Voice",
        "Renee": "fr-FR_ReneeV3Voice",
        "Francesca": "it-IT_FrancescaV3Voice"
    },
    "Watson_APIKEY": "atVcyNt1JS9KhudJF5rFiIAdZOr5bY3-xrDr0PU5WgJc",
    "audioFormat": "mp3",
    "windowsAudioPlayer": "./audioplayer/cmdmp3/cmdmp3.exe",
    "keywords": {
        "K": "King",
        "Q": "Queen",
        "R": "Rook",
        "B": "Bishop",
        "N": "Knight",
        "P": "Pawn",
        "x": "Takes",
        "+": "Check",
        "#": "Checkmate",
        "(=)": "Game ends in draw",
        "O-O-O": "Castles queenside",
        "O-O": "Castles kingside",
        "white": "White",
        "black": "Black",
        "wins by": "wins by",
        "timeout": "timeout",
        "resignation": "resignation",
        "illegal": "illegal",
        "move": "move"
    },
    "keywords_spanish_sample": { "K": "Rey", "Q": "Dama", "R": "Torre", "B": "Alfil", "N": "Caballo", "P": "Peón", "x": "Por", "+": "Jaque", "#": "Jaquemate", "(=)": "Juego termina en Tablas", "O-O": "Enroque corto", "O-O-O": "Enroque largo", "white": "Blancas", "black": "Negras", "wins by": "ganan por", "timeout": "timeout", "resignation": "dimisión", "illegal": "incorrecta", "move": "jugada" }
}


module.exports = {
    /**
     * Utilitary function to retrieve and store values from browser storage and manage default values
     * 
     * @param {string} key The key for the configuration value
     * 
     * @returns {var} The configuration value for the provided key stored on the browser, of the default if not found
     */
    get: (key) => {
        var tempConfigValue
        if (localStorage.getItem(key) != null) {
            //return stored value
            if (key=="keywords") {
                try {
                    tempConfigValue = JSON.parse(tempConfigValue);
                }
                catch (error) {
                    tempConfigValue = defaultValues[key];
                }
            }
            else {
                tempConfigValue = localStorage.getItem(key);
                if (tempConfigValue == "true") tempConfigValue = true;
                if (tempConfigValue == "false") tempConfigValue = false;
            }
        }
        else {
            //return default value
            tempConfigValue = defaultValues[key];
        }
        //console.log(key + ": " + tempConfigValue);
        return tempConfigValue;
    }
};






