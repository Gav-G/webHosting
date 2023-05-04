// get elements from the DOM
var container = document.getElementById('container');
var ball = document.getElementById('ball');
var paddle1 = document.getElementById('paddle1');
var paddle2 = document.getElementById('paddle2');
var score1 = document.getElementById('score1');
var score2 = document.getElementById('score2');
var startBtn = document.getElementById('start-btn');
var stopBtn = document.getElementById('stop-btn');

// set initial position of ball and paddles
var ballX = 295;
var ballY = 195;
var paddle1Y = 170;
var paddle2Y = 170;
var paddle1X = 10;
var paddle2X = 10;

// set initial velocity of ball
var ballVelX = 2;
var ballVelY = 2;

// set initial score
var scorePlayer1 = 0;
var scorePlayer2 = 0;

// track keyboard input for each paddle
var paddle1UpPressed = false;
var paddle1DownPressed = false;
var paddle2UpPressed = false;
var paddle2DownPressed = false;
var p1dPress = false;
var p1aPress = false;
var p2LPress = false;
var p2RPress = false;

// move paddles based on keyboard input
document.addEventListener('keydown', function(event) {
  if (event.key === 'w') {
    paddle1UpPressed = true;
  } else if (event.key === 's') {
    paddle1DownPressed = true;
  } else if (event.key === 'ArrowUp') {
    paddle2UpPressed = true;
  } else if (event.key === 'ArrowDown') {
    paddle2DownPressed = true;
  } else if(event.key === 'd') {
    p1dPress = true;
  } else if(event.key === 'a') {
    p1aPress = true;
  } else if(event.key === 'ArrowRight') {
    p2RPress = true;
  } else if(event.key === 'ArrowLeft') {
    p2LPress = true;
  }
});

document.addEventListener('keyup', function(event) {
  if (event.key === 'w') {
    paddle1UpPressed = false;
  } else if (event.key === 's') {
    paddle1DownPressed = false;
  } else if (event.key === 'ArrowUp') {
    paddle2UpPressed = false;
  } else if (event.key === 'ArrowDown') {
    paddle2DownPressed = false;
  } else if(event.key === 'd') {
    p1dPress = false;
  } else if(event.key === 'a') {
    p1aPress = false;
  } else if(event.key === 'ArrowRight') {
    p2RPress = false;
  } else if(event.key === 'ArrowLeft') {
    p2LPress = false;
  }
});

// update ball position and check for collisions
function update() {
  // move paddles based on keyboard input
  if (paddle1UpPressed && paddle1Y > 0) {
    paddle1Y -= 5;
  }
  if (paddle1DownPressed && paddle1Y < 340) {
    paddle1Y += 5;
  }
  if (paddle2UpPressed && paddle2Y > 0) {
    paddle2Y -= 5;
  }
  if (paddle2DownPressed && paddle2Y < 340) {
    paddle2Y += 5;
  }
  if(p1dPress){
    paddle1X += (30-paddle1X)*.1;
  }else{
    paddle1X += (10-paddle1X)*.1;
  }
  if(p2LPress){
    paddle2X += (30-paddle2X)*.1;
  }else{
    paddle2X += (10-paddle2X)*.1;
  }

  paddle1.style.top = paddle1Y + 'px';
  paddle2.style.top = paddle2Y + 'px';
  paddle1.style.left = paddle1X + 'px';
  paddle2.style.right = paddle2X + 'px';

  // update ball position and check for collisions
  ballX += ballVelX;
  ballY += ballVelY;
  if (ballY < 0 || ballY > 390) {
    ballVelY = -ballVelY;
  }
  if (ballX < 0) {
    ballVelX = -ballVelX;
    scorePlayer2++;
    if(scorePlayer2 >= 10){
      resetGame();
    }
    ballVelX = 2;
    ballVelY = 2*ballVelY/Math.abs(ballVelY);
    score2.innerHTML = 'Player 2: ' + scorePlayer2;
  } else if (ballX > 590) {
    ballVelX = -ballVelX;
    scorePlayer1++;
    if(scorePlayer1 >= 10){
      resetGame();
    }
    ballVelX = -2;
    ballVelY = 2*ballVelY/Math.abs(ballVelY);
    score1.innerHTML = 'Player 1: ' + scorePlayer1;
  }
  if (ballX < paddle1X+10 && ballY > paddle1Y && ballY < paddle1Y + 60) {
    ballX = paddle1X+10;
    if(ballVelX < 0){
      ballVelX = -ballVelX;
    }
    if(p1dPress){
      ballVelX = ballVelX*(1.1+(30-paddle1X)*.025);
      ballVelY = ballVelY*1.1;
    }else{
      ballVelX = ballVelX*1.1;
      ballVelY = ballVelY*1.1;
    }
  }
  if (ballX > 580-paddle2X && ballY > paddle2Y && ballY < paddle2Y + 60) {
    ballX = 580-paddle2X;
    if(ballVelX > 0){
      ballVelX = -ballVelX;
    }
    if(p2LPress){
      ballVelX = ballVelX*(1.1+(30-paddle2X)*.025);
      ballVelY = ballVelY*1.1;
    }else{
      ballVelX = ballVelX*1.1;
      ballVelY = ballVelY*1.1;
    }

  }
  ball.style.left = ballX + 'px';
  ball.style.top = ballY + 'px';
  
  
}

// initialize game when Start button is clicked
startBtn.addEventListener('click', function() {
  gameInterval = setInterval(update, 10);
});

stopBtn.addEventListener('click', function() {
  resetGame();
});

function resetGame(){
  clearInterval(gameInterval);
  ballX = 295;
  ballY = 195;
  paddle1Y = 170;
  paddle2Y = 170;
  ballVelX = 2;
  ballVelY = 2;
  scorePlayer1 = 0;
  scorePlayer2 = 0;
}