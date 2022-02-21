'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

let guess;
let score = 20;
const number = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = number;
document.querySelector('.check').addEventListener('click', function () {
  //   console.log(document.querySelector('.guess').value);
  guess = document.querySelector('.guess').value;
  if (score != 0) {
    if (guess == number) {
      document.querySelector('.message').textContent = 'Correct Number!';
      document.querySelector('.number').textContent = number;
      score--;
    } else if (guess > number) {
      document.querySelector('.message').textContent = 'Too High!';
      //   document.querySelector('.number').textContent = guess;
      score--;
    } else {
      document.querySelector('.message').textContent = 'Too Low!';
      //   document.querySelector('.number').textContent = guess;
      score--;
    }
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = 'Score Exhausted';
  }
});

// console.log(number);
// f1();
// console.log(guess);
