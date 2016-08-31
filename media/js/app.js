var Game = {};

$(function(){

    //requestAnimationFrame



    Game.fps = 25;

    Game.ang = 0;

    function animloop() {
        render();
    }

    function render() {
        Game.ang++;
        $('#flip').css('transform', 'rotateZ(' + Game.ang + 'deg)')
    }


    window.requestAnimFrame = (function(){
        return  window.requestAnimationFrame   ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function(callback){
                window.setTimeout(callback, 1000 / Game.fps);
            };
    })();

    requestAnimFrame(animloop);

    console.info('Game loaded', Game);

});

