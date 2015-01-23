;(function(){
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function(game, ctx){
    this.game = game;
    this.ctx = ctx;
  };

  GameView.prototype.start = function () {
    that = this
    // this.bindKeyHandlers();
    setInterval(function(){
      that.game.step();
      that.handleKeys()
      that.game.draw(that.ctx);
    }, 20);
  };

  GameView.prototype.handleKeys = function () {
    if (key.isPressed('up')){
      this.game.ship.power([0,-1]);
    }
    if (key.isPressed('down')) {
      this.game.ship.power([0,1]);
    }
    if (key.isPressed('left')) {
      this.game.ship.power([-1,0]);
    }
    if (key.isPressed('right')){
      this.game.ship.power([1,0]);
    }
    if (key.isPressed('space')) {
      this.game.ship.fireBullet();
    }
  };

})();
