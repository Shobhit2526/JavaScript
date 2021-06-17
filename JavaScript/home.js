function ageInDays()
{
    var tb = document.getElementById("flex-box-result");
    tb.innerHTML ="";
    var year = prompt("What is your birth year?");
    if(year)
    {
        var age = (2021-year)*365;
        var h1 = document.createElement('h1');
        var ans = document.createTextNode("You are "+age+' days old');
        h1.setAttribute('id','ageInDays');
        h1.append(ans);
        document.getElementById('flex-box-result').appendChild(h1);
    }
    else alert("Enter the Birth Year")
}

function reset()
{
    document.getElementById('ageInDays').remove();
}

function gencat()
{
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://media4.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif?cid=ecf05e47qk93it4ihmyh3zg00qukml8wfx3x17t00x2w34p1&rid=giphy.gif&ct=g";
    div.appendChild(image);
}

function resetcat()
{   
    const myNode = document.getElementById("flex-cat-gen");
    myNode.innerHTML = '';
}
function rpsGame(yourchoice){
    var humanChoice, botChoice;
    humanChoice = yourchoice.id;

    botChoice = numberToCHoice(randToRpsInt());

    results = decisionWinner(humanChoice,botChoice);

    message = finalMessage(results);

    rpsFrontEnd(yourchoice.id,botChoice,message);
}

function randToRpsInt()
{
    return Math.floor(Math.random()*3);
}

function numberToCHoice(number)
{
    return ['rock','paper','scissors'][number];
}

function decisionWinner(yourchoice, computerchoice)
{
    var rpsDatabase = {
        'rock' : {'scissors':1,'rock':0.5, 'paper':0},
        'paper' :{'scissors' :0, 'rock':1, 'paper':0.5},
        'scissors' :{'scissors':0.5, 'rock':0, 'paper':1}
    }

    var yourscore = rpsDatabase[yourchoice][computerchoice];
    var computerscore = rpsDatabase[computerchoice][yourchoice];

    return [yourscore,computerscore];
}

function finalMessage([yourscore,computerscore])
{
    if(yourscore===0)
    {
        return {'message': 'You Lost!', 'color': 'red'};
    }

    else if(yourscore===1)
    {
        return {'message': 'You Won!', 'color': 'green'};
    }

    else
    {
        return {'message': 'Tied!', 'color': 'yellow'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage)
{
    var imagesDatabase = {
        'rock' : document.getElementById('rock').src,
        'paper' : document.getElementById('paper').src,
        'scissors' : document.getElementById('scissors').src
    }
    const newnode= document.getElementById("flex-box-rps-div");
    newnode.innerHTML = '';

    // document.getElementById('rock').remove();
    // document.getElementById('paper').remove();
    // document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img id ='user' src='" + imagesDatabase[humanImageChoice] + "' height = 150 width = 150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"
    messageDiv.innerHTML = "<h1 id='heading' style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img id = 'comp' src='" + imagesDatabase[botImageChoice] + "' height = 150 width = 150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

}

var all_buttons = document.getElementsByTagName('button');
var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]);
}

console.log(copyAllButtons);

function buttoncolorchange(buttonThingy) {
    if (buttonThingy.value == 'red') {
        buttonsred();
    } else if (buttonThingy.value == 'green') {
        buttonsgreen();
    } else if (buttonThingy.value == 'reset') {
        buttoncolorreset();
    } else if (buttonThingy.value = 'random') {
        randomcolors();
    }
}

function buttonsred() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsgreen() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttoncolorreset() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomcolors() {
    let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']
    for (let i = 0; i < all_buttons.length; i++) {
        let randomnumber = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomnumber]);
    }
}

function internshala()
{
        window.open("https://internshala.com/internships/matching-preferences", "_blank");
}

function YouTube()
{
        window.open("https://www.youtube.com/", "_blank");
}

function google()
{
        window.open("https://www.google.com/", "_blank");
}

function hotstar()
{
        window.open("https://www.hotstar.com/in", "_blank");
}

function replay()
{
    const newnode= document.getElementById("flex-box-rps-div");
    newnode.innerHTML = '';
    // document.querySelector('user').remove();
    // document.querySelector('heading').remove();
    // document.querySelector('comp').remove();
    var rockDiv = document.createElement('div');
    var paperDiv = document.createElement('div');
    var scissorsDiv = document.createElement('div');
    // var stylee = document.createElement('div');
    rockDiv.innerHTML="<img id = 'rock' src='https://images.unsplash.com/photo-1525857597365-5f6dbff2e36e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cm9ja3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80' height='150' width='150' alt onclick='rpsGame(this)'>";
    paperDiv.innerHTML ="<img id = 'paper' src='https://media.istockphoto.com/photos/crumpled-white-paper-texture-or-paper-background-for-design-picture-id610006100' height='150' width='150' alt onclick='rpsGame(this)''>";
    scissorsDiv.innerHTML ="<img id = 'scissors' src='https://upload.wikimedia.org/wikipedia/commons/7/76/Pair_of_scissors_with_black_handle%2C_2015-06-07.jpg' height='150' width='150' alt onclick='rpsGame(this)'>";
    document.getElementById('flex-box-rps-div').appendChild(rockDiv);
    document.getElementById('flex-box-rps-div').appendChild(paperDiv);
    document.getElementById('flex-box-rps-div').appendChild(scissorsDiv);
}


// BlackJack

let blackjackGame = {
    'you': {'scoreSpan' : '#your-blackjack-result','div':'#your-box', 'score':0},
    'dealer': {'scoreSpan':'#dealer-blackjack-result', 'div':'#dealer-box', 'score':0},
    'cards': ['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
    'cardsMap': {'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'J':10,'Q':10,'A':[1,11]},
    'wins': 0,
    'losses': 0,
    'draws': 0,
    'isStand': false,
    'turnsOver': false,
};

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

const hitSound = new Audio('sounds/swish.m4a');
const winSound = new Audio('sounds/cash.mp3');
const lossSound = new Audio('sounds/aww.mp3');
const drawSound = new Audio('sounds/draw.mp3')

document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackHit);
document.querySelector('#blackjack-stand-button').addEventListener('click',dealerlogic);
document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackDeal);

function blackjackHit()
{
    blackjackGame['turnsOver'] = false;
    if(blackjackGame['isStand']===false)
    {
        let card = randomCard();
        showCard(card,YOU);
        updateScore(card,YOU);
        showScore(YOU);
    }
}

function randomCard()
{
    let randomIndex = Math.floor(Math.random()*13);
    return blackjackGame['cards'][randomIndex];
}

function showCard(card, activePlayer)
{
    if(activePlayer['score']<=21)
    {
        let cardImage = document.createElement('img');
        cardImage.src = `images/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }
}

function blackjackDeal()
{
    if(blackjackGame['turnsOver']===true)
    {
        blackjackGame['isStand'] = false;

        let yourImages = document.querySelector('#your-box').querySelectorAll('img');
        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');

        for(i=0;i<yourImages.length;i++)
        {
            yourImages[i].remove();
        }
        for(i=0;i<dealerImages.length;i++)
        {
            dealerImages[i].remove();
        }

        YOU['score'] = 0;
        DEALER['score'] = 0;

        //document.querySelector['#your-blackjack-result'].textContent = 0;
        //document.querySelector['#dealer-blackjack-result'].textContent = 0;

        //document.querySelector['#your-blackjack-result'].style.color = '#ffffff';
        //document.querySelector['#dealer-blackjack-result'].style.color = '#ffffff';

        //document.querySelector['#blackjack-result'].textContent = "Let's Play";
        //document.querySelector['#blackjack-result'].style.color = 'black';
        var element1 = document.querySelector("#your-blackjack-result")
        if (element1) {
            element1.textContent = 0;
            element1.style.color = '#ffffff';
        }
        var element2 = document.querySelector("#dealer-blackjack-result")
        if (element2) {
            element2.textContent = 0;
            element2.style.color = '#ffffff';
        }
        var element3 = document.querySelector("#blackjack-result")
        if (element3) {
            element3.textContent = "Let's Play";
            element3.style.color = 'black';
        }
        blackjackDeal['turnsOver'] = true;
    }
}

function updateScore(card, activePlayer)
{
    if(card === 'A')
    {
        if(activePlayer['score']+blackjackGame['cardsMap'][card][1]<=21)
        {
            activePlayer['score'] += blackjackGame['cardsMap'][card][1];
        }
        else
        {
            activePlayer['score'] += blackjackGame['cardsMap'][card][0];
        }
    }
    else
    {
        activePlayer['score'] += blackjackGame['cardsMap'][card];
    }
}

function showScore(activePlayer)
{
    if(activePlayer['score']>21)
    {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'Bust!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    }
    else{
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

function sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerlogic()
{
    blackjackGame['isStand'] = true;

    while (DEALER['score']<16 && blackjackGame['isStand']===true)
    {
        let card = randomCard();
        showCard(card, DEALER);
        updateScore(card, DEALER);
        showScore(DEALER);
        await sleep(1000);
    }

    blackjackGame['turnsOver'] = true;
    let winner = computeWinner();
    showResult(winner);
}

function computeWinner()
{
    let winner;

    if(YOU['score'] <=21)
    {
        if(YOU['score'] > DEALER['score'] || (DEALER['score'] > 21))
        {
            blackjackGame['wins']++;
            winner = YOU;
        }
        else if(YOU['score'] < DEALER['score'])
        {
            blackjackGame['losses']++;
            winner = DEALER;
        }
        else if(YOU['score'] === DEALER['score'])
        {
            blackjackGame['draws']++;
        }
    }

    else if(YOU['score']>21 && DEALER['score']<=21)
    {
        blackjackGame['losses']++;
        winner = DEALER;
    }

    else if(YOU['score']>21 && DEALER['score']>21)
    {
        blackjackGame['draws']++;
    }

    return winner;
}

function showResult(winner)
{
    let message, messageColor;

    if(blackjackGame['turnsOver']===true)
    {
        if(winner===YOU)
        {
            document.querySelector('#wins').textContent = blackjackGame['wins'];
            message = 'You won!';
            messageColor = 'green';
            winSound.play();
        }

        else if( winner === DEALER)
        {
            document.querySelector('#losses').textContent = blackjackGame['losses'];
            message = 'You lost!';
            messageColor = 'red';
            lossSound.play();
        }

        else
        {
            document.querySelector('#draws').textContent = blackjackGame['draws'];
            message = 'You drew!';
            messageColor = 'blue';
            drawSound.play();
        }

        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messageColor;

    }
}