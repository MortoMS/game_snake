import Componet from "./Componet.js";

export default class extends Componet
{
    _x = 0;
    _y = 0;

    constructor(name = null)
    {
        super((name != null) ? name : "orientation");
    }

    setX(value)
    {   
        this._x = value;
    }

    setY()
    {
        this._y = value;
    }

    getX()
    {
        return this._x;
    }

    getY()
    {
        return this._y;
    }
}