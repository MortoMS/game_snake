import Service from "./Gears.js";

export default class extends Service
{
    el      = "#canvas";
    object  = null;
    ctx     = null; 
    _x      = 0;
    _y      = 0;
    _width  = 800;
    _height = 600;

    constructor(name = null)
    {
        super((name != null) ? name : "canvas");

        this._createObjectCanvas();
        this._insertObjectCanvas();
    }

    _createObjectCanvas()
    {
        this.object        = document.createElement("canvas");
        this.object.width  = this._width;
        this.object.height = this._height;
        
        this.ctx           = this.object.getContext("2d");
    }

    _insertObjectCanvas()
    {
        let parentElement = document.querySelector(this.el);

        parentElement.append(this.object);
    }

    async update()
    {
        this.ctx.clearRect(this._x, this._y, this._width, this._height);
    }

}