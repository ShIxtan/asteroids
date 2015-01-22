;(function(){
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var Bullet = Asteroids.Bullet = function(obj, game){
    Asteroids.MovingObject.call(this, obj, game);
    this.color = "#00FF00";
    this.radius = 2;
  }

  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);

  Bullet.prototype.move = function () {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    if (game.outOfBounds(this.pos)) {
      game.remove(this);
    }
  };
})();
