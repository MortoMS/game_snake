import GameEngine from "./app/GameEngine.js";
import Box from "./app/Objects/Box.js";

const gameEngine = new GameEngine;

let 
    scene = gameEngine.getGear("object"),
    snake = scene.setObject(1, new Box("Snake", 20, 20, "red"));

scene.setObject(0, new Box("table", 800, 600, "white"));

snake.inputSnake = function(gameEngine)
{
    let 
        input       = gameEngine.getGear("input"),
        orientation = this.getComponent("orientation");

    if (input.keyDown("ArrowUp"))
    {
        this.direction = "Up";
    }

    if (input.keyDown("ArrowDown"))
    {
        this.direction = "Down";
    }

    if (input.keyDown("ArrowLeft"))
    {
        this.direction = "Left";
    }

    if (input.keyDown("ArrowRight"))
    {
        this.direction = "Right";
    }
}

snake.continuousMovement = function()
{
    let 
        orientation = this.getComponent("orientation")

    if (!this.direction)
    {
        this.direction = null;
    }

    switch (this.direction)
    {
        case "Up":
            orientation.setY(-1, true);
            break;
        case "Down":
            orientation.setY(1, true);
            break;
        case "Left":
            orientation.setX(-1, true);
            break;
        case "Right":
            orientation.setX(1, true);
            break;
    }
}

snake.update = async function(gameEngine)
{
    snake.inputSnake(gameEngine);
    snake.continuousMovement();
}
