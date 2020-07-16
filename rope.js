class Rope{
    constructor(body1,pointB){
        var options={
            bodyA:body1,
            pointB:pointB,
           stiffness:0.04,
           length:250
        }
        this.pointB=pointB
        this.rope=Constraint.create(options)
        World.add(world,this.rope)
    }
    display(){
        var pointA=this.rope.bodyA.position;
        var pointB=this.pointB;
        push();
        //fill("blue")
        strokeWeight(4);
        stroke("blue")
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    pop();
    }
}