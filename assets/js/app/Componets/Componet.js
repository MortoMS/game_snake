export default class
{
    _name = null;

    constructor(name = null)
    {
        this._name = (name == null) ? `Component#${Math.floor(Math.random())}` : name;
    }

    async _execute()
    {
        //
    }

    getName()
    {
        return this._name;
    }
}