import Canvas from "./Services/Canvas.js";
import Audio from "./Services/Audio.js";
import Render from "./Services/Render.js";
import _Object from "./Services/Object.js";

export default class
{   
    _loopTime = 16; 
    _loop     = null;
    _services = {}; 

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
        if (this._services.hasOwnProperty(name))
        {
            return this._services[name];
        }
    }

    setService(name, object)
    {
        if (!this._services.hasOwnProperty(name))
        {
            return this._services[name] = object;
        }
    }

    rmService(name)
    {
        if (this._services.hasOwnProperty(name))
        {
            delete this._services[name];
        }
    }

    async _frame()
    {
        this._loop = setInterval(async () => await this._execute(), this._loopTime);
    }

    async _execute()
    {
        for (let index in this._services)
        {
            await this._services[index]._execute();
        }
    }
}