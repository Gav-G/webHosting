// get elements from the DOM
var container = document.getElementById('container');
var ball = document.getElementById('ball');
var paddle1 = document.getElementById('paddle1');
var paddle2 = document.getElementById('paddle2');
var score1 = document.getElementById('score1');
var score2 = document.getElementById('score2');
var startBtn = document.getElementById('start-btn');

// set initial position of ball and paddles
var ballX = 295;
var ballY = 195;
var paddle1Y = 170;
var paddle2Y = 170;

// set initial velocity of ball
var ballVelX = 3;
var ballVelY = 3;

// set initial score
var scorePlayer1 = 0;
var scorePlayer2 = 0;

// move paddles based on keyboard input
document.addEventListener('keydown', function(event) {
  if (event.key === 'w') {
    paddle1Y -= 20;
  } else if (event.key === 's') {
    paddle1Y += 20;
  } else if (event.key === 'ArrowUp') {
    paddle2Y -= 20;
  } else if (event.key === 'ArrowDown') {
    paddle2Y += 20;
  }
  if (paddle1Y < 0) {
    paddle1Y = 0;
  } else if (paddle1Y > 340) {
    paddle1Y = 340;
  }
  if (paddle2Y < 0) {
    paddle2Y = 0;
  } else if (paddle2Y > 340) {
    paddle2Y = 340;
  }
  paddle1.style.top = paddle1Y + 'px';
  paddle2.style.top = paddle2Y + 'px';
});

// update ball position and check for collisions
function update() {
  ballX += ballVelX;
  ballY += ballVelY;
  if (ballY < 0 || ballY > 390) {
    ballVelY = -ballVelY;
  }
  if (ballX < 0) {
    ballVelX = -ballVelX;
    scorePlayer2++;
    score2.innerHTML = 'Player 2: ' + scorePlayer2;
  } else if (ballX > 590) {
    ballVelX = -ballVelX;
    scorePlayer1++;
    score1.innerHTML = 'Player 1: ' + scorePlayer1;
  }
  if (ballX < 20 && ballY > paddle1Y && ballY < paddle1Y + 60) {
    ballVelX = -ballVelX;
  }
  if (ballX > 570 && ballY > paddle2Y && ballY < paddle2Y + 60) {
    ballVelX = -ballVelX;
  }
  ball.style.left = ballX + 'px';
  ball.style.top = ballY + 'px';
}

// initialize game when Start button is clicked
startBtn.addEventListener('click', function() {
  setInterval(update, 10);
});
