import Canvas from "./Gears/Canvas.js";
import Input from "./Gears/Input.js";
import Audio from "./Gears/Audio.js";
import Render from "./Gears/Render.js";
import _Object from "./Gears/Object.js";

export default class
{   
    _loopTime = 16.3;
    _loop     = null;
    _gears = {}; 

    constructor()
    {
        this.setGear("canvas", new Canvas);
        this.setGear("input", new Input);
        this.setGear("audio", new Audio);
        this.setGear("render", new Render);
        this.setGear("object", new _Object);

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
    
    getGear(name)
    {
        if (this._gears.hasOwnProperty(name))
        {
            return this._gears[name];
        }
    }

    setGear(name, object)
    {
        if (!this._gears.hasOwnProperty(name))
        {
            return this._gears[name] = object;
        }
    }

    rmGear(name)
    {
        if (this._gears.hasOwnProperty(name))
        {
            delete this._gears[name];
        }
    }

    getTimeframe()
    {
        return this._loopTime;
    }

    _frame()
    {
        this._loop = setInterval(async () => await this._execute(), this._loopTime);
    }

    async _execute()
    {
        for (let index in this._gears)
        {
            await this._gears[index]._execute(this);
        }
    }
}