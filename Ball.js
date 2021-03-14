class Ball{
    constructor(x, y){
        var options ={
       isStatic: false,
       friction: 1,
       restitution: 0.5,
       density: 1.5
        }
        this.body = Bodies.circle(x,y,20,options);
        World.add(world, this.body);
    }
    display(){
    var angle = this.body.angle;
    push();
    ellipseMode(RADIUS);
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    ellipse(0,0,20,20);
    pop();
    }
    }