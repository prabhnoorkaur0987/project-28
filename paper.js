class Paper
{
    constructor(x,y,radius)
    {
        var options=
        {
isStatic: false,
restitution: 0.3,
friction: 0.5,
density:1.2
        }
this.body=Bodies.circle(x,y,radius,options)
this.radius=radius



World.add(world,this.body)
this.image=loadImage("paper2.png")

        }
        display(){
        
            var pos=this.body.position
            var angle=this.body.angle
            push()
        translate (pos.x,pos.y)
rotate (angle)
imageMode(RADIUS)
fill ("red")
image(this.image,0,0,this.radius,this.radius);
pop ()
        }
    }

