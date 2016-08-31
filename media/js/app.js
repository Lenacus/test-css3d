
$(document).ready(function(){

    var Game = {};

    Game.fps = 25;

    Game.ang = 0;

    Game.run = function() {
        //console.info('Game Update');
        Game.ang++;
        $('#flip').css('transform', 'rotateZ(' + Game.ang + 'deg)')
    };

    Game._intervalId = setInterval(Game.run, 1000 / Game.fps);

    console.info('Game loaded', Game);

});

