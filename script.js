// DOM ELements 
const  score = document.getElementById('Score_value');
const mole_box = document.getElementById('mole_box');
const moles = document.querySelectorAll('.mole');
const restart = document.getElementById('restart');
const win_restart = document.getElementById('win_restart');

const max =3;
const min =1;
// console.log(randomMole);
function activateMole(){
    moles.forEach(mole => {
        mole.classList.remove('active');
    });
    let randomMole = Math.floor(Math.random() * (max - min + 1)) + min;
    const mole = document.querySelector(`#mole${randomMole}`);
        if (mole) mole.classList.add('active');
}

setInterval(activateMole, 500);
let valuescore = 0
moles.forEach(mole => {
    mole.addEventListener('click', () => {
        if (mole.classList.contains('active')) { 
            valuescore++;
            score.textContent = valuescore;
            
        } 
    });
});

// when score is == 5 , then Stop the game and display "You Win" in HTML section .win . and reset game to score zero usinng the resart button 

function onGameWin(){
    if(valuescore === 5){
        clearInterval(activateMole);
        document.getElementById('win').style.display = 'block';
    }
}
function restartGame(){
    valuescore = 0;
    score.textContent = valuescore;
    document.getElementById('win').style.display = 'none';
    activateMole();
}
restart.addEventListener('click', restartGame);
setInterval(onGameWin, 100);

win_restart.addEventListener('click', restartGame);