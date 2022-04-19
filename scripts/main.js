// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
var canvas = document.getElementById('mycanvas');
var dog = new Image();
dog.src = "images/marche.png";
var back = new Image();
back.src = "images/back.jpg";

var dogx = 100;
var dogy = 100;
var squareX = 300;
var squareY = 300;


window.addEventListener('load', windowLoad); // window load
canvas.addEventListener('click', canvasLeftClick); // left click event
canvas.addEventListener('contextmenu', canvasRightClick); // right click event



function canvasLeftClick(event) {
    event.preventDefault(); // prevent default context menu to appear...
    // get relative cursor position in canvas
    console.log("left click at position:", event.offsetX, event.offsetY);
    // update position of mario image used by drawCanvas()
    dogx = event.offsetX;
    dogy = event.offsetY;
    drawCanvas();
}

function windowLoad() {
    console.log("window load");
    drawCanvas();
}

function drawCanvas() {
    var ctx = canvas.getContext('2d');
    var width = canvas.width;
    var height = canvas.height;

    // clear canvas
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(back, 0, 0, 500, 200);
    ctx.drawImage(dog, dogx, dogy, 50, 50);
}


function setUserName() {
    let myName = prompt('entrer le nom de votre chien');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Votre chien se nomme ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Votre chien se nomme ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}