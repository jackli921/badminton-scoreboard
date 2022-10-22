
let scoreLeft = document.getElementById("score-left")
let scoreRight = document.getElementById("score-right")

let countLeft = 0
let countRight = 0 

let challengeCountLeft = 2
let challengeCountRight = 2

let challengeRemainLeft = document.getElementById("challenge-remain-left")
let challengeRemainRight = document.getElementById("challenge-remain-right")

function addScoreLeft() {
    scoreLeft.textContent = countLeft + 1
    countLeft +=1
    var element = document.getElementById("player-box-left");
        element.style.backgroundColor = "#00FF00";
    var element = document.getElementById("player-box-right");
        element.style.backgroundColor = "#FFFFFF";      
    document.getElementById("shuttle-left").style.display = "inline";
    document.getElementById("shuttle-right").style.display = "none";
} 

function addScoreRight() {
    scoreRight.textContent = countRight + 1
    countRight +=1
    var element = document.getElementById("player-box-right");
        element.style.backgroundColor = "#00FF00";
    var element = document.getElementById("player-box-left");
        element.style.backgroundColor = "#FFFFFF";     
       document.getElementById("shuttle-right").style.display = "inline";
        document.getElementById("shuttle-left").style.display = "none";
}

function challengeLeft() {
    challengeRemainLeft.textContent = challengeCountLeft - 1 
    challengeCountLeft -= 1
}
function challengeRight() {
    challengeRemainRight.textContent = challengeCountRight - 1 
    challengeCountRight -= 1
}