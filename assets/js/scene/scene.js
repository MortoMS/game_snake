import Body from "../app/Componets/Body.js";
import Box from "../app/Objects/Box.js";
import Snake from "./Objects/Snake.js";
import Text from "../app/Objects/Text.js";

function rand(min, max)
{
    return Math.floor((Math.random() * (max - min) + min));
}

export default function ()
{
    let 
        scene = gameEngine.getGear("object"),
        snake = Snake(),
        table = new Box("table", 800, 600, "white"),
        text  = new Text("Pontos", "Food: 0", "30px arial", "black");

    scene.setObject(table, 0);
    scene.setObject(snake, 1);
    scene.setObject(text, 3);

    text.orientation().setX(30);
    text.orientation().setY(60);

    table.setComponent(new Body(null, 0, 0, 800, 600));
    scene.food = false;

    table.update = async function()
    {
        if (!scene.food)
        {
            let food = new Box("Food", 20, 20, "green");

            let 
                x = parseInt(`${rand(1, 8)}${rand(0, 4) * 2}0`),
                y = parseInt(`${rand(1, 6)}${rand(0, 4) * 2}0`);

            food.setComponent(new Body(null, 0, 0, 20, 20));
            food.orientation().setX(x);
            food.orientation().setY(y);

            scene.setObject(food, 3);
            scene.food = true;
        }    

        text.setTexte(`Food: ${snake.food}`);
    }
}
