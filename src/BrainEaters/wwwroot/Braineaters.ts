abstract class Tile {
    name: string
    imageSrc: string
    constructor() { }
}

class FloorTile extends Tile {
    name = "Floor"
    imageSrc = "floor.png"
}

class WallTile extends Tile {
    name = "Wall"
    imageSrc = "wall.png"
}

class TileMap {
    map: Tile[][]
    constructor(public tileWidth: number) {
        this.map = this.generateMap ()
    }
    generateMap() {
        let map = [[]]
        return map
    }

}

class Entity {
    position = {
        x: 0,
        y: 0
    }
    direction = {
        x: 0,
        y: 0
    }
    constructor(x: number, y: number) {
        this.position.x = x
        this.position.y = y
    }
}

class BrainEatersGame {
    startButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("start")
    menuButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("menu")
    resetButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("reset")
    enemies: Entity[]
    canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("game")
    context: CanvasRenderingContext2D = this.canvas.getContext("2d")
    tileMap: TileMap;
    constructor() {
        this.resetButton.addEventListener("click", this.startGame)
        this.startButton.addEventListener("click", this.startGame)
        this.menuButton.addEventListener("click", this.displayMainMenu)
    }

    displayMainMenu() {
        // canvas.[insert lots of graphics here]
        
    }
    startGame() {
        let numEnemies = Math.floor(Math.random()) * 3 + 2
        while (this.enemies.length < numEnemies) {
            this.enemies.push (new Entity (0, 0))
        }
        // getrandomfunction min,max for amount of walltiles vs pathtiles
        this.generateMap (0.7)
        
    }
    gameOver() {
        // canvas.[insert lots of graphics here]
        // display score
    }
    generateMap(groundWallRatio) {
        for (let i = 0; i < 20; i++) {
            this.tileMap.map.push([])
            for (let j = 0; j < 20; j++) {
                if (Math.random() > groundWallRatio)
                    this.tileMap.map[i].push(new FloorTile())
                else
                    this.tileMap.map[i].push(new WallTile())
                this.drawTile(i, j)
            }
        }
    }
    drawTile(x: number, y: number) {
        let tile = this.tileMap[x][y];
        //Each tile has the same width in pixels, so we can calculate
        // where to draw on the canvas based on it's position in the map
        let img = new Image();
        img.src = this.tileMap[x][y].imgSrc;
        this.context.drawImage(img, x * this.tileMap.tileWidth, y * this.tileMap.tileWidth);
    }
}