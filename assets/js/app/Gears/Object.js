import Gears from "./Gears.js";

export default class extends Gears
{
    _name   = null;
    _mapa   = [];
    _object = {}; 

    constructor(name = null)
    {
        super((name != null) ? name : "Object");
    }

    setObject(priority, object)
    {
        let name = object.getName();

        if (!this._mapa[priority])
        {
            if (priority > 0)
            {
                for (let num = 0; num < priority; num++)
                {
                    if (!this._mapa[num])
                    {
                        this._mapa[num] = [];
                    }
                }
            }

            this._mapa[priority] = [];
        }

        if (this._object.hasOwnProperty(name))
        {
            return false;
        }

        this._object[name] = object;

        let num = this._mapa[priority].push(object) - 2;
        object._index = num; 

        return object;
    }

    getObject(name)
    {
        if (this._object.hasOwnProperty(name))
        {
            return this._object[name];    
        }

        return null;
    }

    async update(gameEngine)
    {
        let num_mapa = this._mapa.length;

        for (let index_1 = 0; index_1 < num_mapa; index_1++)
        {
            let num_object = this._mapa[index_1].length;

            for (let index_2 = 0; index_2 < num_object; index_2++)
            {   
                await this._mapa[index_1][index_2]._execute(gameEngine);
            }
        }
    }
}