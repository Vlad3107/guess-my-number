'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage  =(text, className = '.message') =>
    (document.querySelector(className).textContent = text);

document.querySelector('.check').addEventListener('click', function () {
    const guess = +document.querySelector('.guess').value;
    if (guess !== 0 && !guess) {
        displayMessage('write a number from 1 to 20');
    } else if (secretNumber === guess) {
        displayMessage('Correct Number');
        displayMessage(secretNumber, '.number');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
            highScore = score;
            displayMessage(highScore, '.highscore');
        } else {
            highScore = highScore;
            displayMessage(highScore, '.highscore');
        }
        this.style.display = "none";
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high!' : "Too low!");
            score--;
            displayMessage(score, ".score");
        } else {
            displayMessage('You lost the game!');
            displayMessage(0, ".score");
            document.querySelector('body').style.backgroundColor = 'red';
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.check').style.display = "inline-block";
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    score = 20;
    displayMessage(score, ".score");
    displayMessage('?', '.number');
    displayMessage("Start guessing...");
})

