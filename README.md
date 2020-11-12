> <span style="color:red;font-weight:bold">NOTE:</span> This project has been integrated directly into Lichess.org  . Please visti:</br>
https://lichess.org/dgt

---
OLD README

<div id='wrapper' style='text-align: center;'>
    <div style='display: inline-block; vertical-align: middle;'>
        <a href="https://www.digitalgametechnology.com/index.php/products/electronic-boards">
        <img width="128" alt="DGT Logo" src="https://www.digitalgametechnology.com/images/DGT_The_Chess_Innovators.jpg"></a>
        <br/>
    </div>
    <div style='display: inline-block; vertical-align: middle;'>
        <a title="ornicar / AGPL (http://www.gnu.org/licenses/agpl.html)" href="https://lichess.org">
        <img width="110" alt="Lichess Logo" src="https://upload.wikimedia.org/wikipedia/commons/a/af/Lichess_Logo.svg"></a>
        <br/>lichess.org
    </div>
</div>


<!-- [![FVCproductions](https://avatars1.githubusercontent.com/u/4284691?v=3&s=200)](http://fvcproductions.com) -->

# lichess-dgt-boards-browser

> Play on <a hred="https://lichess.org/">Lichess.org</a> using your <a href="https://www.digitalgametechnology.com/index.php/products/electronic-boards">DGT Electronic Board</a> as input. Incoming moves can be played on audio devices or displayed on the screen. This code can easily be adaptaed to play with other boards.


> The program works by connecting to Lichess via the Board API set of APIs, and to the DGT Board by opening a websocket connecting to the free LiveChess 2.2 which is the software DGT developed to broadcast tournaments. When moves are played on the board the program will detect those and send them to Lichess, and moves played on lichess by your opponent will be announced on screen and by audio, and they need to be executed on the board manually. Text to speech is provided by the Browser, and several languages are supported.

---

## Table of Contents

- [Playing](#Playing)
- [Requirements](#Requirements)
- [Configuration](#Configuration)
- [Building](#Building)
- [License](#license)

---
## Playing

If you just want to play using your DGT Electronic Board on Lichess.org you can just visit the GitHub Page for this project and play from there.</br>
https://andrescavallin.github.io/lichess-dgt-boards-browser/ </br>
There is no need to download this project or to install anything else except LiveChess 2.2.5 or later as explained in the next section.

---
## Requirements

- DGT Board
    - Any **DGT Electronic Board** including Smart Board, Blue Tooth, USB and Serial Boards [https://www.digitalgametechnology.com/index.php/products/electronic-boards]
    - **LiveChess 2.2** Software installed, opened and able to see the board 
    [http://www.livechesscloud.com/software/]
- Lichess
    - A **Lichess.org** online account 
    [https://lichess.org/signup]
    - A Lichess **API Token** with the following scopes 
    [https://lichess.org/account/oauth/token/create?scopes[]=board:play&scopes[]=preference:read&scopes[]=challenge:read&scopes[]=challenge:write&scopes[]=msg:write&description=DGT+Board]
        - Play games with the board API
        - Read preferences
        - Read incoming challenges (coming soon)
        - Create, accept, decline challenges (coming soon)
        - Send private messages to other players (coming soon)
    - oAuth not currently supported, only API Token. See Above


[![Build Status](http://img.shields.io/travis/badges/badgerbadgerbadger.svg?style=flat-square)](https://travis-ci.org/badges/badgerbadgerbadger) [![Dependency Status](http://img.shields.io/gemnasium/badges/badgerbadgerbadger.svg?style=flat-square)](https://gemnasium.com/badges/badgerbadgerbadger) [![Coverage Status](http://img.shields.io/coveralls/badges/badgerbadgerbadger.svg?style=flat-square)](https://coveralls.io/r/badges/badgerbadgerbadger) [![Code Climate](http://img.shields.io/codeclimate/github/badges/badgerbadgerbadger.svg?style=flat-square)](https://codeclimate.com/github/badges/badgerbadgerbadger) [![Github Issues](http://githubbadges.herokuapp.com/badges/badgerbadgerbadger/issues.svg?style=flat-square)](https://github.com/badges/badgerbadgerbadger/issues) [![Pending Pull-Requests](http://githubbadges.herokuapp.com/badges/badgerbadgerbadger/pulls.svg?style=flat-square)](https://github.com/badges/badgerbadgerbadger/pulls) [![Gem Version](http://img.shields.io/gem/v/badgerbadgerbadger.svg?style=flat-square)](https://rubygems.org/gems/badgerbadgerbadger) [![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org) [![Badges](http://img.shields.io/:badges-9/9-ff6799.svg?style=flat-square)](https://github.com/badges/badgerbadgerbadger)


---

## Configuration 


> Explanation of each value

 - <span style="font-weight:bold">Lichess base URL (baseURL)</span><p>The base URL for Lichess. Use https://lichess.org unless you need to target development environments or your own Lichess fork.</p>
 - <span style="font-weight:bold">Lichess API Access Token (personalToken)</span> <p>This is your lichess token obtained from <a href="https://lichess.org/account/oauth/token/create?scopes[]=board:play&scopes[]=preference:read&scopes[]=challenge:read&scopes[]=challenge:write&scopes[]=msg:write&description=DGT+Board">Personal API access token</a></p>
 - <span style="font-weight:bold">Verbose</span> <p>Set this as `false` unless you want to debug connectivity with lihcess or the DGT Board</p>
 - <span style="font-weight:bold">Announce All Moves</span> <p>When set to `No` will only announce moves from opponent, when set to `Yes`, will annouce all moves.</p>
 - <span style="font-weight:bold">Announce Move Format</span> <p>Possible values are `san` and `uci` . San is nicer but will require more storage for Text To Speech since it includes the name the of the piece, while uci only includes origin and target squares</p>
 - <span style="font-weight:bold">Voice</span> <p>The name of the Text To Speech persona used by the browser for generating the audio file. </p>
 - <span style="font-weight:bold">"keywords": {...}</span><p>This object contains the english words what will be used to tranlate san moves into an announcement. If you want to use spanish for example, replace the values, as in this sample:</p>


```javascript

    "keywords": {
        "K": "Rey",
        "Q": "Dama",
        "R": "Torre",
        "B": "Alfil",
        "N": "Caballo",
        "P": "Peón",
        "x": "Por",
        "+": "Jaque",
        "#": "Jaquemate",
        "(=)": "Juego termina en Tablas",
        "O-O": "Enroque corto",
        "O-O-O": "Enroque largo",
        "white": "Blancas",
        "black": "Negras",
        "wins by": "ganan por",
        "timeout": "timeout",
        "resignation": "dimisión",
        "illegal": "incorrecta",
        "move": "jugada"
    }

```
---

## Building

In order to run this code on your own machine you will need an HTTP server. For example:
```
$ http-server .  
```
Then visit http://localhost:8080/index.html

If you make changes to the code, you will need to run browserify again
```
$ browserify app.js -o lichess-dgt-boards-browser.js 
```
And then you will need to add this line of code to the generated bundle <b>lichess-dgt-boards-browser.js</b>
```
exports.speechSynthesis = speechSynthesis;
```
at line number 25373 before 
<b>exports.log = log;</b>
 . It will look something like this:
````
exports = module.exports = require('./debug');
exports.speechSynthesis = speechSynthesis;
exports.log = log;
exports.formatArgs = formatArgs;
````
Failing to add the line <b>exports.speechSynthesis = speechSynthesis;</b> will result in that speech synthesis will always play witht he default voice.


---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Developed during April - August 2020
