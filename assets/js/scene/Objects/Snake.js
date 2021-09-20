import Box from "../../app/Objects/Box.js";
import BoxCollider from "../../app/Componets/BoxCollider.js";
import Body from "../../app/Componets/Body.js";

export default function ()
{
    let 
        scene = gameEngine.getGear("object"),
        snake = new Box("Snake", 20, 20, "blue"),
        delay = 128;

    snake.direction = "Up";
    snake.food      = 0;
    snake.time      = 0;
    snake.num       = 0;
    snake.move      = false; 

    snake.orientation().setX(380);
    snake.orientation().setY(280);

    snake.setComponent(new BoxCollider());
    snake.setComponent(new Body(null, 0, 0, 20, 20));

    snake.enterCollider = async function (object)
    {
        let name = object.getName();

        if (name.indexOf("Trail_") >= 0 && object.num > 0)
        {
            console.log("Fim de jogo")
            gameEngine.stop();
        }
        else if (name.indexOf("Food") >= 0)
        {
            this.food++;
            scene.rmObject(object.getName());
            scene.food = false;
        }
    }

    snake.exitCollider = async function (object)
    {
        if (object.getName() == "table")
        {
            console.log("Fim de jogo")
            gameEngine.stop();
        }
    }

    snake.inputSnake = async function ()
    {
        let input = gameEngine.getGear("input");

        if (input.keyDown("ArrowUp")) {
            this.move = true;
            this.direction = "Up";
        }

        if (input.keyDown("ArrowDown")) {
            this.move = true;
            this.direction = "Down";
        }

        if (input.keyDown("ArrowLeft")) {
            this.move = true;
            this.direction = "Left";
        }

        if (input.keyDown("ArrowRight")) {
            this.move = true;
            this.direction = "Right";
        }
    }
    
    snake.continuousMovement = async function ()
    {
        let orientation = this.getComponent("orientation")

        if (this.time >= delay)
        {
            if (this.food > 0)
            {
                let trail = new Box("Trail_" + this.num, 20, 20, "blue");

                scene.setObject(trail, 2);

                trail.setComponent(new Body(null, 0, 0, 20, 20));
                trail.num = this.food;
                trail.time = 0;

                trail.update = async function()
                {
                    if (this.time >= delay)
                    {
                        this.num--;

                        if (this.num == 0) 
                        {
                            this.setColor("white");
                        }
                        
                        if (this.num < 0)
                        {
                            await scene.rmObject(this.getName());
                        }

                        this.time = 0;
                    }

                    this.time += gameEngine._loopTime;
                }

                trail.orientation().setX(orientation.getX());
                trail.orientation().setY(orientation.getY());
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

    snake.update = async function ()
    {
        await snake.inputSnake();
        
        if (this.move)
        {
            await snake.continuousMovement();
        }
    }

    return snake;
}