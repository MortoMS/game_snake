export default class
{
    _num = 0;

    constructor(name = null)
    {
        super();

        this._num = 2;
    }

    get(name)
    {
        if (this.hasOwnProperty(name))
        {
            return this[name];
        }

        return null;
    }

    async update()
    {
        console.log(this._num);
    }
}