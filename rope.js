class Rope{
    constructor(bodyA, pointB){
       var options= {
         stiffness: 0.4,
         length: 100,
         bodyA: bodyA,
         pointB: pointB
       }
     this.rope = Constraint.create(options);
     World.add(world, this.rope);
    }
    display(){
        strokeWeight(3);
        stroke("black");
        line(this.rope.bodyA.position.x, this.rope.bodyA.position.y, this.rope.pointB.x, this.rope.pointB.y);
    }
}