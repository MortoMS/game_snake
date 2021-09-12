import Canvas from "./Canvas.js";
import Audio from "./Audio.js";

export default class
{   
    _canvas   = new Canvas;
    _audio    = new Audio;
    
    _mapa     = []; 
    _loopTime = 16; 
    _loop     = null;
    _objects  = {}; 

    constructor()
    {
        this.start();
    }

    start()
    {
        this._frame();
    }

    stop()
    {
        clearInterval(this._loop);
    }
    
    addObject()
    {
        
    }

    _frame()
    {
        this._loop = setInterval(() => this._render(), this._loopTime);
    }

    _render()
    {
        let num_mapa = this._mapa.length;

        for (let index = 0; index < num_mapa; index++)
        {
            this._mapa[index].render(this);
        }
    }
}