;(function(){
  if (typeof Asteroids.Util === "undefined"){
    window.Asteroids.Util = {};
  }
  Asteroids.Util.inherits = function(ChildClass, ParentClass) {
    Surrogate = function(){};
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
  }

  Asteroids.Util.randomVec = function(length){
    var x = (Math.random() * length) * (Math.round(Math.random()) * 2 - 1);
    var y = (Math.sqrt(length*length - x*x)) * (Math.round(Math.random()) * 2 - 1);

    return [x,y];
  };


})();
