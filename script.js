/*window.onload = function() {
    getData();
}*/
var error = 0;
var points = 0;
var counter = 15;
function start() {
    document.getElementById("startBtn").style.display = "none";
    timer();
    Decrement();
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

function timer() {
    var main = document.getElementById("corps");
    var div = document.createElement("div");
    var timer = document.createElement("p");
    timer.id = "timer";
    div.appendChild(timer);
    main.appendChild(div);
    addLetter();
}

function keyCode(event) {
    var x = event.keyCode;
    var word = document.getElementById("letter").textContent;
    var n = word.charCodeAt();
    if (x === n) {
        points+=1;
        document.querySelector("#corps").innerHTML = "";
        timer();
        error=0;
    }
    else if (error===0)
    {
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
    var main = document.getElementById("corps");
    var div = document.createElement("div");
    div.className = "letterBlock";
    var letter = document.createElement("h1");
    letter.id = "letter";
    letter.textContent = chr;
    div.appendChild(letter);
    main.appendChild(div);
    document.addEventListener('keydown',keyCode);
}

function wrong() {
    var main = document.getElementById("corps");
    var div = document.createElement("div");
    var message = document.createElement("h1");
    message.textContent = "Wrong letter";
    div.appendChild(message);
    main.appendChild(div);
}
 
function Decrement() { 
    if (counter < 0) {  
        counter.value = 0;
        displayScore(); 
    } 
    else { 
        document.getElementById("timer").textContent="Il reste "+"("+[counter]+"s)";
        counter--; 
        setTimeout('Decrement()', 1000); 
    }
}

/*function getData(){
fetch('get_data')
    .then(response => response.json())                                    	 
    .then(function (data) {
        console.log(data);

    data.forEach(function(item, index, array){
        ajouter(item);
});*/