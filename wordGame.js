/*window.onload = function() {
    getData();
}*/

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var error = 0;
var points = 0;
var counter = 15;
var letter = 0;
function start() {
    document.getElementById("startBtn").style.display = "none";
    starter();
}

async function starter() {
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
    addLetter();
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
    for (var counter=15;counter>=0;counter--)
    {
        document.getElementById("timer").textContent="Il reste "+"("+[counter]+"s)";
        await sleep(1000);
    }
    displayScore();
}

function keyCode(event,i) {
    var x = event.keyCode;
    var word = document.getElementById("letter").textContent;
    console.log(word[letter]);
    var n = word[letter].charCodeAt();
    if (x === n) {
        letter+=1;
        if (letter===2) {
            error=0;
            points+=1;
            letter=0;
            document.querySelector("#letterDiv").remove();
            addLetter();
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
        points-=1;
}

function addLetter() {
    var n = Math.floor(Math.random() * 26);
    var chr = String.fromCharCode(65 + n);
    var n = Math.floor(Math.random() * 26);
    var chr2 = String.fromCharCode(65 + n);
    var main = document.getElementById("corps");
    var div = document.createElement("div");
    div.id = "letterDiv";
    var div2 = document.createElement("div");
    div2.className = "letterBlock";
    var letter = document.createElement("h1");
    letter.id = "letter";
    letter.textContent = chr + chr2;
    div2.appendChild(letter);
    div.appendChild(div2);
    main.appendChild(div);
    document.addEventListener('keydown',keyCode);
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

/*function getData(){
fetch('get_data')
    .then(response => response.json())                                    	 
    .then(function (data) {
        console.log(data);

    data.forEach(function(item, index, array){
        ajouter(item);
});*/