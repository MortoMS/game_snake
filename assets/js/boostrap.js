import GameEngine from "./app/GameEngine.js";
import Box from "./app/Objects/Box.js";

const gameEngine = new GameEngine;

let 
    scene = gameEngine.getGear("object"),
    snake = scene.setObject(1, new Box("Snake", 20, 20, "red")),
    delay = 160;

scene.setObject(0, new Box("table", 800, 600, "white"));

snake.direction = "Up";
snake.food = 0;
snake.time = 0;
snake.num  = 0;

snake.orientation().setX(380);
snake.orientation().setY(280);

snake.inputSnake = async function(gameEngine)
{
    let input = gameEngine.getGear("input");

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

    if (input.keyDown("1"))
    {
        this.food++;
        console.log(this.food);
    }

    if (input.keyDown("2"))
    {
        this.food--;
        console.log(this.food);
    }

    if (input.keyDown("3"))
    {
        gameEngine.stop();
    }
}

snake.continuousMovement = async function(gameEngine)
{
    let orientation = this.getComponent("orientation")

    if (this.time >= delay)
    {
        if (this.food > 0)
        {
            let trail = scene.setObject(1, new Box("Trail_" + this.num, 20, 20, "blue"));

            trail._num = this.food - 1;
            trail.time = 0;

            trail.update = async function(gameEngine)
            {
                if (this.time >= delay)
                {
                    if (this._num <= 0) 
                    {
                        await scene.rmObject(this.getName());
                    }
                    else
                    {
                        this._num--;
                    }

                    this.time = 0;
                }

                this.time += gameEngine._loopTime;
            }

            trail.orientation().setX(orientation.getX());
            trail.orientation().setY(orientation.getY());
            trail.forceRender(gameEngine);
        }

        switch (this.direction)
        {
            case "Up":
                orientation.setY(-20, true);
                break;
            case "Down":
                orientation.setY(20, true);
                break;
            case "Left":
                orientation.setX(-20, true);
                break;
            case "Right":
                orientation.setX(20, true);
                break;
        }


        this.time = 0;
        this.num++;
    }

    this.time += gameEngine._loopTime;
}

snake.update = async function(gameEngine)
{
    await snake.inputSnake(gameEngine);
    await snake.continuousMovement(gameEngine);
}
