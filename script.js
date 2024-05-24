function RNG(seed) {
    this.m = 0x80000000; // 2**31
    this.a = 21348305;
    this.b = 92322;

    this.state = seed ? seed : Math.floor(Math.random() * (this.m - 1));
}

RNG.prototype.next_int = function() {
    this.state = (this.a * this.state + this.b) % this.m;
    return this.state;
}

RNG.prototype.next_float = function() {
    return this.next_int() / (this.m - 1);
}

RNG.prototype.next_range = function(start, end) {
    var range = end - start;
    var f = this.next_int() / this.m;
    return start + Math.floor(range * f);
}

RNG.prototype.choice = function(array) {
    return array[this.next_range(0, array.length)];
}




const mat_data = {"0":"Broccolisoppa serveras med hembakt br\u00f6d & p\u00e5l\u00e4gg","1":"Panerad fisk serveras med kokt potatis & kalls\u00e5s","2":"Ramsl\u00f6kssoppa serveras med br\u00f6d & p\u00e5l\u00e4gg","3":"Potatisbullar serveras med fl\u00e4sk & lingon","4":"Ox pytt serveras med vitl\u00f6ksdressing","5":"Stekt falukorv med stuvade makaroner alt makaroner","6":"Ugnsbakad kyckling i Dragon & chilis\u00e5s serveras med ris\/havreris","7":"Indonesisk linsgryta serveras med ris\/havreris","8":"schnitzel serveras med Bearnaise och klyftpotatis.","9":"K\u00f6ttf\u00e4rss\u00e5s & spagetti","10":"Asiatisk kycklingsoppa (lime, ingef\u00e4ra, chili, kokosgr\u00e4dde)","11":"Panerad fisk serveras med Remoulad & kokt potatis","12":"Morotssoppa (H\u00f6gsbo)serveras med br\u00f6d och p\u00e5l\u00e4gg","13":"Kycklinggryta (Chili mai thai) serveras med havreris","14":"K\u00f6ttf\u00e4rss\u00e5s & spagetti","15":"Pasta sallad med kyckling och curry remoulad","16":"1:a maj","17":"Panerad fisk serveras med kokt potatis & dilldipp","18":"Kalkon kebab serveras med tillbeh\u00f6r","19":"korvstroganoff serveras med ris\/havreris","20":"Lasagne serveras med vitl\u00f6ksdressing","21":"H\u00f6gsbo soppa med tillbeh\u00f6r","22":"Apelsinkyckling serveras med ris/havre","23":"Nudel wok med kyckling!","24":"Pasta Carbonnara p\u00e5 kalkon","25":"Majs & potatissoppa serveras med hembakt br\u00f6d & p\u00e5l\u00e4gg","26":"Kyckling i r\u00f6dcurry serveras med kokt ris","27":"Gulaschsoppa","28":"Taco buffe!","29":"K\u00f6ttbullar serveras med potatis & gr\u00e4dds\u00e5s samt lingon","30":"Panerad fisk med remoulads\u00e5s & kokt potatis","31":"Curry kyckling serveras med ris","32":"Grekisk f\u00e4rsruta med soltorkad tomat & persilja serveras med rostad potatis samt honung & vitl\u00f6kss\u00e5s (grekisk yoghurt)","33":"Chili con carne serveras med ris\/matvete","34":"Annandag p\u00e5sk","35":"K\u00f6ttf\u00e4rss\u00e5s & spagetti","36":"Fiskgrat\u00e4ng med Dill och pepparrot serveras med kokt potatis","37":"Stekt falukorv med stuvade makaroner alt makaroner","38":"Hamburgare serveras med br\u00f6d & tillbeh\u00f6r samt potatis mos","39":"Fransk pastagrat\u00e4ng med kyckling","40":"Currygryta med Mango & qourn serveras med ris","41":"P\u00e5sklunch","42":"Italienskt tomats\u00e5s serveras med pasta & hembakt br\u00f6d","43":"Vad k\u00f6ket erbjuder","44":"Ugnsf\u00e4rs serveras med potatis, gr\u00e4dds\u00e5s och lingonsylt","45":"Chiligratinerad kyckling serveras med havreris\/ris","46":"Pasta Carbonara","47":"Indonesisk linsgryta serveras med ris\/havreris","48":"Fiskburgare serveras med potatismos & dressing","49":"Morot & linssoppa, br\u00f6d med p\u00e5l\u00e4gg","50":"Pytt i panna serveras med r\u00f6dbetor","51":"Apelsinkyckling med ris","52":"Tacosoppa serveras med br\u00f6d och gr\u00e4ddfil","53":"Pannbiff serveras med gr\u00e4dds\u00e5s, lingon & kokt potatis","54":"K\u00f6ttbullar serveras med gr\u00e4dds\u00e5s & kokt potatis","55":"Ost och broccolisoppa serveras med br\u00f6d & p\u00e5l\u00e4gg","56":"Lasagne","57":"gulaschsoppa serveras med hembakt br\u00f6d och p\u00e5l\u00e4gg","58":"Curry kyckling med ris","59":"K\u00f6ttf\u00e4rss\u00e5s & spagetti","60":"korvstroganoff serveras med ris","61":"Ugnsbakad kyckling i Dragon & chilis\u00e5s serveras med rostad potatis","62":"Panerad fisk med remoulads\u00e5s & kokt potatis","63":"Kalkon kebab serveras med br\u00f6d & vitl\u00f6ksdressing","64":"Kycklinggryta serveras med Ris","65":"Stekt falukorv med stuvade makaroner","66":"Pasta Carbonnara","67":"Panerad fisk serveras med dills\u00e5s (varm) & koktpotatis","68":"Vad k\u00f6ket erbjuder","69":"Kyckling masala serveras med ris","70":"\u00c4ngamatsoppa serveras med br\u00f6d & p\u00e5l\u00e4gg","71":"chili con carne servas med ris","72":"Fiskgrat\u00e4ng smaksatt med dill serveras med kokt potatis","73":"Potatisbullar serveras med fl\u00e4sk & lingon"}
const alphabet = 'abcdefghijklmnopqrstuvwxyzåäö'.split('');

var Main = {};

Main.correct_text = "";
Main.correct_array = []
// updateCorrectArray();

Main.maxRounds = 3;

Main.round = 0;
Main.points = 0;
Main.mult = 0.0;

Main.wrongLetters = []

const getProb = (r) => 1.6 * Math.exp(-0.6 * r)


const maxCountdown = 45;
const countdownRoundDone = 0;

const startScore = 500;
const pointForCorrect = 20;
const pointForIncorrect = -50;
const pointRoundDone = 100;

const decreaseMult = -0.5;
const startMult = 4.0;
const decreaseMultEvery = 5;
Main.lastMultDecreaseTime = maxCountdown - decreaseMultEvery;
const multRoundDone = 4.0;


const suffixes = {'mult':'x', 'countdown':'s', 'points':'p'}
const prefixes = {'times':'*', 'add':'+'}

var buyTime_left = 3;
const buyTime_cost = 100;
const buyTime_increase = 10;

var buyChili_left = 3;
const buyChili_cost = 10;
const buyChili_increase = 3;

var buyWater_left = 3;
const buyWater_cost = 500;
const buyWater_increase = 2;

var buyRice_left = 3;
const buyRice_cost = 5;
const buyRice_increase = 1000;

var buyRandom_left = 3;
var buyRandom_cost_type = 'points';
var buyRandom_cost = 1;
var buyRandom_increase_type = 'mult';
var buyRandom_increase = 1;
var buyRandom_increase_op = 'add';

const powerUpLow = 1
const powerUpHigh = 5


function buyTime() {
    if (Main.points >= buyTime_cost && buyTime_left > 0) {
        decreaseCountdown(-buyTime_increase);
        changeScore(-buyTime_cost);

        addVisualEffect(document.getElementsByClassName('scoreboard')[0], document.getElementById('countdown'), buyTime_increase)

        buyTime_left -= 1
        document.getElementById('buyTime_left').innerHTML = ` (${buyTime_left})`
    }
}

function buyChili() {
    if (Main.countdown-1 > buyChili_cost && buyChili_left > 0) {
        decreaseCountdown(buyChili_cost);
        changeMult(Main.mult * (buyChili_increase-1))

        addVisualEffect(document.getElementsByClassName('scoreboard')[0], document.getElementById('countdown'), -buyChili_cost)

        buyChili_left -= 1
        document.getElementById('buyChili_left').innerHTML = ` (${buyChili_left})`
    }
}

function buyWater() {
    if (Main.points >= buyWater_cost && buyWater_left > 0) {
        changeScore(Main.points * (buyWater_increase - 1));
        changeScore(-buyWater_cost);

        buyWater_left -= 1
        document.getElementById('buyWater_left').innerHTML = ` (${buyWater_left})`
    }
}

function buyRice() {
    if (Main.mult >= buyRice_cost && buyRice_left > 0) {
        changeMult(-buyRice_cost);
        changeScore(buyRice_increase);

        buyRice_left -= 1
        document.getElementById('buyRice_left').innerHTML = ` (${buyRice_left})`
    }
}

function buyRandom() {
    if (buyRandom_left > 0) {
        if (buyRandom_cost_type == 'mult' && buyRandom_cost < Main.mult) {
            changeMult(-buyRandom_cost);

            buyRandom_use()
        }

        else if (buyRandom_cost_type == 'countdown' && buyRandom_cost < Main.countdown) {
            decreaseCountdown(buyRandom_cost);

            addVisualEffect(document.getElementsByClassName('scoreboard')[0], document.getElementById('countdown'), -buyRandom_cost)

            buyRandom_use()
        }
        
        else if (buyRandom_cost_type == 'points' && buyRandom_cost < Main.points) {
            changeScore(-buyRandom_cost);

            buyRandom_use()
        }
    }
}

function buyRandom_use() {
    if (buyRandom_increase_type == 'mult') {
        if (buyRandom_increase_op == 'add') {
            changeMult(buyRandom_increase);
        }
        else {
            changeMult((buyRandom_increase - 1) * Main.mult);
        }
    }

    else if (buyRandom_increase_type == 'countdown') {
        if (buyRandom_increase_op == 'add') {
            decreaseCountdown(-buyRandom_increase);
            addVisualEffect(document.getElementsByClassName('scoreboard')[0], document.getElementById('countdown'), buyRandom_cost)
        }
        else {
            decreaseCountdown(-(buyRandom_increase - 1) * Main.countdown);
        }
    }

    else if (buyRandom_increase_type == 'points') {
        if (buyRandom_increase_op == 'add') {
            changeScore(buyRandom_increase);
        }
        else {
            changeScore((buyRandom_increase - 1) * Main.points);
        }
    }

    buyRandom_left -= 1;
    document.getElementById('buyRandom_left').innerHTML = ` (${buyRandom_left})`;

    buyRandom_reroll();
}

function buyRandom_reroll() {
    buyRandom_cost_type = Main.rng.choice(['mult', 'countdown', 'points'])

    while (true) {
        buyRandom_increase_type = Main.rng.choice(['mult', 'countdown', 'points']);
        if (buyRandom_increase_type != buyRandom_cost_type) {
            break;
        }
    }

    if (buyRandom_cost_type == 'mult') {
        buyRandom_cost = Main.rng.next_range(1, Main.mult)
    }
    else if (buyRandom_cost_type == 'countdown') {
        buyRandom_cost = Main.rng.next_range(5, Main.countdown)
    }
    else {
        buyRandom_cost = Main.rng.next_range(1, Main.points)
    }

    if (buyRandom_increase_type == 'mult') {
        buyRandom_increase = Main.rng.next_range(1, Math.round(Main.rng.next_float() * 20))
    }
    else if (buyRandom_increase_type == 'countdown') {
        buyRandom_increase = Main.rng.next_range(1, Math.round(Main.rng.next_float() * 60))
    }
    else {
        buyRandom_increase = Main.rng.next_range(1, Math.round(Main.rng.next_float() * 10000))
    }

    if (Main.rng.next_float() > 0.95) {
        buyRandom_increase_op = 'times'
    }
    else {
        buyRandom_increase_op = 'add'
    }

    var bad = `-${buyRandom_cost}` + suffixes[buyRandom_cost_type]
    var good = prefixes[buyRandom_increase_op] + `${buyRandom_increase}` + suffixes[buyRandom_increase_type]

    document.getElementById('buyRandom_cost_good').innerHTML = good;
    document.getElementById('buyRandom_cost_bad').innerHTML = bad;
}



function key_press(event) {
    if (alphabet.includes(event.key)) {
        var letters = Array.prototype.slice.call(document.getElementsByTagName('letter'));
        var all_done = []
        for (var letter of letters) {
            revealLetter(letters.indexOf(letter), letters, event.key)
            all_done.push(!letter.innerHTML == '')
        };

        if (!Main.wrongLetters.includes(event.key) && !Main.correct_array.map((a) => a.toLowerCase()).includes(event.key)) {
            addWrongLetter(event.key);
        }
        
        if (all_done.every((c) => c == true)){
            continueGame();
        }
    }

    if (event.key.toLowerCase() == 'escape') {
        stopGame()
    }
}

function revealLetter(i, elems, key, awardScore=true) {
    if (Main.correct_array[i].toLowerCase() == key) {
        var alreadyRight = getRightLetters().includes(key);
        if (!alreadyRight && awardScore) {
            changeScore(pointForCorrect)
        }

        elems[i].innerHTML = Main.correct_array[i];
        elems[i].style.color = '#0f0'
        var y = setTimeout(() => {elems[i].style.color = '#ddd'}, 700)
    }
}

function revealAllOfLetter(l, awardScore=true) {
    var letters = Array.prototype.slice.call(document.getElementsByTagName('letter'));
    for (const [i, letter] of letters.entries()) {
        revealLetter(i, letters, l, awardScore=awardScore)
    };
}

function getRightLetters() {
    var l = []

    var letters = Array.prototype.slice.call(document.getElementsByTagName('letter'));

    for (var letter of letters) {
        if (letter.innerHTML != '' && !l.includes(letter.innerHTML)) {
            l.push(letter.innerHTML);
        }
    }

    return l
}

function getAllLetters() {
    var l = []

    for (var letter of Main.correct_array) {
        if (!l.includes(letter)) {
            l.push(letter);
        }
    }

    return l
}

function addWrongLetter(l) {
    Main.wrongLetters.push(l)

    var wLetter = document.createElement('wrong-letter')
    if (Main.wrongLetters.length > 1) {
        wLetter.innerHTML = `,${l.toUpperCase()}`;
    }
    else {
        wLetter.innerHTML = `${l.toUpperCase()}`;
    }
    

    document.getElementById('wrong-letters').appendChild(wLetter)

    changeScore(pointForIncorrect)
}

function initHTML() {
    const startDate = new Date(2024, 4, 14)
    var todayDate = new Date()

    var day_n = Math.ceil(Math.abs((startDate - todayDate) / (86400 * 1000)))
    Main.rng = new RNG(day_n);
    // var day_n = 1;
    // Main.rng = new RNG(42);


    // SET POWER-UP COSTS
    document.getElementById('buyTime_cost_good').innerHTML = `+${buyTime_increase}s`;
    document.getElementById('buyTime_cost_bad').innerHTML = `-${buyTime_cost}p`;

    document.getElementById('buyChili_cost_good').innerHTML = `*${buyChili_increase}x`;
    document.getElementById('buyChili_cost_bad').innerHTML = `-${buyChili_cost}s`;

    document.getElementById('buyWater_cost_good').innerHTML = `*${buyWater_increase}p`;
    document.getElementById('buyWater_cost_bad').innerHTML = `-${buyWater_cost}p`;

    document.getElementById('buyRice_cost_good').innerHTML = `+${buyRice_increase}p`;
    document.getElementById('buyRice_cost_bad').innerHTML = `-${buyRice_cost}x`;


    // SET TITLE TO CORRECT DATE
    document.getElementById('day').innerHTML = "Day: ";
    var day = document.createElement('span');
    day.classList.add('coloured');
    day.innerHTML = day_n;
    document.getElementById('day').appendChild(day);
}

function restart(){
    Main.rng = new RNG();

    document.getElementById('results').style.display = 'none';
    document.getElementById('gameBoard').style.display = 'flex';


    // START GAME
    start_game();

    // BIND KEYS
    document.body.addEventListener('keypress', key_press);
}

function restart_daily(){
    const startDate = new Date(2024, 4, 14)
    var todayDate = new Date()
    
    var day_n = Math.ceil(Math.abs((startDate - todayDate) / (86400 * 1000)))
    Main.rng = new RNG(day_n);

    document.getElementById('results').style.display = 'none';
    document.getElementById('gameBoard').style.display = 'flex';


    // START GAME
    start_game();

    // BIND KEYS
    document.body.addEventListener('keypress', key_press);
}

function start_game() {
    Main.round = 1;
    Main.points = startScore;
    Main.mult = startMult;

    Main.countdown = maxCountdown;
    Main.lastMultDecreaseTime = maxCountdown - decreaseMultEvery;
    Main.countdownInterval = setInterval(decreaseCountdown, 1000);
    
    document.getElementById('countdown').innerHTML = `${Main.countdown}s`;
    document.getElementById('mult').innerHTML = `${Main.mult}x`;
    document.getElementById('decreaseAt').innerHTML = `${decreaseMult}x at ${Math.max(Main.lastMultDecreaseTime - decreaseMultEvery, decreaseMultEvery)}s`;
    document.getElementById('score').innerHTML = `${Main.points}p`;
    document.getElementById('round').innerHTML = `Round:${Main.round}`;
    // decreaseCountdown(0);
    // changeMult(0.0);
    // changeScore(0);
    // increaseRound(1);

    // Power-ups
    buyRandom_reroll();

    buyTime_left = Main.rng.next_range(powerUpLow, powerUpHigh);
    document.getElementById('buyTime_left').innerHTML = ` (${buyTime_left})`
    
    buyChili_left = Main.rng.next_range(powerUpLow, powerUpHigh);
    document.getElementById('buyChili_left').innerHTML = ` (${buyChili_left})`

    buyWater_left = Main.rng.next_range(powerUpLow, powerUpHigh);
    document.getElementById('buyWater_left').innerHTML = ` (${buyWater_left})`
    
    buyRice_left = Main.rng.next_range(powerUpLow, powerUpHigh);
    document.getElementById('buyRice_left').innerHTML = ` (${buyRice_left})`

    buyRandom_left = Main.rng.next_range(powerUpLow, powerUpHigh);
    document.getElementById('buyRandom_left').innerHTML = ` (${buyRandom_left})`

    // New Sentance
    newSentance();
}



function decreaseCountdown(decrease) {
    Main.countdown -= decrease != null ? decrease : 1;

    document.getElementById('countdown').innerHTML = `${Main.countdown}s`;

    if (Main.countdown <= 0) {
        stopGame();
    }

    if (Main.countdown == Main.lastMultDecreaseTime - decreaseMultEvery && Main.countdown >= decreaseMultEvery) {
        Main.lastMultDecreaseTime = Main.countdown
        changeMult(decreaseMult);
    }
}

function changeMult(factor) {
    Main.mult += factor != null ? factor : 0.0

    Main.mult = Math.max(Main.mult, 1.0)

    document.getElementById('mult').innerHTML = `${Main.mult}x`;
    document.getElementById('decreaseAt').innerHTML = `${decreaseMult}x at ${Math.max(Main.lastMultDecreaseTime - decreaseMultEvery, decreaseMultEvery)}s`;

    addVisualEffect(document.getElementsByClassName('scoreboard')[0], document.getElementById('mult'), factor);
}

function changeScore(factor) {
    Main.points += factor;

    var scoreElem = document.getElementById('score');
    scoreElem.innerHTML = `${Main.points}p`;
    
    addVisualEffect(document.getElementsByClassName('scoreboard')[0], scoreElem, factor);
}

function increaseRound(increase) {
    Main.round += increase != null ? increase : 1

    document.getElementById('round').innerHTML = `Round: ${Main.round}`;
}


function addVisualEffect(parentElement, rectElement, factor) {
    var rect = rectElement.getBoundingClientRect();
    
    var direction = factor >= 0 ? 'up' : 'down'
    var string = factor >= 0 ? `+${factor}` : `${factor}`
    
    var vfx = createVisualEffect(rect.top-rect.height*1.5, rect.left+rect.width+5, direction, string);
    
    parentElement.appendChild(vfx);
    var vfx_to = setTimeout(() => parentElement.removeChild(vfx), 2000);

}

function createVisualEffect(top, left, move_direction, innerHTML) {
    var elem = document.createElement('visual-effect');
    elem.style.top = top + "px";
    elem.style.left = left + "px";

    elem.innerHTML = innerHTML;

    if (move_direction == 'up') {
        setTimeout(() => elem.style.top = top - 20 + "px", 400);
        elem.style.color = '#080'
    }
    else {
        setTimeout(() => elem.style.top = top + 20 + "px", 400);
        elem.style.color = '#f00'
    }

    var opacity_to = setTimeout(() => elem.style.opacity = "0%", 1);

    return elem
}


function newSentance() {
    document.querySelector('.sentance').innerHTML = ''

    Main.correct_text = Main.rng.choice(Object.values(mat_data))

    updateCorrectArray();

    var words = Main.correct_text.split(' ');
    words.forEach((word) => addWord(word, words.indexOf(word)));

    for (const [i, letter] of getAllLetters().entries()) {
        if (Main.rng.next_float() <= getProb(Main.round)) {
            revealAllOfLetter(Main.correct_array[i], awardScore=false);
        }
    }
    changeScore(getRightLetters().length * pointForCorrect);

}

function stopGame() {
    clearInterval(Main.countdownInterval);

    document.getElementById('results').style.display = 'flex';

    document.body.removeEventListener('keypress', key_press);

    document.getElementById('final-score').innerHTML = `Final Score: ${calculateFinalScore()}`
}

function calculateFinalScore() {
    return Main.points * Main.mult
}

function continueGame() {
    decreaseCountdown(countdownRoundDone);
    changeMult(multRoundDone);

    if (Main.round >= Main.maxRounds) {
        stopGame();
        return
    }

    increaseRound();

    newSentance();
}


function addWord(w, i) {
    var sentance = document.querySelector(".sentance");

    var word = document.createElement('div');
    word.classList.add('word');
    w.split('').forEach((letter) => addLetter(letter, word));
    sentance.appendChild(word);
}

function addLetter(l, word) {
    var letter = document.createElement('letter');


    if (alphabet.includes(l.toLowerCase())) {
        letter.innerHTML = "";
    }
    else {
        letter.innerHTML = l;
    }
    
    word.appendChild(letter)
}


function updateCorrectArray() {
    Main.correct_array = Main.correct_text.split('')

    for (var l of Main.correct_array) {
        if (l == " ") {
            Main.correct_array.splice(Main.correct_array.indexOf(l), 1)
        }
    }

    Main.wrongLetters = []
    document.querySelector('#wrong-letters').innerHTML = ''
}

