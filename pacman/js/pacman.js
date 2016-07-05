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


function drawMaze(element, tiles) {
    var html="";
    for(var row=0; row<tiles.length; row++){
        html += '<div class="row">';
        for(var column=0; column<tiles[row].length; column++){
            var tileType = tiles[row][column];
            var img=tileTypes[tileType];
            html+="<img src=\"images/" + img + "\" alt=\"\">";
        }
        html+="</div>"
    }
    element.innerHTML = html;
}



function drawPacman(pacman, pacmanInfo) {
    pacman.style.left = (pacmanInfo.column * 27 + maze.offsetLeft) + "px";
    pacman.style.top = (pacmanInfo.row * 27 + maze.offsetTop) + "px";
}