// entity.js

(function() {

    window.game = {};

}());

// player.js

(function() {

    window.game.player = {

        x:  0,
        y:  0,
        ang:0,

        setPos: function(x, y, ang) {
            if (x)      this.x = x;
            if (y)      this.y = y;
            if (ang)    this.ang = ang;
        },

        getPos: function() {
            return {
                x: this.x,
                y: this.y,
                ang: this.ang
            }
        }

    };

    window.game.player.setPos(60, 290, 0);

}());

// keybind.js

(function() {

    document.onkeydown = checkKey;

    function checkKey(e) {

        e = e || window.event;

        if (e.keyCode == '38') { // up arrow
            window.game.player.y--;
        }
        else if (e.keyCode == '40') { // down arrow
            window.game.player.y++;
        }
        else if (e.keyCode == '37') { // left arrow
            window.game.player.x--;
        }
        else if (e.keyCode == '39') { // right arrow
            window.game.player.x++;
        }

        window.game.renderer.player();

    }

}());


// renderer.js

(function() {

    window.game.renderer = {

        player: function() {

            // Move map
            $('#flip')
                .css({
                    left: -window.game.player.x,
                    top: -window.game.player.y,
                    'transform-origin': window.game.player.x + 'px ' + window.game.player.y + 'px'
                });

            // Move debug axe
            $('#axex').css('left', (window.game.player.x / 5));
            $('#axey').css('top', (window.game.player.y / 5));


        }

    }

}());

