import Service from "./Service.js";

export default class extends Service
{ 
    constructor(name = null)
    {
        super((name != null) ? name : "audio");
    }
}