import Canvas from "./Gears/Canvas.js";
import Audio from "./Gears/Audio.js";
import Render from "./Gears/Render.js";
import _Object from "./Gears/Object.js";

export default class
{   
    _loopTime = 16; 
    _loop     = null;
    _gears = {}; 

    constructor()
    {
        this.setService("canvas", new Canvas);
        this.setService("audio", new Audio);
        this.setService("render", new Render);
        this.setService("object", new _Object);

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
    
    getService(name)
    {
        if (this._gears.hasOwnProperty(name))
        {
            return this._gears[name];
        }
    }

    setService(name, object)
    {
        if (!this._gears.hasOwnProperty(name))
        {
            return this._gears[name] = object;
        }
    }

    rmService(name)
    {
        if (this._gears.hasOwnProperty(name))
        {
            delete this._gears[name];
        }
    }

    async _frame()
    {
        this._loop = setInterval(async () => await this._execute(), this._loopTime);
    }

    async _execute()
    {
        for (let index in this._gears)
        {
            await this._gears[index]._execute();
        }
    }
}