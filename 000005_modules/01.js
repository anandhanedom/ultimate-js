//Module pattern using IIFE - revealing module pattern
var fightModule = (function () {
  var harry = 'potter';
  var voldemort = 'He who must not be named';

  function fight(c1, c2) {
    var attack1 = Math.floor(Math.random() * c1.length);
    var attack2 = Math.floor(Math.random() * c2.length);

    return attack1 > attack2 ? `${c1} wins` : `${c2} wins`;
  }

  return {
    fight: fight,
  };

  //everthing else is private
})();
