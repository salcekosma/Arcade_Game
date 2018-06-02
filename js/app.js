// Enemies our player must avoid
var Enemy = function(x, y, speed) {
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
};



// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x, y, speed) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.sprite = 'images/char-boy.png'
}

Player.prototype.update = function() {};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = new Array();

var create_enemies = function() {

    var bug = 4;


    var random_speed = function() {
        return Math.floor(Math.random() * (300 - 80)) + 80;
    };

    var random_y = function() {
        var postions = [60, 143, 226];
        return positions[Math.floor(Math.random() * 3)];
    };

    for (var i = 0; i < bugs; i++) {
        var bug = new Enemy();
        bug.speed = random_speed;
        bug.y = random_y;
        bug.x = 200;
        allEnemies.push(bug);
    }
};

var player = new Player(200, 380, 0);

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
        this.y = -30;
      }
    } else if (direction == 'down') {
      this.y += 82.50;
      if (this.y >= 380) { //blocks getting outside right
        this.y = 380;
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
