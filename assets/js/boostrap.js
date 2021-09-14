import GameEngine from "./app/GameEngine.js";
import Box from "./app/Objects/Box.js";

const gameEngine = new GameEngine;

let plate = gameEngine.getGear("object");

plate.setObject(0, new Box("plate", 800, 600, "white"));

let box = plate.setObject(1, new Box("Box", 20, 20, "red"));

box.update = async function()
{
    let width = box.getWidth();

    if (width > 800)
    {
        width = 0;
    }

    box.setWidth(++width);
}

