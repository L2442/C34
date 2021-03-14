class Ground{
constructor(){
    var options ={
   isStatic: true,
   friction: 1
    }
    this.body = Bodies.rectangle(400,380,800,20, options);
    World.add(world, this.body);
}
display(){

rectMode(CENTER);
rect(this.body.position.x, this.body.position.y, 800,20);

}

}