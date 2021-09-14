import Gears from "./Gears.js";

export default class extends Gears
{
    _keyUp    = {};
    _keyDown  = {};
    _keyPress = {};

    constructor(name = null)
    {
        super((name != null) ? name : "input");
        
        this._addViewKey()
    }

    _addViewKey()
    {
        window.addEventListener("keyup", (event) => this._addKeyUp(event));
        window.addEventListener("keydown", (event) => this._addKeyDown(event));
    }

    _addKeyUp(event)
    {
        this._keyUp["_" + event.key] = true;
        this._keyPress["_" + event.key] = false;
    }

    _addKeyDown(event)
    {
        this._keyDown["_" + event.key] = true;
        this._keyPress["_" + event.key] = true;
    }

    keyUp(key = null)
    {
        if (key != null && this._keyUp.hasOwnProperty("_" + key))
        {
            return true;
        }

        return false;
    }

    keyPress(key = null)
    {
        if (
            key != null && 
            this._keyPress.hasOwnProperty("_" + key) && 
            this._keyPress["_" + key] == true
        ) {
            return true;
        }

        return false;
    }

    keyDown(key = null)
    {
        if (key != null && this._keyDown.hasOwnProperty("_" + key))
        {
            return true;
        }

        return false;
    }

    async update()
    {
        for (let index in this._keyUp)
        {
            if (this._keyUp[index] == true)
            {
                this._keyUp[index] = false;
            }
            else 
            {
                delete this._keyUp[index];
            }
        }

        for (let index in this._keyDown)
        {
            if (this._keyDown[index] == true)
            {
                this._keyDown[index] = false;
            }
            else
            {
                delete this._keyDown[index];
            }
        }
    }
}