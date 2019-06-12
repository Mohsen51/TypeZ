function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var error = 0;
var points = 0;
var counter = 15;
var letter = 0;
function start(data) {
    document.getElementById("startBtn").style.display = "none";
    starter(data);
}

async function starter(data) {
    var main = document.getElementById("corps");
    var div = document.createElement("div");
    var starter = document.createElement("h1");
    div.appendChild(starter);
    main.appendChild(div);
    for (var i=3;i>0;i--)
    { 
        starter.textContent = i;
        await sleep(1000);
    }
    starter.textContent = "GO";
    await sleep(1000);
    document.getElementById("corps").innerHTML = "";
    timer();
    document.addEventListener("keydown", function(event) { keyCode(event,data); });
    addLetter(data);
}

function displayScore() {
    document.querySelector("#corps").innerHTML = "";
    var main = document.getElementById("corps");
    var div = document.createElement("div");
    var message = document.createElement("h1");
    message.textContent = "You earned "+points+" points";
    div.appendChild(message);
    main.appendChild(div);
}

async function timer() {
    var main = document.getElementById("corps");
    var div = document.createElement("div");
    div.id = "time";
    var timer = document.createElement("p");
    timer.id = "timer";
    div.appendChild(timer);
    main.appendChild(div);
    for (var counter=20;counter>=0;counter--)
    {
        document.getElementById("timer").textContent="Il reste "+"("+[counter]+"s)";
        await sleep(1000);
    }
    displayScore();
}

function keyCode(event,data) {
    var x = event.keyCode;
    var word = document.getElementById("letter").textContent;
    var size = word.length;
    var n = word[letter].charCodeAt() - 32;
    if (x === n) {
        letter+=1;
        if (letter===size) {
            error=0;
            points+=1;
            letter=0;
            document.querySelector("#letterDiv").remove();
            addLetter(data);
        }
    }
    else if (error===0)
    {
        letter=0;
        points-=1;
        error=1;
        wrong();
    }    
    else
    {
        points-=1;
    }
}

function addLetter(data) {
    var n = Math.floor(Math.random() * 7775);
    var main = document.getElementById("corps");
    var div = document.createElement("div");
    div.id = "letterDiv";
    var div2 = document.createElement("div");
    var letter = document.createElement("h1");
    letter.id = "letter";
    letter.textContent = data[n];
    div2.appendChild(letter);
    div.appendChild(div2);
    main.appendChild(div);
}

function wrong() {
    var main = document.getElementById("corps");
    var div = document.getElementById("letterDiv");
    var div2 = document.createElement("div");
    var message = document.createElement("h1");
    message.textContent = "You missclicked, try again the entire word";
    div2.appendChild(message);
    div.appendChild(div2);
    main.appendChild(div);
}
function getData(){
    fetch('https://raw.githubusercontent.com/paritytech/wordlist/master/res/wordlist.json')
    .then(response => response.json())                                    	 
    .then(function (data) {
        start(data);
    })
}