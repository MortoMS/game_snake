import Service from "./Gears.js";

export default class extends Service
{
    constructor(name = null)
    {
        super((name != null) ? name : "render");
    }
}