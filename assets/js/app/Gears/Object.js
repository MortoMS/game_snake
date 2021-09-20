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

    setObject(object, priority = 0)
    {
        let name = object.getName();

        if (typeof this._mapa[priority] != "object")
        {
            if (priority > 0)
            {
                for (let num = 0; num < priority; num++)
                {
                    if (typeof this._mapa[num] != "object")
                    {
                        this._mapa[num] = [];
                    }
                }
            }

            this._mapa[priority] = [];
        }

        if (this._object.hasOwnProperty(name) && this._object._delete == false)
        {
            return false;
        }
        else if (this._object.hasOwnProperty(name) && this._object._delete == true)
        {
            delete this._object[name];
        }

        this._object[name] = object;

        let num          = this._mapa[priority].push(object) - 1;
        object._index    = num; 
        object._priority = priority;

        return object;
    }

    getObjects()
    {
        return this._object;
    }

    getObject(name)
    {
        if (this._object.hasOwnProperty(name))
        {
            return this._object[name];    
        }

        return null;
    }

    rmObject(name)
    {
        if (this._object.hasOwnProperty(name))
        {   
            this._object[name].delete();
        }
    }

    async update()
    {
        let num_mapa = this._mapa.length;

        for (let index_1 = 0; index_1 < num_mapa; index_1++)
        {
            let num_object = this._mapa[index_1].length;

            for (let index_2 = 0; index_2 < num_object; index_2++)
            {   
                let object = this._mapa[index_1][index_2];

                if (typeof object == "object")
                {
                    if (object._delete == false)
                    {
                        await object._execute();
                    }
                    else
                    {
                        delete this._object[object.name];
                        this._mapa[index_1].splice(index_2, 1);
                        num_object--;
                    }
                }
            }
        }
    }
}