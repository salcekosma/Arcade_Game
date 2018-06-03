// Enemies our player must avoid
const Enemy = function(x, y, speed) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started
  this.x = x;
  this.y = y;
  this.speed = speed;
  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x = this.x + this.speed * dt;
  if (this.x >= 505) {
      this.x = 0;
  }
  this.checkCollision();
};

//Create function collision
Enemy.prototype.checkCollision = function() {
  for (var i = 0; i < allEnemies.length; i++) {
    if (player.x < allEnemies[i].x + 60 &&
      player.x + 60 > allEnemies[i].x &&
      player.y < allEnemies[i].y + 60 &&
      player.y + 60 > allEnemies[i].y) {
      gameOver();
      alert("Auuuch!. You have to restart.");
    }
  }
};

//Create function reset that goes inside function collision
function gameOver() {
  player.x = 202;
  player.y = 383;
  this.score = 0;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

const Player = function(x, y, speed) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.sprite = 'images/char-boy.png';
}

Player.prototype.update = function() {};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player


var allEnemies = [];
var enemy1 = new Enemy(0, 60, 100);
var enemy2 = new Enemy(0, 140, 200);
var enemy3 = new Enemy(0, 220, 150);
allEnemies.push(enemy1, enemy2, enemy3);

var player = new Player(202, 383, 0);

// This listens for key presses and sends the keys to your



Player.prototype.handleInput = function(direction) {
    if (direction == 'left') {
      this.x -= 100;
      if (this.x <= 0) { // blocks getting outside left
        this.x = 0;
      }
    } else if (direction == 'right') {
      this.x += 100;
      if (this.x >= 400) { //blocks getting outside right
        this.x = 400;
      }
    } else if (direction == 'up') {
      this.y -= 82.50;
      if (this.y <= 0) {
        this.y = 383;
        alert('You have won! Coming back to base.');
      }
    } else if (direction == 'down') {
      this.y += 82.50;
      if (this.y >= 380) { //blocks getting outside right
        this.y = 380; // WIN!!!!

      }
    }
}
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
