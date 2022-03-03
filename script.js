'use strict'

let secretNumber = Math.trunc(Math.random() * 20 + 1)
let score = 20
let highScore = 0

const displayMessage = message => {
  document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)

  //when there is no input
  if (!guess) {
    displayMessage('No number, input a valid number')

    //when player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number')

    document.querySelector('body').style.backgroundColor = '#60b347'

    document.querySelector('.number').style.width = '30rem'

    document.querySelector('.number').textContent = secretNumber
    if (score > highScore) {
      highScore = score
      document.querySelector('.highscore').textContent = highScore
    }

    //if guess is to high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high' : 'Too low')
      score--
      document.querySelector('.score').textContent = score
    }
  } else {
    displayMessage('You lost the game')
    initScore.textContent = 0
  }
})

document.querySelector('.again').addEventListener('click', function () {
  score = 20
  secretNumber = Math.trunc(Math.random() * 20 + 1)
  document.querySelector('body').style.backgroundColor = '#222'
  displayMessage('Start guessing...')
  document.querySelector('.score').textContent = score
  document.querySelector('.number').style.width = '15rem'
  document.querySelector('.number').textContent = '?'
  document.querySelector('.guess').value = ' '
})

// let secretNumber = Math.trunc(Math.random() * 20) + 1
// let score = 20
// let highscore = 0

// const displayMessage = message => {
//   document.querySelector('.message').textContent = message
// }

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.number').value)

//   //when there is no input
//   if (!guess) {
//     displayMessage('Input a valid number')
//   } else if (guess === secretNumber){
//       displayMessage('Correct Score')
//       document.querySelector('.number').style.width = '30rem'
//       document.querySelector('body').style.backgroundColor = '#60b347'
//       document.querySelector('.highscore').textContent = score
//       if(score > highscore){
//         highscore = score
//         document.querySelector('.highscore').textContent = highscore
//       }
//     } else if (guess !== secretNumber){
//       if(score > 1 ? displayMessage )
//     }
// })
