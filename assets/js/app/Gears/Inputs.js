import Gears from "./Gears.js";

export default class extends Gears
{
    _keyUp    = {};
    _keyDown  = {};
    _keyPress = {};

    constructor(name = null)
    {
        super((name != null) ? name : "gears");
        
        this._addViewKey()
    }

    _addViewKey()
    {
        window.addEventListener("keyup", this._addKeyUp);
        window.addEventListener("keypress", this._addKeyPress);
        window.addEventListener("keydown", this._addKeyDown);
    }

    _addKeyUp(event)
    {

    }

    _addKeyPress(event)
    {
        console.log(event);
    }

    _addKeyDown(event)
    {

    }

}