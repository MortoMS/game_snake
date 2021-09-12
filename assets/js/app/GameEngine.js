import Canvas from "./Services/Canvas.js";
import Audio from "./Services/Audio.js";
import Render from "./Services/Render.js";

export default class
{   
    _loopTime = 16; 
    _loop     = null;
    _services = {}; 

    constructor()
    {
        this.addService("canvas", new Canvas);
        this.addService("audio", new Audio);
        this.addService("render", new Render);

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
    
    addService(name, object)
    {
        if (!this._services.hasOwnProperty(name))
        {
            this._services[name] = object;
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
            await this._services[index].execute();
        }
    }
}