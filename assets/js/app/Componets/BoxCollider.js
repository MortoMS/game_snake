import Componet from "./Componet.js";

export default class extends Componet
{
    _priority = false;
    _collider = {};

    constructor(name = null, priority = false)
    {
        super((name != null) ? name : "BoxCollider");
        this._priority = priority;
    }

    async _execute(object)
    {
        await this._checkCollisionObjects(object);
    }

    async _checkCollisionObjects(object)
    {
        if (object.hasComponent("Body"))
        {
            let objects = gameEngine.getGear("object").getObjects();
            
            for (let index in objects)
            {   
                if (objects[index].hasComponent("Body") && object.getName() != objects[index].getName())
                {   
                    if (!this._priority || objects[index].getPriority() == object.getPriority())
                    {
                        await this.hasCollider(object, objects[index]);
                    }
                }
            }
        }
    }

    async hasCollider(object_a, object_b)
    {
        let 
            body_a = object_a.getComponent("Body"),
            body_b = object_b.getComponent("Body");

        let 
            a = {
                left: object_a.orientation().getX() + body_a.getX(),
                rigth: 0,
                top: object_a.orientation().getY() + body_a.getY(),
                bottom: 0,

            },
            b = {
                left: object_b.orientation().getX() + body_b.getX(),
                rigth: 0,
                top: object_b.orientation().getY() + body_b.getY(),
                bottom: 0
            };

        a.rigth = a.left + body_a.getWidth();
        a.bottom = a.top + body_a.getHeight();
        b.rigth = b.left + body_b.getWidth();
        b.bottom = b.top + body_b.getHeight();

        if (
            !(
                (a.bottom <= b.top) ||
                (a.top >= b.bottom) ||
                (a.rigth <= b.left) ||
                (a.left >= b.rigth)
            )
        ) {
            if (!this._collider.hasOwnProperty(object_b.getName()))
            {
                this._collider[object_b.getName()] = object_b;
                
                if (object_a.hasOwnProperty("enterCollider"))
                {
                    await object_a.enterCollider(object_b);
                }
            }

            if (object_a.hasOwnProperty("onCollider"))
            {
                await object_a.onCollider(object_b);
            }

            return;
        }

        if (this._collider.hasOwnProperty(object_b.getName()))
        {
            if (object_a.hasOwnProperty("exitCollider"))
            {
                await object_a.exitCollider(object_b);
            }

            delete this._collider[object_b.getName()];
        }
    }
}