'use strict';
let secretNumber = Math.trunc(Math.random() * 100) + 1 ;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };
// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function() {
 const guess = Number(document.querySelector('.guess').value);
console.log(guess, typeof guess);
if (!guess) {
    // document.querySelector('.message').textContent = `no number 🚫`;
    displayMessage('⛔️ No number!');
} else if (guess === secretNumber) {
    document.querySelector('.message').textContent = `😁 correct number`;
// document.querySelector('.message').style.display = 'none';
   document.querySelector('body').style.backgroundColor = '#60b347';
   document.querySelector('.ima').style.backgroundColor = '#60b347';

   document.querySelector('.sub').textContent = '🔓 UNLOCKED 🎉🎊, You did it !!! 😎 If you enjoyed, play again !'

  
   document.querySelector('.lock').textContent = ' UNLOCKED !!'
//    document.querySelector('.number').style.width = '30rem';
    // document.querySelector('.number').textContent = secretNumber;
    if(score > highscore) {
        highscore = score
        document.querySelector('.highscore').textContent = highscore;
    }
} else if (guess !== secretNumber) {
    if (score > 2) {
        document.querySelector('.message').textContent = guess > secretNumber ? `📈 Too high! ` :
        `📉 Too low! `;
        score = score - 2;
        document.querySelector('.score').textContent = score
        } else {
            // score = 0;
            document.querySelector('.message').textContent = 'You lost the game';
            document.querySelector('.score').textContent = 0;
        }
    }
});
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 100) + 1;
  
    document.querySelector('.message').textContent = 'Start guessing...';
    // displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    // document.querySelector('.number').textContent = '?';
    document.querySelector('.guess'). value = '';
    document.querySelector('.sub').textContent = 'Guess the number between 1 and 100, and unlock the phone 🔓'
    document.querySelector('.lock').textContent = '🔒LOCKED !!'
    document.querySelector('body').style.backgroundColor = 'salmon';
    // document.querySelector('.number').style.width = '15rem';
    document.querySelector('.ima').style.backgroundColor = 'salmon';
});