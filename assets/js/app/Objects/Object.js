import Orientation from "../Componets/Orientation.js";

export default class
{
    _name      = null;
    _priority  = null;
    _index     = null;
    _delete    = false;
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

    hasComponent(name)
    {
        return (this._componets.hasOwnProperty(name)) ? true : false;
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

    getPriority()
    {
        return this._priority;
    }

    async update()
    {
        //
    }

    async _update()
    {
        //
    }

    async _execute()
    {
        await this.update();
        await this._update(); 

        for (let index in this._componets)
        {
            await this._componets[index]._execute(this);
        }
    }

    delete()
    {
        this._delete    = true;
        this.update     = async function(){}
        this._update    = async function(){}
        this.__execute  = async function(){}
        this._componets = {};
    }
} 