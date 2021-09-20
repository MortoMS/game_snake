import Object from "./Object.js";

export default class extends Object
{
    _text   = ""; 
    _font   = null; 
    _color  = null;

    constructor(name = null, text = "", font = null, color = null)
    {
        super(name);

        this._font   = font;
        this._text   = text;
        this._color  = color;
    }

    setTexte(value)
    {
        this._text = value;
    }

    setFont(value)
    {
        this._font = value;
    }

    setColor(value)
    {
        this._color = value;
    }

    setX(value)
    {
        this.orientation().setX(value);
    }

    setY(value)
    {
        this.orientation().setY(value);
    }

    async _update()
    {
        if (!this._delete)
        {   
            let 
                ctx         = gameEngine.getGear("canvas").ctx, 
                orientation = this.getComponent("orientation");

            ctx.font = this._font;
            ctx.fillStyle = this._color;
            ctx.fillText(this._text, orientation.getX(), orientation.getY());
        }
    }
}