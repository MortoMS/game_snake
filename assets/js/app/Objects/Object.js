import Orientation from "../Componets/Orientation.js";

export default class
{
    _name      = null;
    _priority  = null;
    _index     = null;
    _componets = {};

    constructor(name = null)
    {

        this._name = (name == null) ? `Object#${Math.floor(Math.random())}` : name;
        
        this.setComponent(new Orientation);
    }

    orientation()
    {
        return this._componets['orientation'];
    }

    getName()
    {
        return this._name;
    }

    getComponent(name)
    {
        if (this._componets.hasOwnProperty(name))
        {
            return this._componets[name];
        }
    }

    setComponent(componet)
    {
        if (!this._componets.hasOwnProperty(componet.getName()))
        {
            return this._componets[componet.getName()] = componet;
        }
    }

    rmComponent(name)
    {
        if (!this._componets.hasOwnProperty(name))
        {
            delete this._componets[name];
        }
    }

    async update(gameEngine)
    {
        //
    }

    async _update(gameEngine)
    {
        //
    }

    async _execute(gameEngine)
    {
        await this.update(gameEngine);
        await this._update(gameEngine); 

        for (let index in this._componets)
        {
            await this._componets[index]._execute(gameEngine);
        }
    }
} 