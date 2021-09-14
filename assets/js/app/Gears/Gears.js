export default class
{
    _name   = null;

    constructor(name)
    {
        this._name = name;
    }

    async update(gameEngine)
    {

    }

    async _execute(gameEngine)
    {
        await this.update(gameEngine);
    }
}