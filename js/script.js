'use strict';

let secretNumber = Math.trunc(Math.random() * 20) +1;
let score = 20;
let highScore = 0;

const Elements = {
    body: document.querySelector(`body`),
    guess: document.querySelector(`.guess`),
    score: document.querySelector(`.score`),
    number: document.querySelector(`.number`),
    message: document.querySelector(`.message`),
    highScore: document.querySelector(`.highscore`),
    checkButton: document.querySelector(`.check`),
    againButton: document.querySelector(`.again`),
}

Elements.checkButton.addEventListener('click', () => {
    const guess = Number(Elements.guess.value);

    if (!guess) {
        Elements.message.textContent = `⛔ No number!`;
    } else if (guess === secretNumber) {
        Elements.message.textContent = `🎉 Corect Number!`;
        Elements.body.style.background = `#60b347`;
        Elements.number.textContent = secretNumber; 
        Elements.number.style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            Elements.highScore.textContent = highScore;
        }

    } else {
        if (score > 1) {
            Elements.message.textContent = guess > secretNumber? `📈 To High!`: `📉 To Low!`;
            score--;
            Elements.score.textContent = score;
        }
        else {
            Elements.message.textContent = `💥 You lost the game`;
        }
    }
});

Elements.againButton.addEventListener('click', () => {
    secretNumber = Math.trunc(Math.random() * 20) +1;
    score = 20;
    
    Elements.message.textContent = `Start guessing...`;
    Elements.score.textContent = score;
    Elements.number.textContent = `?`;
    Elements.guess.value= ``;
    Elements.body.style.background = `#222`;
    Elements.number.style.width = `15rem`;
})