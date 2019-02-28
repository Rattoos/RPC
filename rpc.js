//Globals
let score = 0;
let enemyscore = 0;
let round = 0;

//CPU choice
function enemyplay(){
    let pick = Math.floor(Math.random() * 3);
        switch (pick) {
            case 0:
                return"rock";
            case 1:
                return"paper";
            case 2:
                return"scissors"
        }
}
//player choice
function playerplay() {
    let playerchoice = prompt("Choose Rock, Paper, Or Scissors").toLowerCase();
    return playerchoice;
}

// Round
function playround(playerpick, enemypick) {
//win or lose?
if (enemypick === playerpick) {
    return "Gross a tie, Like kissin your sister!";
} 
else if ((enemypick === 'rock' && playerpick === 'paper') 
    || (enemypick === 'paper' && playerpick === 'scissors') 
    || (enemypick === 'scissors' && playerpick === 'rock')) {
        score++;
        return "Pure skill, Nice win!";
}
else if ((enemypick ==='rock' && playerpick === 'scissors') 
    || (enemypick ==='paper' && playerpick === 'rock') 
    || (enemypick === 'scissors' && playerpick ==='paper')) {
        enemyscore++;
        return "Choke artist, Get good loser!";
}
else {
    return "I have no idea what the fuck I'm doing if you see this I'm an idiot";
}
}    
// Game - run playround best of 5
function game() {
    while (round < 5) {
        let enemypick = enemyplay();
        let playerpick = playerplay();

        round++;
        console.log("round" + round);
        console.log("player picks: " + playerpick);
        console.log("enemy picks: " + enemypick);
        console.log(playround(playerpick, enemypick));
        console.log("Current Score = " + "Player: " + score + " | " + "Enemy: " + enemyscore);
    }

    if (round === 5) {
        console.log("-_-_Score_-_-");
        console.log("player: " + score);
        console.log("Enemy: " + enemyscore);
            if(score > enemyscore){
                return "You Won, now get a life!";
            }
            else if (score < enemyscore){
                return "You are a sorry excuse for a loser, literal trashcan bot!";
            }
            else {
                return "Might as well have stayed home and kissed your sister, DRAWGAME!";
            }
            
    }
}
 
//Start the game using this       
//console.log(game());