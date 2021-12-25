let moveNum;
let pcMove;
let humanMove;
let humanPoints;
let pcPoints;

function randomNum(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

function getNum() {
    return moveNum = randomNum(1,4);
}

function computerPlay(moveNum) {
    switch(moveNum) {
        case 1 :
            return pcMove = "rock";
            break;
        case 2 : 
            return pcMove = "paper";
            break;
        case 3 : 
            return pcMove = "scissors";
            break;
    }
    return pcMove;
}
/*
function humanPlay () {
    humanMove = window.prompt("What are you playing?");
    switch (humanMove) {
        case 1 : 
            return humanMove = "rock";
            break;
        case 2 :
            return humanMove = "paper";
            break;
        case 3 : 
            return humanMove = "Scissors";
            break;
        }
    return humanMove;
} */

function playRound(humanMove,pcMove) {
    pcMove = computerPlay(getNum(1,4));
    humanMove = window.prompt("What are you playing?");
    humanMove = humanMove.toLowerCase();

    if (humanMove == "rock" && pcMove == "rock" || 
        humanMove == "paper" && pcMove == "paper" ||
        humanMove == "scissors" && pcMove == "scissors")
    {
       return "You both chose " + humanMove;
    }
    else if (humanMove == "rock" && pcMove == "paper")
    {
        pcPoints++;
        return "You Lose! Paper beats Rock";

    }
    else if (humanMove == "rock" && pcMove == "scissors")
    {
        humanPoints++;
        return "You win! Rock beats Scissors";

    }
    else if(humanMove == "paper" && pcMove == "rock")
    {
        humanPoints++;
        return "You win! Paper beats Rock";

    }
    else if(humanMove == "paper" && pcMove == "scissors")
    {
        pcPoints++;
        return "You Lose! Scissors beats Paper";

    }
    else if(humanMove == "scissors" && pcMove == "rock")
    {
        pcPoints++;
        return "You Lost! Rock beats Paper";

    }
    else if(humanMove == "scissors" && pcMove == "paper")
    {
        humanPoints++;
        return "You Win! Scissors beats Paper";

    }
}

humanPoints = 0;
pcPoints = 0;

for (let i = 0; i < 5; i++)
{
    console.log(playRound (humanMove, pcMove));
    console.log(humanPoints);
    console.log(pcPoints);
}
