import Componet from "./Componet.js";

export default class extends Componet
{
    _x      = 0;
    _y      = 0;
    _width  = 0;
    _height = 0;

    constructor(name = null, x = 0, y = 0, width = 0, height = 0)
    {
        super((name != null) ? name : "Body");

        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
    }

    getX()
    {
        return this._x;
    }

    getY()
    {
        return this._y;
    }

    getWidth()
    {
        return this._width;
    }

    getHeight()
    {
        return this._height;
    }

    setX(value)
    {
        this._x = value;
    }
    
    setY(value)
    {
        this._y = value;
    }

    setWidth(value)
    {
        this._width = value;
    }

    setHeight(value)
    {
        this._height = value;
    }
}