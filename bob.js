class bob{
    constructor(x,y,r){
        var options={
        isStatic:false,
        friction:0.5,
        density:1.2,
        restitution:1
        }
        this.Circle=Bodies.circle(x,y,r,options)
        this.r=r
        this.y=y
        this.x=x
        World.add(world,this.Circle)
    }
    display(){
        push();
        translate(this.Circle.position.x,this.Circle.position.y);
        rotate(this.Circle.angle);
        ellipseMode(RADIUS);
        strokeWeight(2.2);
        stroke("pink")
        fill("red");
        ellipse(0,0,this.r,this.r)
        pop();
        
    }
    
}