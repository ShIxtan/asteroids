;(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function(obj, game){
    Asteroids.MovingObject.call(this, obj, game);
    this.color = Asteroid.COLOR;
    this.radius = Asteroid.RADIUS;
    this.vel = Asteroids.Util.randomVec(Math.random()*10);
  };

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.COLOR = "#FF0000";
  Asteroid.RADIUS = 10;
  Asteroid.IMG = document.getElementById('small-asteroid');

  Asteroid.prototype.draw = function (ctx) {
    ctx.drawImage(Asteroid.IMG, this.pos[0], this.pos[1], Asteroid.RADIUS * 2, Asteroid.RADIUS * 2)
  };
})();
