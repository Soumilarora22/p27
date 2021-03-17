class rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
     var options={
        bodyA:bodyA,
        bodyB:bodyB,
        pointB:{x:this.offsetX ,y:this.offsetY}
     }
     this.Rope=Constraint.create(options)
     this.offsetX=offsetX
     this.offsetY=offsetY
     World.add(world,this.Rope)

    }
    display(){
        var pointA=this.Rope.bodyA.position
        var pointC=this.Rope.bodyB.position

        strokeWeight(5)
        stroke("yellow")
        line(pointA.x,pointA.y,pointC.x+this.offsetX,pointC.y+this.offsetY)
    }
}