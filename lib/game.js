;(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function(height, width){
    this.dimX = width;
    this.dimY = height;
    this.ship = new Asteroids.Ship({pos:this.randomPosition()}, this);
    this.objects = [this.ship];
    this.addAsteroids();
  };

  Game.NUM_ASTEROIDS = 7;

  Game.prototype.addAsteroids = function(){
    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      this.objects.push(new Asteroids.Asteroid({pos:this.randomPosition()}, this));
    }
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, this.dimX, this.dimY);

    this.objects.forEach(function(obj){
      obj.draw(ctx);
    })
  };

  Game.prototype.moveObjects = function () {
    this.objects.forEach(function(obj){
      obj.move();
    })
  };

  Game.prototype.randomPosition = function(){
    var xpos = Math.random() * this.dimX;
    var ypos = Math.random() * this.dimY;
    return [xpos, ypos];
  }

  Game.prototype.wrap = function (pos) {
    if (pos[0] < 0) {
      pos[0] = this.dimX;
    } else if (pos[0] > this.dimX) {
      pos[0] = 0;
    } else if (pos[1] > this.dimY) {
      pos[1] = 0;
    } else if (pos[1] < 0) {
      pos[1] = this.dimY;
    }
    return pos;
  };

  Game.prototype.outOfBounds = function (pos) {
    return ((pos[0] < 0) || (pos[1] < 0) ||
        (pos[0] > this.dimX) || (pos[1] > this.dimY));
  };

  Game.prototype.checkCollisions = function () {
    var objects = this.objects;

    for (var i = 0; i < objects.length; i++) {
      for (var j = i + 1; j < objects.length; j++) {
        if (objects[i].isCollidedWith(objects[j])){
          objects[i].collideWith(objects[j]);
        }
      }
    }
  };

  Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
  };

  Game.prototype.remove = function (obj) {
    var removalindex = this.objects.indexOf(obj);
    this.objects.splice(removalindex, 1);
  };
})();
