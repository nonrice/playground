var tileTypes = {
    "_": "tile0.gif",
    ".": "pnt.gif",
    "*": "pill.gif",
    "1": "tile1.gif",
    "2": "tile2.gif"
};

function drawMaze(element, tiles) {
    var html="";
    for(var row=0; row<tiles.length; row++){
        for(var column=0; column<tiles[row].length; column++){
            var tileType = tiles[row][column];
            var img=tileTypes[tileType];
            html+="<img src=\"images/" + img + "\" alt=\"\">";
        }
        html+="<br>"
    }
    element.innerHTML = html;
}