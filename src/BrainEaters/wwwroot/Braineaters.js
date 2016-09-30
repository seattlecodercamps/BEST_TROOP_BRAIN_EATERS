var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Tile = (function () {
    function Tile() {
    }
    return Tile;
}());
var FloorTile = (function (_super) {
    __extends(FloorTile, _super);
    function FloorTile() {
        _super.apply(this, arguments);
        this.name = "Floor";
        this.imageSrc = "floor.png";
    }
    return FloorTile;
}(Tile));
var WallTile = (function (_super) {
    __extends(WallTile, _super);
    function WallTile() {
        _super.apply(this, arguments);
        this.name = "Wall";
        this.imageSrc = "wall.png";
    }
    return WallTile;
}(Tile));
var TileMap = (function () {
    function TileMap(tileWidth) {
        this.tileWidth = tileWidth;
        this.map = this.generateMap();
    }
    TileMap.prototype.generateMap = function () {
        var map = [[]];
        return map;
    };
    return TileMap;
}());
var Entity = (function () {
    function Entity(x, y) {
        this.position = {
            x: 0,
            y: 0
        };
        this.direction = {
            x: 0,
            y: 0
        };
        this.position.x = x;
        this.position.y = y;
    }
    return Entity;
}());
var BrainEatersGame = (function () {
    function BrainEatersGame() {
        this.startButton = document.getElementById("start");
        this.menuButton = document.getElementById("menu");
        this.resetButton = document.getElementById("reset");
        this.canvas = document.getElementById("game");
        this.context = this.canvas.getContext("2d");
        this.resetButton.addEventListener("click", this.startGame);
        this.startButton.addEventListener("click", this.startGame);
        this.menuButton.addEventListener("click", this.displayMainMenu);
    }
    BrainEatersGame.prototype.displayMainMenu = function () {
        // canvas.[insert lots of graphics here]
    };
    BrainEatersGame.prototype.startGame = function () {
        var numEnemies = Math.floor(Math.random()) * 3 + 2;
        while (this.enemies.length < numEnemies) {
            this.enemies.push(new Entity(0, 0));
        }
        // getrandomfunction min,max for amount of walltiles vs pathtiles
        this.generateMap(0.7);
    };
    BrainEatersGame.prototype.gameOver = function () {
        // canvas.[insert lots of graphics here]
        // display score
    };
    BrainEatersGame.prototype.generateMap = function (groundWallRatio) {
        for (var i = 0; i < 20; i++) {
            this.tileMap.map.push([]);
            for (var j = 0; j < 20; j++) {
                if (Math.random() > groundWallRatio)
                    this.tileMap.map[i].push(new FloorTile());
                else
                    this.tileMap.map[i].push(new WallTile());
                this.drawTile(i, j);
            }
        }
    };
    BrainEatersGame.prototype.drawTile = function (x, y) {
        var tile = this.tileMap[x][y];
        //Each tile has the same width in pixels, so we can calculate
        // where to draw on the canvas based on it's position in the map
        var img = new Image();
        img.src = this.tileMap[x][y].imgSrc;
        this.context.drawImage(img, x * this.tileMap.tileWidth, y * this.tileMap.tileWidth);
    };
    return BrainEatersGame;
}());
