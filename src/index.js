import Spaceship from "/src/spaceship.js";
import inputHandler from "/src/input.js";
import enemyShip from "/src/enemy_spaceship.js"

let canvas = document.getElementById("gameScreen")

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

let ctx = canvas.getContext('2d')

const GAME_WIDTH = 1500;
const GAME_HEIGHT = 800;

let spaceship = new Spaceship(GAME_WIDTH, GAME_HEIGHT)
let enemy_Ship = new enemyShip(GAME_WIDTH, GAME_HEIGHT);



ctx.clearRect(0, 0, 1500, 800)


new inputHandler(spaceship);

spaceship.draw(ctx);

let lastTime = 0;




function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime

    lastTime = timestamp;

    ctx.clearRect(0, 0, GAME_HEIGHT + 1000, GAME_HEIGHT + 1000)
    spaceship.update(deltaTime)
    spaceship.draw(ctx)

    enemy_Ship.update(deltaTime)
    enemy_Ship.draw(ctx)

    requestAnimationFrame(gameLoop)
}

    requestAnimationFrame(gameLoop)