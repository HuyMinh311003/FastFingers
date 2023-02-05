let input = document.getElementById('input');
let word = document.getElementById('keyWord');
let score = document.getElementById('score');
let restartBtn = document.getElementById('resetBtn');
let timeLeft = document.getElementById('timer');

let keyWords = ['cat', 'yellow', 'stairs', 'happy', 'enormous', 'beer', 'clothes', 'shield', 'violet', 'hat', 'mountain', 'horse', 'red',
'orange', 'super', 'fish', 'whale', 'lucky', 'item', 'bag', 'life', 'die', 'furious', 'sleep', 'excite', 'sit', 'eat', 'food', 'room',
'word', 'key', 'bike', 'car', 'traffic', 'game', 'board', 'erase', 'flash', 'light', 'dark', 'fire', 'blue', 'sea', 'water', 'boat', 'ice'];

let random = keyWords[Math.floor(Math.random() * keyWords.length)]; 
let point = 0;
let time = 30;
let countdown = setInterval(timer, 1000);

word.innerHTML = random;

//Ham giup game hoat dong
function game(){
    score.innerHTML = "Point: " + point;
    random = keyWords[Math.floor(Math.random() * keyWords.length)];
    word.innerHTML = random;
    input.value ="";
}

input.addEventListener("keyup", ({key}) => {
    if (key === "Enter") {
        if (input.value === random){
            point++;
            game();
        }
        else{
            point--;
            game();
        }
    }
});

//Restart game
restartBtn.addEventListener("click", restart);

function restart(){
    point = 0;
    time = 30;
    game();
}

//Bo dem thoi gian
function timer(){
    timeLeft.innerHTML = "Time: " + time;
    time--;
    if (time <= 0) {
        restart();
    }
}