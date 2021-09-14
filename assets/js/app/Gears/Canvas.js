import Service from "./Gears.js";

export default class extends Service
{
    el     = "#canvas";
    object = null;
    ctx    = null; 

    constructor(name = null)
    {
        super((name != null) ? name : "canvas");

        this._createObjectCanvas();
        this._insertObjectCanvas();
    }

    _createObjectCanvas()
    {
        this.object = document.createElement("canvas");
        this.ctx    = this.object.getContext("2d");
    }

    _insertObjectCanvas()
    {
        let parentElement = document.querySelector(this.el);

        parentElement.append(this.object);
    }
}