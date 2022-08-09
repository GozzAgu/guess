'use strict';

let secretNumber = Math.trunc(Math.random() * 20)+ 1;
let score = 20;
let highscore = 0;

const displayMsg = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMsg('no number');
    } else if (guess === secretNumber) {
        displayMsg('correct');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess != secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? 'too high' : 'too low';
            displayMsg(guess > secretNumber ? 'too high' : 'too low')
            score = score - 1;
            document.querySelector('.score').textContent = score;
    } else {
        displayMsg('you lost');
        document.querySelector('.score').textContent = 0;
        }
    }
    
    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'too high';
    //         score = score - 1;
    //         document.querySelector('.score').textContent = score;
    //     } 
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'too low';
    //         score = score - 1;
    //         document.querySelector('.score').textContent = score;
    //     }            
    // }
    });

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20)+ 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});