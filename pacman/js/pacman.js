var tileTypes = {
    " ": "pnt.gif",
    "p": "pill.gif",
    "x": "tile0.gif",
    "l": "tile1.gif",
    "m": "tile2.gif",
    "h": "tile3.gif",
    "o": "tile4.gif",
    "b": "tile5.gif",
    "d": "tile6.gif",
    "f": "tile7.gif",
    "n": "tile8.gif",
    "a": "tile9.gif",
    "c": "tile10.gif",
    "i": "tile11.gif",
    "v": "tile12.gif",
    "e": "tile13.gif",
    "g": "tile14.gif",
    //"g": "tile15.gif",
    "k": "tile16.gif",
    "q": "tile17.gif",
    "t": "tile18.gif",
    "r": "tile19.gif"
};
//
//var pacman = {
//    element: undefined,
//    maze: undefined,
//    row: 8,
//    column: 9,
//    direction: "top",
//    speed: 10,
//    lives: 3,
//
//    init: function(e, m) {
//        pacman.element = e;
//        pacman.maze = m;
//    },
//
//    draw: function() {
//        pacman.element.style.left = (pacman.element.column * 27 + maze.offsetLeft) + "px";
//        pacman.element.style.top = (pacman.element.row * 27 + maze.offsetTop) + "px";
//    }
//};


function drawMaze(element, tiles) {
    var html = "";
    for (var row = 0; row < tiles.length; row++) {
        html += '<div class="row">';
        for (var column = 0; column < tiles[row].length; column++) {
            var tileType = tiles[row][column];
            var img = tileTypes[tileType];
            html += "<img src=\"images/" + img + "\" alt=\"\">";
        }
        html += "</div>"
    }
    element.innerHTML = html;
}

function drawPacman(pacman, pacmanInfo) {
    pacman.style.left = (pacmanInfo.left + maze.offsetLeft) + "px";
    pacman.style.top = (pacmanInfo.top + maze.offsetTop) + "px";
}


document.onkeydown = checkKey;
function checkKey(e) {
//setInterval(function() {
    e = e || window.event;

    if (e.keyCode == '38') {
        pacmanInfo.direction = "up";
    }
    else if (e.keyCode == '40') {
        pacmanInfo.direction = "down";
    }
    else if (e.keyCode == '37') {
        pacmanInfo.direction = "left";
    }
    else if (e.keyCode == '39') {
        pacmanInfo.direction = "right";
    }
    else if (e.keyCode == 68) {
        if (pacmanInfo.speed > 0) {
            pacmanInfo.speed--;
        }
    }
    else if (e.keyCode == 65) {
        pacmanInfo.speed++;
    }
//}, pacmanInfo.speed*27)
}

var quality = 50;
var t = setTimeout(drawPacman2, quality);

function drawPacman2() {
    if (t != null) {
        clearTimeout(t);
    }
    switch (pacmanInfo.direction) {
        case "up":
            pacmanInfo.top -= pacmanInfo.speed;
            break;
        case "down":
            pacmanInfo.top += pacmanInfo.speed;
            break;
        case "left":
            pacmanInfo.left -= pacmanInfo.speed;
            break;
        case "right":
            pacmanInfo.left += pacmanInfo.speed;
            break;
    }
    drawPacman(pacman, pacmanInfo);
    t = setTimeout(drawPacman2, quality)
}