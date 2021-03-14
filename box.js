class Box{
    constructor(x, y){
        var options ={
       isStatic: false,
       friction: 1,
       restitution: 0.2,
       density: 1
        }
        this.body = Bodies.rectangle(x,y,25,25,options);
        World.add(world, this.body);
    }
    display(){
    var angle = this.body.angle;
    push();
    rectMode(CENTER);
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    rect(0, 0, 25,25);
    pop();
    }
    }