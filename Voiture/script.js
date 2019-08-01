


var maVoiture = document.getElementById("Voiture");
var ctx = maVoiture.getContext("2d");


var VoitureHeight = 10;   //Voiture
var VoitureWidth = 75;
var VoitureX = (maVoiture.width-VoitureWidth)/2; //Point de départ de la voiture
var rightPressed = false;
var leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


//
function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}
function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}





//Fonction pour afficher la voiture

function Voiture() {
    ctx.beginPath();
    ctx.rect(VoitureX, maVoiture.height-VoitureHeight, VoitureWidth, VoitureHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, maVoiture.width, maVoiture.height);
    Voiture();
    
    
    if(rightPressed && VoitureX < maVoiture.width-VoitureWidth) {
        VoitureX += 7;
    }
    else if(leftPressed && VoitureX > 0) {
        VoitureX -= 7;
    }

}

setInterval(draw, 50);