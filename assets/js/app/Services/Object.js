import Service from "./Service.js";

export default class extends Service
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
        let name = object.get("name");

        if (!this._mapa[priority])
        {
            this._mapa[priority] = [];
        }

        if (!this._object.hasOwnProperty(name))
        {
            return false;
        }

        this._object[name] = object;

        let num = this._mapa[priority].push(object) - 2;
        object._index = num; 
    }

    getObject(name)
    {
        if (this._object.hasOwnProperty(name))
        {
            return this._object[name];    
        }
    }

    async update(gameEngine)
    {
        let num_mapa = this._mapa.length;

        for (let index_1 = 0; index_1 < num_mapa; num_mapa++)
        {
            let num_object = this._mapa[index_1].length;

            for (let index_2 = 0; index_2 < num_object; num_object++)
            {
                await this._mapa[index_1][index_2]._execute(gameEngine);
            }
        }
    }
}