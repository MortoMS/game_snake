export default class
{
    el     = "#canvas";
    object = null;
    ctx    = null; 

    constructor()
    {
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