export default class
{
    _name   = null;

    constructor(name)
    {
        this._name = name;
    }

    async update()
    {
        //
    }

    async _execute()
    {
        await this.update();
    }
}