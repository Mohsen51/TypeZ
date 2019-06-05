/*window.onload = function() {
    getData();
}*/

function start() {
    document.getElementById("startBtn").style.display = "none";
    addLetter();
}

document.addEventListener('keydown',keyCode);

function keyCode(event) {
    var x = event.keyCode;
    var word = document.getElementById("letter").value;
    console.log("word");
    var n = word.charCodeAt();
    if (x === n) {
        console.log("ok");
    }
    else
        console.log("non");
}

function addLetter() {
    var div = document.createElement("div");
    div.className = "letterBlock";
    var letter = document.createElement("h1");
    letter.id = "letter";
    letter.textContent = "A";
    div.appendChild(letter);
}

/*function getData(){
fetch('get_data')
    .then(response => response.json())                                    	 
    .then(function (data) {
        console.log(data);

    data.forEach(function(item, index, array){
        ajouter(item);
});*/

/*function checkWord() {
    var word = document.querySelector("#word").value;
    if (word==="ok")
        console.log("yes");
    else
        console.log("non");
}*/