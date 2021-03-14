const Engine = Matter.Engine;
const World =  Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var eng, world;
var ground1, box1;
var box2, box3, box4, box5;
var ball, rope;


function setup() {
  createCanvas(800,400);
  
  eng = Engine.create();
  world = eng.world;

ground1 = new Ground();
box1 = new Box(500,100);
box2 = new Box(500,125);
box3 = new Box(500,150);
box4 = new Box(500,175);
box5 = new Box(500,200);
ball = new Ball(400,325);
rope = new Rope(ball.body, {x: 400, y: 200});

}

function draw() {
  background(180);  
  Engine.update(eng);

  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  ball.display();
  rope.display();
}



function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY});
}