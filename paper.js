class paper{
    constructor(x,y,width,height){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,width,options) 
        this.width = width;
        this.height = height;
        this.radius = 10
        World.add(world,this.body)
    }


    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        angleMode(RADIANS)
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill("#F802FC")
        strokeWeight(5)
        stroke("#F802FC")
        rect(0,0,this.width,this.height)
        pop()
    }
}