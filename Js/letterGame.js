/*window.onload = function() {
    getData();
}*/

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var error = 0;
var wrong = 0;
var right = 0;
var points = 0;
var counter = 15;
function start() {
    document.getElementById("startBtn").style.display = "none";
    document.querySelector(".rules").style.display = "none";
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
    var message = document.createElement("h3");
    message.textContent = "You earned "+points+" point(s)";
    var list = document.createElement("ul");
    var rightResp = document.createElement("li");
    rightResp.textContent = "Right answer(s) : " + right;
    var wrongResp = document.createElement("li");
    wrongResp.textContent = "Wrong answer(s) : " + wrong;
    list.appendChild(rightResp);
    list.appendChild(wrongResp);
    div.appendChild(message);
    div.appendChild(list);
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
    for (var counter=30;counter>=0;counter--)
    {
        document.getElementById("timer").textContent="Il reste "+"("+[counter]+"s)";
        await sleep(1000);
    }
    displayScore();
}

function keyCode(event) {
    var x = event.keyCode;
    if (x>64 && x<91)
    {
        var word = document.getElementById("letter").textContent;
        var n = word.charCodeAt();
        if (x === n) {
            right+=1;
            points+=2;
            error=0;
            document.querySelector("#letterDiv").remove();
            addLetter();
        }
        else if (error===0)
        {
            wrong+=1;
            points-=1;
            error=1;
            wrong();
        }    
        else
        {
            wrong+=1;
            points-=1;
        }
    }
}

function addLetter() {
    var n = Math.floor(Math.random() * 26);
    var chr = String.fromCharCode(65 + n);
    var main = document.getElementById("corps");
    var div = document.createElement("div");
    div.id = "letterDiv";
    var div2 = document.createElement("div");
    div2.className = "letterBlock";
    var letter = document.createElement("p");
    letter.id = "letter";
    letter.textContent = chr;
    div2.appendChild(letter);
    div.appendChild(div2);
    main.appendChild(div);
    document.addEventListener('keydown',keyCode);
}

function wrong() {
    var main = document.getElementById("corps");
    var div = document.getElementById("letterDiv");
    var div2 = document.createElement("div");
    var message = document.createElement("h3");
    message.textContent = "Wrong letter";
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