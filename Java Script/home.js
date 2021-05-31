function ageInDays()
{
    var tb = document.getElementById("flex-box-result");
    tb.innerHTML ="";
    var year = prompt("What is your fucking birth year?");
    var age = (2021-year)*365;
    var h1 = document.createElement('h1');
    var ans = document.createTextNode("You are "+age+' days old');
    h1.setAttribute('id','ageInDays');
    h1.append(ans);
    document.getElementById('flex-box-result').appendChild(h1);
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