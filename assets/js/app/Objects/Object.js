import Render from "./Render.js";

export default class extends Render
{
    _name      = null;
    _priority  = null;
    _index     = null;
    _componets = {};

    constructor(name = null)
    {
        if (this._name == null && name == null)
        {
            this._name = `Object#${Math.floor(Math.random())}`;
        }
    }

    getComponent(name)
    {
        if (this._componets.hasOwnProperty(name))
        {
            return this._componets[name];
        }
    }

    setComponent(name, componet)
    {
        if (!this._componets.hasOwnProperty(name))
        {
            return this._componets[name] = componet;
        }
    }

    rmComponent()
    {
        if (!this._componets.hasOwnProperty(name))
        {
            delete this._componets[name];
        }
    }

    async update()
    {

    }

    async _execute(gameEngine)
    {
        await this.update();

        for (let index in this._componets)
        {
            await this._componets[index]._execute();
        }
    }
} 