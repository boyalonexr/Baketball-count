let homeScore = document.getElementById("home-score");
let awayScore = document.getElementById("away-score")

function homeAdd1() {
   homeScore.textContent = parseInt(homeScore.textContent) + 1;
}

function homeAdd2() {
    homeScore.textContent = parseInt(homeScore.textContent) + 2;
}

function homeAdd3() {
    homeScore.textContent = parseInt(homeScore.textContent) + 3;
}

function awayAdd1() {
    awayScore.textContent = parseInt(awayScore.textContent) + 1;
}

function awayAdd2() {
    awayScore.textContent = parseInt(awayScore.textContent) + 2;
}

function awayAdd3() {
    awayScore.textContent = parseInt(awayScore.textContent) + 3;
}

function reset() {
    homeScore.textContent = 0;
    awayScore.textContent = 0;
    
}





// console.log(dome)
