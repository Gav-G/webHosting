// get elements from the DOM
var container = document.getElementById('container');
var ball = document.getElementById('ball');
var paddle1 = document.getElementById('paddle1');
var paddle2 = document.getElementById('paddle2');
var score1 = document.getElementById('score1');
var score2 = document.getElementById('score2');

// set initial position of ball and paddles
var ballX = 290;
var ballY = 190;
var paddle1Y = 170;
var paddle2Y = 170;

// set initial velocity of ball
var ballVelX = 5;
var ballVelY = 5;

// set initial score
var scorePlayer1 = 0;
var scorePlayer2 = 0;

// move paddles based on mouse position
container.addEventListener('mousemove', function(event) {
  var mouseY = event.clientY - container.offsetTop;
  if (mouseY < 0) {
    mouseY = 0;
  } else if (mouseY > 340) {
    mouseY = 340;
  }
  paddle1.style.top = mouseY + 'px';
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
  if (ballX > 570 && ballY > paddle2Y




