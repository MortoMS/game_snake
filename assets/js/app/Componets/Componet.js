export default class
{
    _name = null;

    constructor(name = null)
    {
        if (this._name == null && name == null)
        {
            this._name = `Component#${Math.floor(Math.random())}`;
        }
    }

    async _execute()
    {
        console.log(1);
    }
}