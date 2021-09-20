import Object from "../Objects/Object.js";

export default class extends Object
{
    _width  = 0;
    _height = 0;
    _color  = null; 

    constructor(name = null, width = 0, height = 0, color = null)
    {
        super(name);

        this._width  = width;
        this._height = height;
        this._color  = color;
    }

    getWidth()
    {
        return this._width;
    }

    setWidth(value)
    {
        this._width = value;
    }

    getHeighth()
    {
        return this._height;
    }

    setHeight(value)
    {
        this._height = value;
    }

    getColor()
    {
        return this._color;
    }

    setColor(value)
    {
        this._color = value;
    }

    async _update()
    {
        if (!this._delete)
        {   
            let 
                ctx         = gameEngine.getGear("canvas").ctx, 
                orientation = this.getComponent("orientation");

            ctx.fillStyle = this._color;
            ctx.fillRect(orientation.getX(), orientation.getY(), this._width, this._height);
        }
    }

    async forceRender()
    {
        await this._update();
    }
}